#!/usr/bin/env python3
"""Embed reviewed CSV headers into the self-contained DWH lineage page.

The output contains table names, column headers and inferred structural
metadata only. Source row values are never written to the HTML.
"""

from __future__ import annotations

import argparse
import csv
import json
import math
import re
from collections import defaultdict
from pathlib import Path


SYSTEMS = {
    "BITRIX": {"label": "BITRIX", "color": "#ff9f1c"},
    "ASOD6": {"label": "ASOD6", "color": "#42ffc2"},
    "PKUKS": {"label": "PKUKS", "color": "#49a7ff"},
}

DOMAIN_META = {
    "BITRIX": {
        "CRM": ("CRM", "#ff9f1c"),
        "SMART": ("СМАРТ-ПРОЦЕССЫ", "#ee5a2a"),
        "TASKS": ("ЗАДАЧИ", "#42ffc2"),
        "SCRUM": ("SCRUM", "#a88bff"),
        "USERS": ("ПОЛЬЗОВАТЕЛИ", "#49a7ff"),
        "BIZPROC": ("БИЗНЕС-ПРОЦЕССЫ", "#e7e056"),
        "SOCIAL": ("СОЦСЕТЬ", "#ef75d8"),
        "SYSTEM": ("СЛУЖЕБНЫЕ", "#8b928d"),
    },
    "ASOD6": {
        "CUSTOMERS": ("КЛИЕНТЫ", "#42ffc2"),
        "REQUESTS": ("ЗАЯВКИ", "#ff9f1c"),
        "BILLING": ("РАСЧЁТЫ", "#49a7ff"),
        "SERVICES": ("УСЛУГИ", "#a88bff"),
        "REFERENCE": ("СПРАВОЧНИКИ", "#e7e056"),
        "HISTORY": ("ИСТОРИЯ", "#8b928d"),
    },
    "PKUKS": {
        "ORDERS": ("ЗАКАЗЫ", "#ff9f1c"),
        "INFRA": ("ИНФРАСТРУКТУРА", "#49a7ff"),
        "EQUIPMENT": ("ОБОРУДОВАНИЕ", "#42ffc2"),
        "GIS": ("ГЕОДАННЫЕ", "#a88bff"),
        "REPORTS": ("ОТЧЁТНЫЕ ВИТРИНЫ", "#8b928d"),
        "REFERENCE": ("СПРАВОЧНИКИ", "#e7e056"),
    },
}

DYNAMIC_TITLES = {
    "31": "Smart Invoice",
    "36": "Smart Document",
    "39": "Документы компаний",
    "153": "Воронка ПЦ ИЦЗ",
    "157": "Присоединение сети электросвязи",
    "165": "Организация соединительной линии",
    "167": "Тендеры",
    "168": "Организация канала SDH",
}


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", value.lower()).strip("_")


def table_id(system: str, name: str) -> str:
    return f"{system.lower()}__{slug(name)}"


def classify(system: str, name: str) -> str:
    low = name.lower()
    if system == "BITRIX":
        if low.startswith("b_crm_dynamic_items_"):
            return "SMART"
        if low.startswith(("b_crm_", "b_utm_crm", "b_uts_crm")):
            return "CRM"
        if low.startswith(("b_tasks_scrum", "b_utm_tasks_scrum", "b_uts_tasks_scrum")):
            return "SCRUM"
        if low.startswith(("b_tasks", "b_uts_tasks_task", "m_task")):
            return "TASKS"
        if low.startswith(("b_user", "m_userfield")):
            return "USERS"
        if low.startswith("b_bp_"):
            return "BIZPROC"
        if low.startswith(("b_sonet", "b_forum")):
            return "SOCIAL"
        return "SYSTEM"
    if system == "ASOD6":
        if low.endswith("_hist"):
            return "HISTORY"
        if any(token in low for token in ("request", "order_status", "order_types")):
            return "REQUESTS"
        if any(token in low for token in ("customer", "contract", "contact", "address", "town", "street", "home", "company_numbers")):
            return "CUSTOMERS"
        if any(token in low for token in ("bill", "payment", "pay_document", "revenue", "saldo", "debtor")):
            return "BILLING"
        if any(token in low for token in ("service", "tariff", "discount", "tax")):
            return "SERVICES"
        return "REFERENCE"
    if any(token in low for token in ("_vw", "report", "etl_")):
        return "REPORTS"
    if low.startswith("hermes_gis"):
        return "GIS"
    if low.startswith("hermes__equip"):
        return "EQUIPMENT"
    if any(token in low for token in ("well", "cable", "ats_", "clusters")):
        return "INFRA"
    if any(token in low for token in ("order", "project", "rollback")):
        return "ORDERS"
    return "REFERENCE"


