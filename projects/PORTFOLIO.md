# Как представить проекты

Рекомендуемый порядок для аналитических вакансий: Source Atlas → Ledger Bridge → Cohort Compass → Operations Analytics → Service BI Lab → Report Kit → Local Knowledge Search. Для вакансий с упором на AI вынесите поиск выше.

## Source Atlas

**Описание для GitLab:** Manifest-driven CSV profiling, join-cardinality diagnostics and a local SQLite source catalog. Synthetic defects included.

**Для портфолио:** «Разработала демонстрационный каталог источников: профили CSV, кандидаты в ключи, проверки пропусков и дублей, оценка размножения строк при JOIN и контроль загрузки в SQLite».

**Показать:** манифест, исходные дефекты и `examples/catalog.json`. Объяснить разницу между технической полнотой ключей и подтверждённым бизнес-смыслом связи.

## Ledger Bridge

**Описание для GitLab:** Bidirectional reconciliation of fictional ledgers with exact decimal arithmetic, currency separation and explicit duplicate exceptions.

**Для портфолио:** «Реализовала двустороннюю сверку реестров: точные денежные расчёты, отдельный контроль валют, обнаружение несовпадений и неоднозначных ключей, журнал исключений».

**Показать:** оба CSV и `examples/exceptions.csv`. Объяснить, почему совпадение общей суммы не разрешает автоматически сопоставить дубли.

## Cohort Compass

**Описание для GitLab:** Observed customer cohorts and ABC/XYZ segmentation with explicit coverage, missing-month handling and history boundaries.

**Для портфолио:** «Подготовила демонстрационную клиентскую аналитику: наблюдаемые когорты и ABC/XYZ, учёт неполной истории, явные знаменатели и отделение пропусков от нулевой активности».

**Показать:** пять искусственных месячных серий и `examples/analysis.json`; объяснить ограничения выводов о привлечении и оттоке.

## Operations Analytics

**Описание для GitLab:** Reproducible Python ETL with data-quality checks, explicit metric definitions and source/output hashes. Synthetic data only.

**Для портфолио:** «Разработала демонстрационный пайплайн обработки операционных данных на Python: валидация, нормализация, журнал отклонений, расчёт SLA и воспроизводимые CSV/JSON-артефакты».

**Показать:** исходный CSV, примеры плохих записей, результат `examples/metrics.json`, успешные тесты.

## Service BI Lab

**Описание для GitLab:** Synthetic service-operations BI lab: SQLite star schema, cohort metrics, rolling windows, Power Query and DAX starter sources.

**Для портфолио:** «Подготовила демонстрационную аналитическую модель процесса обработки обращений: звезда, когортные SQL-метрики, семидневные окна и разделение дат открытия и закрытия».

**Показать:** SQL, результаты в `examples`, правила метрик и проверку отсутствия размножения строк. Исходники M/DAX есть, но готовая модель Power BI и её проверка в Desktop в этот набор не входят. После ручной сборки и проверки можно добавить собственные скриншоты.

## Report Kit

**Описание для GitLab:** Versioned JSON-to-HTML reporting toolkit with validated blocks, escaped content, responsive layout and print styles.

**Для портфолио:** «Разработала CLI-генератор HTML-отчётов из версионированного JSON: KPI, таблицы и диаграммы; добавила проверку контракта, HTML-экранирование и тесты».

**Показать:** `examples/preview.html` рядом с `examples/report.json`, демонстрацию на узком экране и печать в браузере. Этот проект не следует представлять как полноценный веб-редактор.

## Local Knowledge Search

**Описание для GitLab:** Offline BM25 search over a small Markdown corpus with exact citations, source hashes and a reproducible evaluation fixture.

**Для портфолио:** «Реализовала локальный поисковый компонент для RAG-сценария: индекс SQLite, ранжирование BM25, точные цитаты с номерами строк и оценочный набор запросов».

**Показать:** запрос, найденный фрагмент, исходный документ и `examples/evaluation.json`. Не называть полноценным RAG-ассистентом: генерации ответов, эмбеддингов и LLM здесь нет.

## Общая честная подача

Это самостоятельно написанные для портфолио демонстрационные реализации с помощью AI-инструмента. Они иллюстрируют инженерные подходы и не являются копиями рабочих продуктов. Перед собеседованием стоит пройти код и тесты, выполнить команды самостоятельно и уметь объяснить принятые решения. Формулировку личного вклада используйте только в той мере, в какой можете её подтвердить.

Не приписывайте примерам производственную нагрузку, реальных клиентов, внедрение, экономию времени или прошедший аудит. Не добавляйте в публичные репозитории рабочие SQL, оригинальные PBIX, корпоративные скриншоты, подключения и документы.