def readable(name: str) -> str:
    value = re.sub(
        r"^(Billing__|billing__|ARTX_PROJ__|Artx_Proj__|HERMES__|Hermes_Gis__)",
        "",
        name,
    )
    return value.replace("__", " ").replace("_", " ").strip().lower()


def describe(system: str, name: str, domain: str) -> str:
    low = name.lower()
    exact = {
        ("BITRIX", "b_crm_company"): "Компании и их основные реквизиты в CRM.",
        ("BITRIX", "b_crm_contact"): "Контактные лица компаний и клиентов CRM.",
        ("BITRIX", "b_crm_deal"): "Сделки, стадии и коммерческие параметры CRM.",
        ("BITRIX", "b_tasks"): "Задачи, исполнители, сроки и текущие статусы.",
        ("BITRIX", "b_user"): "Пользователи и учётные записи Битрикс.",
        ("BITRIX", "b_sonet_group"): "Рабочие группы и проекты Битрикс.",
        ("BITRIX", "b_crm_dynamic_type"): "Типы и настройки смарт-процессов CRM.",
        ("ASOD6", "Billing__CUSTOMER"): "Клиенты биллинговой системы АСОД.",
        ("ASOD6", "Billing__CUSTOMER_CONTRACT"): "Договоры клиентов и сроки их действия.",
        ("ASOD6", "Billing__requests"): "Заявки на подключение и биллинговые заказы.",
        ("ASOD6", "Billing__requests_all"): "Свод всех заявок и биллинговых заказов.",
        ("ASOD6", "Billing__bill"): "Начисления и итоговые суммы счетов.",
        ("ASOD6", "Billing__payment"): "Платежи и финансовые документы клиентов.",
        ("ASOD6", "Billing__SERVICE"): "Услуги, оказываемые клиентам.",
        ("ASOD6", "Billing__TARIFF_PLAN"): "Тарифные планы биллинговой системы.",
        ("PKUKS", "ARTX_PROJ__ORDER_MAIN"): "Основные данные заказов ПКУКС.",
        ("PKUKS", "ARTX_PROJ__ORDER_OBJECT"): "Объекты, включённые в заказы ПКУКС.",
        ("PKUKS", "ARTX_PROJ__PROJECTS"): "Проекты и их операционные параметры.",
        ("PKUKS", "ARTX_PROJ__WELL"): "Колодцы и узлы кабельной инфраструктуры.",
        ("PKUKS", "HERMES__EQUIP"): "Сетевое оборудование и его размещение.",
        ("PKUKS", "Hermes_Gis__Address2"): "Адресный справочник геоинформационной системы.",
    }
    if (system, name) in exact:
        return exact[(system, name)]
    dynamic = re.fullmatch(r"b_crm_dynamic_items_(\d+)", low)
    if dynamic:
        entity = dynamic.group(1)
        title = DYNAMIC_TITLES.get(entity)
        return f"Элементы смарт-процесса «{title}»." if title else f"Элементы смарт-процесса {entity}."
    label = readable(name)
    if low.endswith("_hist"):
        return f"История изменений: {label.removesuffix(' hist')}."
    templates = {
        "CRM": "Служебные данные CRM: {}.",
        "TASKS": "Данные контура задач: {}.",
        "SCRUM": "Данные Scrum-контура: {}.",
        "USERS": "Пользователи и пользовательские поля: {}.",
        "BIZPROC": "Данные бизнес-процессов: {}.",
        "SOCIAL": "Данные рабочих групп и коммуникаций: {}.",
        "SYSTEM": "Служебная таблица: {}.",
        "CUSTOMERS": "Клиентские данные АСОД: {}.",
        "REQUESTS": "Заявки и статусы АСОД: {}.",
        "BILLING": "Расчётные данные АСОД: {}.",
        "SERVICES": "Услуги и тарификация АСОД: {}.",
        "HISTORY": "История изменений: {}.",
        "ORDERS": "Данные заказов ПКУКС: {}.",
        "INFRA": "Объекты инфраструктуры: {}.",
        "EQUIPMENT": "Данные оборудования: {}.",
        "GIS": "Географический справочник: {}.",
        "REPORTS": "Отчётная витрина: {}.",
        "REFERENCE": "Справочник: {}.",
    }
    return templates.get(domain, "Таблица: {}.").format(label)


def infer_type(column: str, values: list[str]) -> str:
    vals = [value.strip() for value in values if value is not None and value.strip()]
    upper = column.upper()
    if vals and set(value.upper() for value in vals) <= {"Y", "N", "TRUE", "FALSE", "0", "1"}:
        return "~bit"
    if vals and all(re.fullmatch(r"[-+]?\d+", value) for value in vals):
        return "~bigint"
    if vals and all(re.fullmatch(r"[-+]?(?:\d+\.\d*|\d*\.\d+|\d+(?:[eE][-+]?\d+))", value) for value in vals):
        return "~decimal"
    if vals and all(re.fullmatch(r"\d{4}-\d{2}-\d{2}", value) for value in vals):
        return "~date"
    if vals and all(re.match(r"\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}", value) for value in vals):
        return "~datetime"
    if vals and all(re.fullmatch(r"\{?[0-9a-fA-F]{8}-[0-9a-fA-F-]{27,}\}?", value) for value in vals):
        return "~uuid"
    if not vals:
        if upper.endswith("_ID") or upper == "ID":
            return "~bigint"
        if any(token in upper for token in ("DATE", "TIME", "TIMESTAMP")):
            return "~datetime"
        if any(token in upper for token in ("AMOUNT", "PRICE", "SUM", "COST", "QTY")):
            return "~decimal"
        return "~?"
    return "~text" if max(map(len, vals)) > 255 else "~nvarchar"


def read_table(system: str, path: Path) -> dict:
    with path.open("r", encoding="utf-8-sig", errors="replace", newline="") as handle:
        rows = list(csv.reader(handle))
    header = rows[0] if rows else []
    samples = rows[1:]
    name = path.stem.split(".", 1)[1] if "." in path.stem else path.stem
    domain = classify(system, name)
    fields = []
    for index, column in enumerate(header):
        values = [row[index] for row in samples if len(row) > index]
        key = "PK?" if index == 0 and (column.upper() == "ID" or column.upper().endswith("ID")) else ""
        fields.append([column, infer_type(column, values), key])
    domain_label, color = DOMAIN_META[system][domain]
    return {
        "id": table_id(system, name),
        "system": system,
        "domain": domain,
        "domainLabel": domain_label,
        "color": color,
        "name": name,
        "desc": describe(system, name, domain),
        "fields": fields,
        "sampleRows": len(samples),
        "empty": len(samples) == 0,
    }


def find_table(tables: list[dict], system: str, name: str) -> dict | None:
    wanted = name.lower()
    return next(
        (table for table in tables if table["system"] == system and table["name"].lower() == wanted),
        None,
    )


def build_relations(tables: list[dict]) -> list[dict]:
    relations = []
    seen = set()

    def add(source_sys, source_name, source_field, target_sys, target_name, target_field, confidence="high"):
        source = find_table(tables, source_sys, source_name)
        target = find_table(tables, target_sys, target_name)
        if not source or not target or source["id"] == target["id"]:
            return
        source_columns = {field[0].upper(): field[0] for field in source["fields"]}
        target_columns = {field[0].upper(): field[0] for field in target["fields"]}
        sf = source_columns.get(source_field.upper())
        tf = target_columns.get(target_field.upper())
        if not sf or not tf:
            return
        signature = (source["id"], sf, target["id"], tf)
        if signature in seen:
            return
        seen.add(signature)
        relations.append({
            "source": source["id"],
            "sourceField": sf,
            "target": target["id"],
            "targetField": tf,
            "inferred": True,
            "confidence": confidence,
        })

    bitrix_rules = [
        ("b_crm_contact", "COMPANY_ID", "b_crm_company", "ID"),
        ("b_crm_deal", "COMPANY_ID", "b_crm_company", "ID"),
        ("b_crm_deal", "CONTACT_ID", "b_crm_contact", "ID"),
        ("b_crm_deal", "CATEGORY_ID", "b_crm_deal_category", "ID"),
        ("b_crm_deal", "STAGE_ID", "b_crm_status", "STATUS_ID"),
        ("b_crm_item_category", "ENTITY_TYPE_ID", "b_crm_dynamic_type", "ENTITY_TYPE_ID"),
        ("b_crm_role_perms", "ROLE_ID", "b_crm_role", "ID"),
        ("b_sonet_user2group", "USER_ID", "b_user", "ID"),
        ("b_sonet_user2group", "GROUP_ID", "b_sonet_group", "ID"),
        ("b_tasks", "GROUP_ID", "b_sonet_group", "ID"),
        ("b_tasks", "PARENT_ID", "b_tasks", "ID"),
        ("b_user_field_enum", "USER_FIELD_ID", "b_user_field", "ID"),
        ("m_task_type_relations", "TASK_ID", "b_tasks", "ID"),
        ("m_task_type_relations", "TASK_TYPE_ID", "m_task_type", "ID"),
        ("m_userfield_project_relations", "USERFIELD_ID", "b_user_field", "ID"),
        ("m_userfield_project_relations", "PROJECT_ID", "b_sonet_group", "ID"),
        ("m_userfield_task_type_relations", "USERFIELD_ID", "b_user_field", "ID"),
        ("m_userfield_task_type_relations", "TASK_TYPE_ID", "m_task_type", "ID"),
        ("b_tasks_scrum_item", "ENTITY_ID", "b_tasks_scrum_entity", "ID"),
        ("b_tasks_scrum_item", "TYPE_ID", "b_tasks_scrum_type", "ID"),
        ("b_tasks_scrum_item", "EPIC_ID", "b_tasks_scrum_epic", "ID"),
        ("b_tasks_scrum_item", "SOURCE_ID", "b_tasks", "ID"),
        ("b_tasks_scrum_type", "ENTITY_ID", "b_tasks_scrum_entity", "ID"),
        ("b_tasks_scrum_type_participants", "TYPE_ID", "b_tasks_scrum_type", "ID"),
        ("b_tasks_scrum_item_checklist_items", "ITEM_ID", "b_tasks_scrum_item", "ID"),
        ("b_tasks_scrum_item_checklist_tree", "PARENT_ID", "b_tasks_scrum_item_checklist_items", "ID"),
        ("b_tasks_scrum_item_checklist_tree", "CHILD_ID", "b_tasks_scrum_item_checklist_items", "ID"),
        ("b_tasks_scrum_type_checklist_items", "ENTITY_ID", "b_tasks_scrum_type", "ID"),
        ("b_tasks_scrum_type_checklist_tree", "PARENT_ID", "b_tasks_scrum_type_checklist_items", "ID"),
        ("b_tasks_scrum_type_checklist_tree", "CHILD_ID", "b_tasks_scrum_type_checklist_items", "ID"),
        ("b_tasks_label", "GROUP_ID", "b_sonet_group", "ID"),
        ("b_tasks_task_tag", "TAG_ID", "b_tasks_label", "ID"),
    ]
    for child in ("b_tasks_checklist_items", "b_tasks_log", "b_tasks_member", "b_tasks_result", "b_tasks_task_tag"):
        bitrix_rules.append((child, "TASK_ID", "b_tasks", "ID"))
    for source, source_field, target, target_field in bitrix_rules:
        add("BITRIX", source, source_field, "BITRIX", target, target_field)

    value_targets = {
        "b_utm_crm_company": ("b_crm_company", "ID"),
        "b_uts_crm_company": ("b_crm_company", "ID"),
        "b_utm_tasks_scrum_epic": ("b_tasks_scrum_epic", "ID"),
        "b_uts_tasks_scrum_epic": ("b_tasks_scrum_epic", "ID"),
        "b_utm_tasks_scrum_item": ("b_tasks_scrum_item", "ID"),
        "b_uts_tasks_scrum_item": ("b_tasks_scrum_item", "ID"),
        "b_uts_tasks_task": ("b_tasks", "ID"),
    }
    for table in [table for table in tables if table["system"] == "BITRIX"]:
        name = table["name"]
        fields = {field[0].upper() for field in table["fields"]}
        if name.startswith("b_crm_dynamic_items_") and "CATEGORY_ID" in fields:
            add("BITRIX", name, "CATEGORY_ID", "BITRIX", "b_crm_item_category", "ID")
        if name.startswith("b_utm_") and "FIELD_ID" in fields:
            add("BITRIX", name, "FIELD_ID", "BITRIX", "b_user_field", "ID")
        if name in value_targets:
            add("BITRIX", name, "VALUE_ID", "BITRIX", *value_targets[name])

    asod_aliases = {
        "CUSTOMER_ID": ("Billing__CUSTOMER", "CUSTOMER_id"),
        "CUSTOMER_CATEGORY_ID": ("Billing__CUSTOMER_CATEGORY", "CUSTOMER_CATEGORY_id"),
        "CUSTOMER_CONTRACT_ID": ("Billing__CUSTOMER_CONTRACT", "CUSTOMER_CONTRACT_id"),
        "ADDRESS_ID": ("Billing__ADDRESS", "ADDRESS_id"),
        "HOME_ID": ("Billing__HOME", "HOME_id"),
        "TOWN_ID": ("Billing__TOWN", "TOWN_id"),
        "STREET_ID": ("Billing__STREET", "STREET_id"),
        "BILL_ID": ("Billing__bill", "BILL_id"),
        "BILL_ITEM_ID": ("Billing__BILL_ITEM", "BILL_ITEM_id"),
        "PAYMENT_ID": ("Billing__payment", "PAYMENT_id"),
        "SERVICE_ID": ("Billing__SERVICE", "SERVICE_id"),
        "SERVICE_TYPE_ID": ("Billing__SERVICE_TYPE", "SERVICE_TYPE_id"),
        "SERVICE_PRICE_ID": ("Billing__Service_Price", "SERVICE_PRICE_id"),
        "SERVICE_PROVIDER_ID": ("Billing__service_provider", "SERVICE_PROVIDER_id"),
        "SERVICE_DISCOUNT_ID": ("Billing__Service_Discount", "SERVICE_DISCOUNT_id"),
        "TARIFF_PLAN_ID": ("Billing__TARIFF_PLAN", "TARIFF_PLAN_ID"),
        "TAX_ID": ("Billing__TAX", "TAX_id"),
        "TERMINAL_DEVICE_CLASS_ID": ("Billing__TERMINAL_DEVICE_CLASS", "TERMINAL_DEVICE_CLASS_id"),
        "TERMINAL_DEVICE_CONTRACT_ID": ("Billing__TERMINAL_DEVICE_CONTRACT", "TERMINAL_DEVICE_CONTRACT_id"),
        "CONTACT_ID": ("billing__CONTACT", "CONTACT_ID"),
        "CONTACT_TYPE_ID": ("billing__CONTACT_TYPE", "CONTACT_TYPE_ID"),
        "ACTOR_ID": ("Billing__actor", "ACTOR_id"),
        "USECASE_ID": ("Billing__USECASE", "USECASE_id"),
        "USERS_ID": ("Billing__Users", "USERS_id"),
        "CLSF_TYPES_ID": ("Billing__Clsf_Types", "Clsf_Types_id"),
        "CLSF_VALUES_ID": ("Billing__Clsf_Values", "Clsf_Values_id"),
        "COMPANY_NUMBERS_ID": ("Billing__Company_numbers", "Company_numbers_id"),
    }
    for table in [table for table in tables if table["system"] == "ASOD6"]:
        for field, _, _ in table["fields"]:
            upper = field.upper()
            candidates = [upper]
            for prefix in ("PARENT_", "NEW_"):
                if upper.startswith(prefix):
                    candidates.append(upper[len(prefix):])
            target = next((asod_aliases[candidate] for candidate in candidates if candidate in asod_aliases), None)
            if target:
                add("ASOD6", table["name"], field, "ASOD6", target[0], target[1])

    asod_explicit = [
        ("Billing__cust_classif_hist", "cust_classif_id", "Billing__cust_classif", "cust_classif_id"),
        ("Billing__TERMINAL_DEVICE_CLASS", "TDClass_type_id", "Billing__TDClass_types", "tdclass_type_id"),
        ("Billing__SERVICE_TYPE", "SrType", "Billing__SrType", "SrType"),
        ("Billing__SrType", "SFBR_type", "Billing__SFBR_type", "SFBR_type"),
        ("Billing__session_for_bill_result", "SFBR_type", "Billing__SFBR_type", "SFBR_type"),
        ("Billing__CUSTOMER_CONTRACT", "Contract_Type", "Billing__Contract_Types", "Contract_Type"),
        ("Billing__CC_Info_Lnk", "CC_Info_Type_id", "Billing__CC_Info_Type", "CC_Info_Type_id"),
    ]
    for source, source_field, target, target_field in asod_explicit:
        add("ASOD6", source, source_field, "ASOD6", target, target_field)

    pkuks_aliases = {
        "ORDER_ID": ("ARTX_PROJ__ORDER_MAIN", "ORDER_ID"),
        "ORDEROBJECT_ID": ("ARTX_PROJ__ORDER_OBJECT", "ORDEROBJECT_ID"),
        "ORDER_TYPE_ID": ("ARTX_PROJ__ORDER_TYPE", "ORDER_TYPE_ID"),
        "ORDER_TYPEDEF_KEY": ("ARTX_PROJ__ORDER_TYPE_DEFS", "ORDER_TYPEDEF_KEY"),
        "PROJECT_ID": ("ARTX_PROJ__PROJECTS", "PROJECT_ID"),
        "WELL_ID": ("ARTX_PROJ__WELL", "WELL_ID"),
        "WELL_LINE_ID": ("ARTX_PROJ__WELL_LINE", "WELL_LINE_ID"),
        "DCASE_ID": ("ARTX_PROJ__ATS_DCASE", "DCASE_ID"),
        "TCASE_ID": ("ARTX_PROJ__ATS_TCASE", "TCASE_ID"),
        "OS_ID": ("ARTX_PROJ__OS_LIST", "OS_ID"),
        "EQ_ID": ("HERMES__EQUIP", "EQ_ID"),
        "ADDR_ID": ("Hermes_Gis__Address2", "ID"),
        "EQ_ADDRESS_ID": ("Hermes_Gis__Address2", "ID"),
    }
    for table in [table for table in tables if table["system"] == "PKUKS"]:
        for field, _, _ in table["fields"]:
            upper = field.upper()
            target = pkuks_aliases.get(upper)
            if target:
                add("PKUKS", table["name"], field, "PKUKS", target[0], target[1])
            if upper in {"WELL_FROM_ID", "WELL_TO_ID"}:
                add("PKUKS", table["name"], field, "PKUKS", "ARTX_PROJ__WELL", "WELL_ID")

    pkuks_explicit = [
        ("HERMES__EQUIP", "EQ_PAR_ID", "HERMES__EQUIP", "EQ_ID"),
        ("Hermes__Clusters", "CLUSTER_ID", "Hermes__Clusters", "CL_ID"),
        ("ARTX_PROJ__ORDER_OBJECT_WORK", "CTR_ORDER_TYPE_ID", "ARTX_PROJ__CONTRACT_ORDER_TYPE", "CTR_ORDER_TYPE_ID"),
        ("ARTX_PROJ__ATS_TCASE", "ODF_CL_ID", "Hermes__Clusters", "CL_ID"),
        ("ARTX_PROJ__CABLE_DRUMS", "CL_ID", "Hermes__Clusters", "CL_ID"),
    ]
    for source, source_field, target, target_field in pkuks_explicit:
        add("PKUKS", source, source_field, "PKUKS", target, target_field)

    for table in [table for table in tables if table["system"] == "BITRIX" and table["name"].startswith("b_crm_dynamic_items_")]:
        for field, _, _ in table["fields"]:
            upper = field.upper()
            if "REQUEST_PKUKS_ID" in upper:
                add("BITRIX", table["name"], field, "PKUKS", "ARTX_PROJ__ORDER_MAIN", "ORDER_ID", "medium")
            elif upper == "UF_CRM_52_NUMBER_PKUKS":
                add("BITRIX", table["name"], field, "PKUKS", "ARTX_PROJ__ORDER_MAIN", "ORDER_ID", "medium")
            elif "ASOD_COMPANY_ID" in upper:
                add("BITRIX", table["name"], field, "ASOD6", "Billing__Company_numbers", "Company_numbers_id", "medium")
            elif "ASOD6_REQUEST_ID" in upper:
                add("BITRIX", table["name"], field, "ASOD6", "Billing__requests", "TENDERS_HEADER_ID", "low")
            elif upper == "UF_CRM_13_ID_ASOD":
                add("BITRIX", table["name"], field, "ASOD6", "Billing__requests", "TENDERS_HEADER_ID", "low")
            elif upper == "UF_CRM_77_ASOD6_AVBILL_NUMBER":
                add("BITRIX", table["name"], field, "ASOD6", "Billing__bill", "NUMBER_OF_BILL", "low")

    for index, relation in enumerate(relations):
        relation["id"] = f"rel_imported_{index}"
    relation_fields = defaultdict(set)
    for relation in relations:
        relation_fields[relation["source"]].add(relation["sourceField"])
    for table in tables:
        for field in table["fields"]:
            if field[0] in relation_fields[table["id"]]:
                field[2] = "PK/FK?" if field[2] else "FK?"
    return relations


def layout(tables: list[dict]) -> None:
    max_rows = 10
    x_cursor = 80
    for system in ("BITRIX", "ASOD6", "PKUKS"):
        grouped = defaultdict(list)
        for table in tables:
            if table["system"] == system:
                grouped[table["domain"]].append(table)
        for domain in DOMAIN_META[system]:
            items = sorted(grouped.get(domain, []), key=lambda item: item["name"].lower())
            if not items:
                continue
            for index, table in enumerate(items):
                table["x"] = x_cursor + (index // max_rows) * 340
                table["y"] = 130 + (index % max_rows) * 166
            x_cursor += math.ceil(len(items) / max_rows) * 340 + 70
        x_cursor += 260


def build(source_root: Path) -> dict:
    tables = []
    for system, folder in (("BITRIX", "bitrix"), ("ASOD6", "asod6"), ("PKUKS", "pkuks")):
        for path in sorted((source_root / folder).glob("*.csv")):
            tables.append(read_table(system, path))
    layout(tables)
    relations = build_relations(tables)
    return {
        "source": "mssql_export (1).7z",
        "systems": SYSTEMS,
        "stats": {
            "tables": len(tables),
            "columns": sum(len(table["fields"]) for table in tables),
            "emptyTables": sum(1 for table in tables if table["empty"]),
            "relations": len(relations),
        },
        "tables": tables,
        "relations": relations,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-root", type=Path, required=True)
    parser.add_argument("--html", type=Path, required=True)
    args = parser.parse_args()
    data = build(args.source_root)
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")
    html = args.html.read_text(encoding="utf-8")
    replacement = (
        '<!-- SCHEMA_DATA_START -->\n'
        f'  <script id="importedSchema" type="application/json">{payload}</script>\n'
        '  <!-- SCHEMA_DATA_END -->'
    )
    updated, count = re.subn(
        r"<!-- SCHEMA_DATA_START -->.*?<!-- SCHEMA_DATA_END -->",
        replacement,
        html,
        flags=re.S,
    )
    if count != 1:
        raise SystemExit("Schema data markers were not found exactly once")
    args.html.write_text(updated, encoding="utf-8")
    print(json.dumps(data["stats"], ensure_ascii=False))


if __name__ == "__main__":
    main()
