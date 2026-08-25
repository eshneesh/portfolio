const reportData = {
  lks: { h25: 6994.7457, h26: 6857.6521, unit: "км" },
  primaryFiber: { h25: 41266.079, h26: 41667.589, unit: "км" },
  thirdPartyFiber: { h25: 71596577, h26: 71093168.2272, note: "по биллингу" },
  partnerFiber: { h25: 10123043.5944, h26: 10237515.9737, note: "по биллингу" },
  manholes: { h25: 136767, h26: 137096, unit: "шт." },
  presence: { h25: 0.634239, h26: 0.630122 },
  external: { h25: { wells: 69209 }, h26: { wells: 70792 } },
  nonPassable: { h25: 943, h26: 1070, unit: "участков" },
  booking: [
    { name: "Оператор А", value: 33, color: "#1468f5" },
    { name: "Оператор Б", value: 5, color: "#70a1fc" },
    { name: "Сторонние операторы", value: 50, color: "#a7bee4" }
  ],
  darkFiberRent: [
    { name: "Организация 16", h25: 2645460, h26: 2779081 },
    { name: "Организация 17", h25: 1358506, h26: 1543879 },
    { name: "Организация 18", h25: 901348, h26: 1018577 },
    { name: "Итого", h25: 4905309, h26: 5341531, total: true }
  ],
  operations: {
    expenses: { h25: 637124463.2889, h26: 774379049.7555 },
    payroll: { h25: 229775819, h26: 257327171 },
    headcount: { h25: 516, h26: 509 },
    contractors: { h25: 21, h26: 22 },
    contractorSpend: { h25: 357869221.9489, h26: 469633456.8055 },
    relocation: { h25: 36049.5929, h26: 28695.3115, unit: "тыс. ₽" },
    construction: { h25: 31913.0223, h26: 22500.731, unit: "тыс. ₽" },
    design: { h25: 4139.5706, h26: 6197.5805, unit: "тыс. ₽" },
    permits: { h25: 6587, h26: 6369 }
  },
  duti: {
    technicalConditions: {
      pnd: { name: "ТУ ПНД", h25: { requested: 2700, issued: 2012 }, h26: { requested: 1563, issued: 1333 } },
      other: { name: "Прочие ТУ*", h25: { requested: 1675, issued: 1426 }, h26: { requested: 1244, issued: 1184 } }
    },
    stages: [
      { name: "ГП", h25: { requested: 4235, issued: 3702 }, h26: { requested: 2355, issued: 2010 } },
      { name: "РП", h25: { requested: 5164, issued: 4565 }, h26: { requested: 3433, issued: 2691 } },
      { name: "Сдано ИД", h25: 1494, h26: 765, single: true }
    ],
    partner: {
      bookedSites: {
        name: "Зарезервировано под Оператор Б",
        h25: 122,
        h26: 70,
        single: true,
        breakdown: [
          { name: "ЖК", h25: 98, h26: 31 },
          { name: "ОЗ без раскрытия", h25: 0, h26: 41 },
          { name: "ОКН", h25: 26, h26: 1 }
        ]
      },
      technicalConditions: { name: "ТУ Оператор Б", h25: { requested: 297, issued: 289 }, h26: { requested: 146, issued: 128 } },
      workPackages: { name: "РП Оператор Б", h25: { requested: 238, issued: 238 }, h26: { requested: 533, issued: 475 } },
      submittedId: { name: "Сдано ИД Оператор Б", h25: 25, h26: 8, single: true }
    }
  }
};

const commercialData = {
  segments: [
    { name: "Контур A", h25: 362, h26: 352 },
    { name: "Контур B", h25: 787, h26: 781 },
    { name: "Сервисный контур", h25: 2689, h26: 2716 }
  ],
  segmentBreakdown: {
    dkri: [
      { name: "Контур A", h25: 362, h26: 352 },
      { name: "Контур B", h25: 787, h26: 781 }
    ],
    drsp: [
      { name: "Контур D", h25: 2689, h26: 2716 }
    ]
  },
  scope: "Инфраструктурный департамент",
  services: [
    { name: "ЛКС", h25: 1180, h26: 1163, core25: 2818417255.2286, core26: 3152616802.9702, natural25: 65970058.3821, natural26: 65771364.2668, unit: "м" },
    { name: "Передача данных", h25: 205, h26: 103, core25: 185287258.1855, core26: 206748431.6422, natural25: 3624.8378, natural26: 4857.9107, unit: "шт." },
    { name: "Разовое", h25: 465, h26: 473, core25: 146782982.539, core26: 199571587.8248, natural25: 3449, natural26: 948.0712, unit: "шт." },
    { name: "Комплекс ресурсов", h25: 108, h26: 103, core25: 58582883.3714, core26: 66269595.6908, natural25: 2272, natural26: 2204, unit: "шт." },
    { name: "Интернет", h25: 43, h26: 44, core25: 7980683.9724, core26: 11723509.6274, natural25: 787, natural26: 1016, unit: "шт." },
    { name: "Телефония", h25: 20, h26: 20, core25: 1862096.6207, core26: 2006790.944, natural25: 53818, natural26: 48024, unit: "шт." },
    { name: "Dark fiber", h25: 5, h26: 7, core25: 377281.3592, core26: 1428832.0474, natural25: null, natural26: null, unit: "шт." },
    { name: "ЦОД", h25: 0, h26: 1, core25: 0, core26: 3174538.8102, natural25: 0, natural26: 7, unit: "шт." }
  ],
  customerPortfolio: {
    h25: [
      { name: "Вымперабочий кабинетм, ПАО", revenue: 459658378.345, services: 5 },
      { name: "Организация 02", revenue: 449354467.679, services: 4 },
      { name: "Организация 03", revenue: 352287929.716, services: 5 },
      { name: "Организация 04", revenue: 319983442.695, services: 5 },
      { name: "Организация 05", revenue: 113574533.554, services: 2 },
      { name: "Прочий крупный заказчик", revenue: 72281111.673, services: 2 }
    ],
    h26: [
      { name: "Вымперабочий кабинетм, ПАО", revenue: 519580847.608, services: 5 },
      { name: "Организация 02", revenue: 504184752.897, services: 4 },
      { name: "Организация 03", revenue: 374873389.226, services: 4 },
      { name: "Организация 04", revenue: 359625905.185, services: 5 },
      { name: "Организация 05", revenue: 135411689.632, services: 2 },
      { name: "Прочий крупный заказчик", revenue: 8590979, services: 4 }
    ]
  },
  drspCustomerPortfolio: {
    h25: [
      { name: "Организация 06", revenue: 87927506, services: 5 },
      { name: "Организация 07", revenue: 72403806, services: 4 },
      { name: "Организация 08", revenue: 43533360, services: 5 },
      { name: "Организация 09", revenue: 120338597, services: 5 },
      { name: "Прочие", revenue: 204663225, services: 9 },
      { name: "ФЛ", revenue: 4577027, services: 5 }
    ],
    h26: [
      { name: "Организация 06", revenue: 84390499, services: 5 },
      { name: "Организация 07", revenue: 81781254, services: 4 },
      { name: "Организация 08", revenue: 49328754, services: 5 },
      { name: "Организация 09", revenue: 138818995, services: 5 },
      { name: "Прочие", revenue: 230190682, services: 8 },
      { name: "ФЛ", revenue: 5226807, services: 5 }
    ]
  },
  drspServices: [
    // Лист Infratech_усл_продукты_Контур C · 1H25 / 1H26.
    { name: "ЛКС", h25: 84, h26: 93, core25: 248448142.5056, core26: 284274957.4911, natural25: 5958976, natural26: 6085749, unit: "м" },
    { name: "Телефония", h25: 762, h26: 738, core25: 140895308.5993, core26: 148605551.9581, natural25: 62511, natural26: 53076, unit: "шт." },
    { name: "Передача данных", h25: 36, h26: 49, core25: 77724740.2945, core26: 79497451.7946, natural25: 3543, natural26: 3992, unit: "шт." },
    { name: "Интернет", h25: 1061, h26: 1122, core25: 14976632.8754, core26: 18531979.0766, natural25: 1153, natural26: 1219, unit: "шт." },
    { name: "Разовое", h25: 60, h26: 65, core25: 23609329.1624, core26: 31221946.6182, natural25: 0, natural26: 0, unit: "шт." },
    { name: "Комплекс ресурсов", h25: 10, h26: 11, core25: 2195806.512, core26: 2276423.9064, natural25: 11.5469, natural26: 8.1854, unit: "ед." },
    { name: "Продажа оборудования", h25: 6, h26: 2, core25: 1185243, core26: 534529, natural25: 0, natural26: 0, unit: "шт." },
    { name: "Организация 07бильная связь", h25: 69, h26: 65, core25: 1952761.4632, core26: 1785290.6036, natural25: 0, natural26: 0, unit: "шт." },
    { name: "ТВ", h25: 395, h26: 372, core25: 687696.1551, core26: 754384.9702, natural25: 400, natural26: 378, unit: "шт." },
    { name: "ОСО‑РСО", h25: 226, h26: 220, core25: 21767873.9482, core26: 22254487.8561, natural25: 1442, natural26: 1522, unit: "шт." }
  ],
  segmentRevenue: {
    drsp: { h25: 533443506.9596, h26: 589736975.7017, note: "лист Контур C · выручка по основным заказчикам" }
  },
  halfYearBudget: 3411975157.7352,
  projects: {
    scope: "Инфраструктурный департамент",
    revenue: { h25: 116955505.3623, h26: 150230003 },
    count: { h25: 785, h26: 741 },
    inn: null,
    gm: { h25: 0.2484, h26: 0.6306 },
    budget26: 141100003,
    services: [
      { name: "АВР", h25: 309, h26: 197, color: "#1468f5", labelColor: "#0f57c8" },
      { name: "ДеОрганизация 07нтаж", h25: 47, h26: 55, color: "#f27662", labelColor: "#c74b3c" },
      { name: "Инвентаризация", h25: 259, h26: 209, color: "#ffc857", labelColor: "#ad7200" },
      { name: "ПИР + СМР", h25: 178, h26: 289, color: "#3159b7", labelColor: "#274a9b" }
    ]
  },
  drspProjects: {
    scope: "Сервисный контур",
    revenue: { h25: 45176807, h26: 28114377.2083 },
    count: { h25: 13, h26: 10 },
    inn: { h25: 12, h26: 10 },
    gm: { h25: 0.307653, h26: 0.409272 },
    budget26: null,
    serviceMetricKey: "inn",
    serviceMetricLabel: "ИНН",
    services: [
      { name: "СМР", h25: 7, h26: 5, color: "#3159b7", labelColor: "#274a9b" },
      { name: "ПИР", h25: 1, h26: 0, color: "#7fa7eb", labelColor: "#4e75b8" },
      { name: "АВР", h25: 2, h26: 2, color: "#1468f5", labelColor: "#0f57c8" },
      { name: "ДеОрганизация 07нтаж", h25: 1, h26: 1, color: "#f27662", labelColor: "#c74b3c" },
      { name: "РЭБ", h25: 2, h26: 2, color: "#159c9c", labelColor: "#087979" }
    ]
  }
};

const assetData = {
  portfolio: {
    objects: { h25: 89, h26: 89 },
    totalArea: { h25: 270493.6256, h26: 359639.7922 },
    commercialArea: { h25: 87153, h26: 169323 },
    annualRent: { h25: 884882519.8026, h26: 2288966130.2358 }
  },
  commercialRent: {
    inn: { h25: 202, h26: 468 },
    annualMaintenancePerObject: 705179708,
    tenants: [
      { name: "ГУП «Организация 07сковский метрополитен»", area: 4879 },
      { name: "Организация 11", area: 3135 },
      { name: "Организация 07сковский фонд реновации жилой застройки", area: 2587 }
    ]
  },
  usage: {
    technical: { h25: 32143, h26: 43185 },
    commercialBlock: { h25: 4770, h26: 6548 },
    offices: { h25: 29675, h26: 28685 },
    commercialRent: { h25: 82383.9196, h26: 162724.6286 }
  },
  condition: { good: 36, average: 23, poor: 36 }
};

const contractorAnalysis = {
  source: "публичный аналитический срез · 2026",
  h25: { contractors: 54, projects: 1394 },
  h26: { contractors: 72, projects: 1885 },
  darkFiber: {
    h25: { projects: 511, kilometers: 151124 },
    h26: { projects: 503, kilometers: 74407 }
  },
  operators: [
    { name: "Организация 13", h25: { projects: 135, kilometers: 38283 }, h26: { projects: 125, kilometers: 19296 }, color: "#1468f5" },
    { name: "Вымперабочий кабинетм", h25: { projects: 152, kilometers: 57521 }, h26: { projects: 151, kilometers: 27285 }, color: "#5d94ef" },
    { name: "Организация 15", h25: { projects: 230, kilometers: 55327 }, h26: { projects: 233, kilometers: 27832 }, color: "#159c9c" }
  ],
  darkFiberOperators: [
    { name: "Организация 16", h25: { projects: 12, kilometers: 2648 }, h26: { projects: 42, kilometers: 2782 }, color: "#7467e8" },
    { name: "Организация 17", h25: { projects: 279, kilometers: 1362 }, h26: { projects: 306, kilometers: 1547 }, color: "#ec8d3f" },
    { name: "Организация 18", h25: { projects: 226, kilometers: 904 }, h26: { projects: 338, kilometers: 1021 }, color: "#2b9c75" }
  ],
  topFive: [
    { name: "Организация 19", h25: 304, h26: 362, h25Top3: 25, h26Top3: 38 },
    { name: "Организация 20", h25: 191, h26: 298, h25Top3: 0, h26Top3: 0 },
    { name: "Организация 21", h25: 109, h26: 96, h25Top3: 76, h26Top3: 44 },
    { name: "Организация 22", h25: 98, h26: 97, h25Top3: 0, h26Top3: 0 },
    { name: "Организация 23", h25: 56, h26: 70, h25Top3: 24, h26Top3: 22 }
  ]
};

const objectPowerData = [
  ["Объект-001", "Технический узел", "Адрес скрыт", 163, 435],
  ["Объект-002", "Технический узел", "Адрес скрыт", 56, 303],
  ["Объект-003", "Технический узел", "Адрес скрыт", 148, 501],
  ["Объект-004", "Технический узел", "Адрес скрыт", 98, 229.092],
  ["Объект-005", "Технический узел", "Адрес скрыт", 161, 418],
  ["Объект-006", "Технический узел", "Адрес скрыт", 81, 289],
  ["Объект-007", "Технический узел", "Адрес скрыт", 157, 484],
  ["Объект-008", "Технический узел", "Адрес скрыт", 96, 501],
  ["Объект-009", "Технический узел", "Адрес скрыт", 156, 567],
  ["Объект-010", "Технический узел", "Адрес скрыт", 116, 304.6552],
  ["Объект-011", "Технический узел", "Адрес скрыт", 72, 314],
  ["Объект-012", "Технический узел", "Адрес скрыт", 40, 238.056],
  ["Объект-013", "Технический узел", "Адрес скрыт", 68, 222.3856],
  ["Объект-014", "Технический узел", "Адрес скрыт", 139, 316.408],
  ["Объект-015", "Технический узел", "Адрес скрыт", 107, 152],
  ["Объект-016", "Технический узел", "Адрес скрыт", 101, 501],
  ["Объект-017", "Технический узел", "Адрес скрыт", 58, 505],
  ["Объект-018", "Технический узел", "Адрес скрыт", 76, 335],
  ["Объект-019", "Технический узел", "Адрес скрыт", 196, 517.4672],
  ["Объект-020", "Технический узел", "Адрес скрыт", 190, 393.764],
  ["Объект-021", "Технический узел", "Адрес скрыт", 284, 684],
  ["Объект-022", "Технический узел", "Адрес скрыт", 211, 398],
  ["Объект-023", "Технический узел", "Адрес скрыт", 127, 406],
  ["Объект-024", "Технический узел", "Адрес скрыт", 201, 335],
  ["Объект-025", "Технический узел", "Адрес скрыт", 259, 410],
  ["Объект-026", "Технический узел", "Адрес скрыт", 129, 476],
  ["Объект-027", "Технический узел", "Адрес скрыт", 202, 510],
  ["Объект-028", "Технический узел", "Адрес скрыт", 142, 370],
  ["Объект-029", "Технический узел", "Адрес скрыт", 102, 468],
  ["Объект-030", "Технический узел", "Адрес скрыт", 122, 601],
  ["Объект-031", "Технический узел", "Адрес скрыт", 152, 436],
  ["Объект-032", "Технический узел", "Адрес скрыт", 152, 346],
  ["Объект-033", "Технический узел", "Адрес скрыт", 120, 502],
  ["Объект-034", "Технический узел", "Адрес скрыт", 152, 472],
  ["Объект-035", "Технический узел", "Адрес скрыт", 75, 227],
  ["Объект-036", "Технический узел", "Адрес скрыт", 107, 227],
  ["Объект-037", "Технический узел", "Адрес скрыт", 155, 484],
  ["Объект-038", "Технический узел", "Адрес скрыт", 177, 476],
  ["Объект-039", "Технический узел", "Адрес скрыт", 211, 477],
  ["Объект-040", "Технический узел", "Адрес скрыт", 177, 496],
  ["Объект-041", "Технический узел", "Адрес скрыт", 89, 501],
  ["Объект-042", "Технический узел", "Адрес скрыт", 92, 206],
  ["Объект-043", "Технический узел", "Адрес скрыт", 162, 502],
  ["Объект-044", "Технический узел", "Адрес скрыт", 54, 436.924],
  ["Объект-045", "Технический узел", "Адрес скрыт", 91, 335],
  ["Объект-046", "Технический узел", "Адрес скрыт", 115, 235],
  ["Объект-047", "Технический узел", "Адрес скрыт", 625, 742],
  ["Объект-048", "Технический узел", "Адрес скрыт", 128, 460],
  ["Объект-049", "Технический узел", "Адрес скрыт", 110, 335],
  ["Объект-050", "Технический узел", "Адрес скрыт", 119, 277.232],
  ["Объект-051", "Технический узел", "Адрес скрыт", 66, 235],
  ["Объект-052", "Технический узел", "Адрес скрыт", 86, 285],
  ["Объект-053", "Технический узел", "Адрес скрыт", 75, 202],
  ["Объект-054", "Технический узел", "Адрес скрыт", 78, 420],
  ["Объект-055", "Технический узел", "Адрес скрыт", 71, 811.586],
  ["Объект-056", "Технический узел", "Адрес скрыт", 77, 181],
  ["Объект-057", "Технический узел", "Адрес скрыт", 424, 460],
  ["Объект-058", "Технический узел", "Адрес скрыт", 92, 468],
  ["Объект-059", "Технический узел", "Адрес скрыт", 91, 259.9929],
  ["Объект-060", "Технический узел", "Адрес скрыт", 151, 501],
  ["Объект-061", "Технический узел", "Адрес скрыт", 61, 659],
  ["Объект-062", "Технический узел", "Адрес скрыт", 231, 667],
  ["Объект-063", "Технический узел", "Адрес скрыт", 246, 1124],
  ["Объект-064", "Технический узел", "Адрес скрыт", 177, 542],
  ["Объект-065", "Технический узел", "Адрес скрыт", 74, 420],
  ["Объект-066", "Технический узел", "Адрес скрыт", 337, 584],
  ["Объект-067", "Технический узел", "Адрес скрыт", 99, 667],
  ["Объект-068", "Технический узел", "Адрес скрыт", 280, 601],
  ["Объект-069", "Технический узел", "Адрес скрыт", 127, 505],
  ["Объект-070", "Технический узел", "Адрес скрыт", 289, 787],
  ["Объект-071", "Технический узел", "Адрес скрыт", 58, 430],
  ["Объект-072", "Технический узел", "Адрес скрыт", 118, 792],
  ["Объект-073", "Технический узел", "Адрес скрыт", 176, 1165],
  ["Объект-074", "Технический узел", "Адрес скрыт", 353, 1504],
  ["Объект-075", "Технический узел", "Адрес скрыт", 219, 505],
  ["Объект-076", "Технический узел", "Адрес скрыт", 70, 476],
  ["915", "Оператор А-Н", "Тетеринский пер., д.8", 206, 584]
].map(([ats, type, address, consumed, allowed]) => ({ ats, type, address, consumed, allowed }));

const number = (value, digits = 1) => new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: digits,
  maximumFractionDigits: digits
}).format(value);
const integer = value => new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
const percent = value => `${number(value, 1)}%`;
const change = (from, to) => (!Number.isFinite(from) || !Number.isFinite(to) || from === 0) ? null : ((to - from) / from) * 100;
const signedPercent = value => value === null ? "новое" : `${value > 0 ? "+" : ""}${number(value, 1)}%`;
const signedPercentAdaptive = value => value === null ? "новое" : `${value > 0 ? "+" : ""}${number(value, Math.abs(value) < .1 ? 2 : 1)}%`;
const signedPp = value => `${value > 0 ? "+" : ""}${number(value, 1)} п.п.`;
const formatMoney = value => Math.abs(value) < 1000000
  ? `${integer(value / 1000)} тыс. ₽`
  : `${integer(value / 1000000)} млн ₽`;
const formatBillions = value => `${number(value / 1000000000, 2)} млрд ₽`;
const formatArpu = value => `${number(value / 1000, 1)} тыс. ₽`;
const formatKilometers = value => `${integer(Math.round(value / 1000))} км`;
const formatFiberKilometers = value => `${integer(Math.round(value / 10) * 10)} км`;
const formatCommercialNatural = (value, unit) => (value === null || value === undefined) ? "—" : unit === "м" ? `${number(value / 1000, 1)} км` : unit === "ед." ? `${number(value, 1)} ед.` : `${integer(value)} ${unit}`;
const issuanceRate = ({ requested, issued }) => requested === 0 ? 0 : (issued / requested) * 100;
const pair = ({ requested, issued }) => `${integer(requested)} / ${integer(issued)}`;
const formatKilowatts = value => `${Number.isInteger(value) ? integer(value) : number(value, 2)} кВт`;
const formatMegawatts = value => `${number(value / 1000, 1)} МВт`;
const formatArea = value => `${number(value / 1000, 1)} тыс. м²`;
const formatSquareMeters = value => `${integer(value)} м²`;
const formatCompactCount = (value, unit = "шт.") => value >= 1000000
  ? `${number(value / 1000000, 1)} млн ${unit}`
  : value >= 1000
    ? `${number(value / 1000, 1)} тыс. ${unit}`
    : `${integer(value)} ${unit}`;
const formatCompactKm = value => value >= 1000 ? `${number(value / 1000, 1)} тыс. км` : `${integer(value)} км`;
const deltaTone = value => value !== null && value < 0 ? "negative" : "positive";
const periodValue = (value, note = "", meta = "") => `<strong>${value}</strong>${note ? `<small>${note}</small>` : ""}${meta ? `<b>${meta}</b>` : ""}`;
const deltaValue = (value, label = "1H25 → 1H26", secondary = "") => `<strong>${value}</strong><small>${label}</small>${secondary ? `<span>${secondary}</span>` : ""}`;
const comparisonTable = (rows, options = {}) => {
  const metricLabel = options.metricLabel || "Показатель";
  const pastLabel = options.pastLabel || "Базовый период";
  const currentLabel = options.currentLabel || "Текущий период";
  return `<div class="year-ledger${options.className ? ` ${options.className}` : ""}">
    <div class="year-ledger__head">
      <span>${metricLabel}</span>
      <div class="year-ledger__year year-ledger__year--past"><strong>1H 2025</strong><small>${pastLabel}</small></div>
      <div class="year-ledger__year year-ledger__year--current"><strong>1H 2026</strong><small>${currentLabel}</small></div>
      <span class="year-ledger__delta-head" title="Δ 1H25 → 1H26" aria-label="Δ: 1H25 → 1H26">Δ</span>
    </div>
    ${rows.map(row => `<div class="year-ledger__row${row.total ? " year-ledger__row--total" : ""}">
      <div class="year-ledger__metric">${row.color ? `<i style="--ledger-color:${row.color}"></i>` : ""}<div><strong>${row.label}</strong>${row.detail ? `<span>${row.detail}</span>` : ""}</div></div>
      <div class="year-ledger__cell year-ledger__cell--past">${row.past}</div>
      <div class="year-ledger__cell year-ledger__cell--current">${row.current}</div>
      <div class="year-ledger__delta ${row.tone || ""}">${row.delta}</div>
    </div>`).join("")}
  </div>`;
};

function renderNetwork() {
  const totalFiber = period => reportData.primaryFiber[period] + reportData.thirdPartyFiber[period] / 1000 + reportData.partnerFiber[period] / 1000;
  const totalWells = period => reportData.manholes[period] + reportData.external[period].wells;
  const items = [
    { title: "ЛКС", detail: "протяжённость канализации", h25: reportData.lks.h25, h26: reportData.lks.h26, format: formatCompactKm },
    { title: "Телефонные колодцы", detail: "Оператор А + сторонняя инфраструктура", h25: totalWells("h25"), h26: totalWells("h26"), format: value => formatCompactCount(value, "шт.") },
    { title: "ВОЛС — всего проложено", detail: "Оператор А + сторонние операторы + Оператор Б", h25: totalFiber("h25"), h26: totalFiber("h26"), format: formatCompactKm }
  ];
  document.getElementById("networkCompare").innerHTML = comparisonTable(items.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.title,
      detail: item.detail,
      past: periodValue(item.format(item.h25), "итог за 1H 2025"),
      current: periodValue(item.format(item.h26), "итог за 1H 2026"),
      delta: deltaValue(signedPercentAdaptive(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--hero", metricLabel: "Инфраструктура" });
}

function renderFiberSummary() {
  const entries = [
    { name: "ВОЛС Оператор А", h25: reportData.primaryFiber.h25, h26: reportData.primaryFiber.h26 },
    { name: "Сторонние ВОЛС", h25: reportData.thirdPartyFiber.h25 / 1000, h26: reportData.thirdPartyFiber.h26 / 1000, note: reportData.thirdPartyFiber.note },
    { name: "ВОЛС Оператор Б", h25: reportData.partnerFiber.h25 / 1000, h26: reportData.partnerFiber.h26 / 1000, note: reportData.partnerFiber.note }
  ];
  document.getElementById("fiberSummary").innerHTML = comparisonTable(entries.map(entry => {
    const delta = change(entry.h25, entry.h26);
    return {
      label: entry.name,
      detail: entry.note || "проложенная ВОЛС",
      past: periodValue(formatCompactKm(entry.h25)),
      current: periodValue(formatCompactKm(entry.h26)),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--compact", metricLabel: "Тип ВОЛС" });
}

function renderBooking() {
  let offset = 0;
  const total = reportData.booking.reduce((sum, item) => sum + item.value, 0);
  const chart = reportData.booking.map(item => {
    const start = offset;
    offset += item.value;
    return `${item.color} ${start}% ${offset}%`;
  }).join(", ");
  document.getElementById("bookingList").innerHTML = `<div class="booking-list__layout"><div class="booking-legend">${reportData.booking.map(item => `<div><span><i style="--share-color:${item.color}"></i>${item.name}</span><strong>${item.value}%</strong></div>`).join("")}</div><figure class="booking-donut-panel"><div class="booking-donut" style="--booking-chart:conic-gradient(${chart}, #e5edf8 ${total}% 100%)" role="img" aria-label="Структура размещения ВОЛС: ${reportData.booking.map(item => `${item.name} ${item.value}%`).join(", ")}"><div><strong>${total}%</strong><span>учтено</span></div></div><figcaption>1H 2026</figcaption></figure></div><p class="booking-note">Доли размещения ВОЛС в ЛКС Оператор А; 1% не распределён из-за округления исходного среза.</p>`;
}

function renderDarkFiberRent() {
  document.getElementById("dfRentTable").innerHTML = comparisonTable(reportData.darkFiberRent.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.name,
      detail: item.total ? "все операторы" : "оператор Dark Fiber",
      past: periodValue(`${number(item.h25 / 1000000, 2)} тыс. км`),
      current: periodValue(`${number(item.h26 / 1000000, 2)} тыс. км`),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta),
      total: item.total
    };
  }), { metricLabel: "Оператор" });
}

function renderDuti() {
  const { duti } = reportData;
  const tu25 = Object.values(duti.technicalConditions).reduce((total, item) => ({ requested: total.requested + item.h25.requested, issued: total.issued + item.h25.issued }), { requested: 0, issued: 0 });
  const tu26 = Object.values(duti.technicalConditions).reduce((total, item) => ({ requested: total.requested + item.h26.requested, issued: total.issued + item.h26.issued }), { requested: 0, issued: 0 });
  const rows = [
    { name: "ТУ — всего", description: "весь входящий поток", h25: tu25, h26: tu26 },
    { ...duti.technicalConditions.pnd, description: "доля ПНД в общем объёме ТУ" },
    { ...duti.technicalConditions.other, description: "остальные технические условия" },
    ...duti.stages.map(item => ({ ...item, description: item.single ? "комплектов исполнительной документации" : "запрошено / выдано" })),
    { ...duti.partner.bookedSites, description: "объекты инфраструктуры в реестре резервирования" }
  ];
  document.getElementById("dutiLedger").innerHTML = comparisonTable(rows.map(item => {
    if (item.single) {
      const delta = change(item.h25, item.h26);
      const breakdown = period => item.breakdown ? item.breakdown.map(part => `${part.name} ${integer(part[period])}`).join(" · ") : "";
      return {
        label: item.name,
        detail: item.description,
        past: periodValue(`${integer(item.h25)} шт.`, "количество", breakdown("h25")),
        current: periodValue(`${integer(item.h26)} шт.`, "количество", breakdown("h26")),
        delta: deltaValue(signedPercent(delta), "количество · 1H25 → 1H26"),
        tone: deltaTone(delta)
      };
    }
    const rate25 = issuanceRate(item.h25);
    const rate26 = issuanceRate(item.h26);
    const requestedDelta = change(item.h25.requested, item.h26.requested);
    const issuedDelta = change(item.h25.issued, item.h26.issued);
    return {
      label: item.name,
      detail: item.description,
      past: periodValue(`${integer(item.h25.requested)} / ${integer(item.h25.issued)}`, "запрошено / выдано", `конверсия ${number(rate25, 1)}%`),
      current: periodValue(`${integer(item.h26.requested)} / ${integer(item.h26.issued)}`, "запрошено / выдано", `конверсия ${number(rate26, 1)}%`),
      delta: deltaValue(signedPp(rate26 - rate25), "конверсия · 1H25 → 1H26", `запрошено ${signedPercent(requestedDelta)} · выдано ${signedPercent(issuedDelta)}`),
      tone: deltaTone(rate26 - rate25)
    };
  }), { className: "year-ledger--duti", metricLabel: "Этап" });
}

function renderWork() {
  const o = reportData.operations;
  const rp = reportData.duti.stages.find(item => item.name === "РП");
  const totalCore25 = commercialData.services.reduce((sum, item) => sum + item.core25, 0);
  const totalCore26 = commercialData.services.reduce((sum, item) => sum + item.core26, 0);
  const expenseShare25 = o.expenses.h25 / totalCore25 * 100;
  const expenseShare26 = o.expenses.h26 / totalCore26 * 100;
  const row = (label, detail, h25, h26, format, deltaFormat = signedPercent) => {
    const delta = change(h25, h26);
    return {
      label,
      detail,
      past: periodValue(format(h25)),
      current: periodValue(format(h26)),
      delta: deltaValue(deltaFormat(delta)),
      tone: deltaTone(delta)
    };
  };
  const operationsRows = [
    row("Расходы", "эксплуатация ЛКС", o.expenses.h25, o.expenses.h26, formatMoney),
    row("ФОТ", "собственная команда", o.payroll.h25, o.payroll.h26, formatMoney),
    row("Команда", "штатные единицы", o.headcount.h25, o.headcount.h26, value => `${integer(value)} ШЕ`),
    {
      label: "Расходы / Core-доход",
      detail: "доля эксплуатационных расходов в доходе",
      past: periodValue(percent(expenseShare25)),
      current: periodValue(percent(expenseShare26)),
      delta: deltaValue(signedPp(expenseShare26 - expenseShare25), "доля · 1H25 → 1H26"),
      tone: deltaTone(expenseShare26 - expenseShare25)
    }
  ];
  const c = contractorAnalysis;
  const contractorPeriod = item => periodValue(`${integer(item.projects)} проектов`, `${integer(item.kilometers)} км метража`);
  const darkFiberTotal = period => c.darkFiberOperators.reduce((total, item) => ({ projects: total.projects + item[period].projects, kilometers: total.kilometers + item[period].kilometers }), { projects: 0, kilometers: 0 });
  const contractorRows = [
    {
      label: "Подрядчики",
      detail: "активные организации",
      past: periodValue(`${integer(c.h25.contractors)} орг.`),
      current: periodValue(`${integer(c.h26.contractors)} орг.`),
      delta: deltaValue(signedPercent(change(c.h25.contractors, c.h26.contractors))),
      tone: deltaTone(change(c.h25.contractors, c.h26.contractors))
    },
    {
      label: "Проекты по РП",
      detail: "выданные рабочие проекты",
      past: periodValue(`${integer(rp.h25.issued)} проектов`),
      current: periodValue(`${integer(rp.h26.issued)} проектов`),
      delta: deltaValue(signedPercent(change(rp.h25.issued, rp.h26.issued))),
      tone: deltaTone(change(rp.h25.issued, rp.h26.issued))
    },
    {
      label: "Разрешения на работы",
      detail: "выдано для работ в ЛКС",
      past: periodValue(`${integer(c.h25.projects)} разрешений`),
      current: periodValue(`${integer(c.h26.projects)} разрешений`),
      delta: deltaValue(signedPercent(change(c.h25.projects, c.h26.projects))),
      tone: deltaTone(change(c.h25.projects, c.h26.projects))
    },
    {
      label: "Тёмная оптика · ТО‑3",
      detail: "Организация 13 + Вымперабочий кабинетм + Организация 15",
      past: contractorPeriod(c.darkFiber.h25),
      current: contractorPeriod(c.darkFiber.h26),
      delta: deltaValue(signedPercent(change(c.darkFiber.h25.projects, c.darkFiber.h26.projects)), "проекты · 1H25 → 1H26", `${signedPercent(change(c.darkFiber.h25.kilometers, c.darkFiber.h26.kilometers))} · км`),
      tone: deltaTone(change(c.darkFiber.h25.projects, c.darkFiber.h26.projects)),
      total: true
    },
    ...c.operators.map(operator => ({
      label: operator.name,
      detail: "тёмная оптика",
      color: operator.color,
      past: contractorPeriod(operator.h25),
      current: contractorPeriod(operator.h26),
      delta: deltaValue(signedPercent(change(operator.h25.projects, operator.h26.projects)), "проекты · 1H25 → 1H26", `${signedPercent(change(operator.h25.kilometers, operator.h26.kilometers))} · км`),
      tone: deltaTone(change(operator.h25.projects, operator.h26.projects))
    })),
    {
      label: "Операторы Dark Fiber",
      detail: "Организация 16 + Организация 17 + Организация 18",
      past: contractorPeriod(darkFiberTotal("h25")),
      current: contractorPeriod(darkFiberTotal("h26")),
      delta: deltaValue(signedPercent(change(darkFiberTotal("h25").projects, darkFiberTotal("h26").projects)), "проекты · 1H25 → 1H26", `${signedPercent(change(darkFiberTotal("h25").kilometers, darkFiberTotal("h26").kilometers))} · км`),
      tone: deltaTone(change(darkFiberTotal("h25").projects, darkFiberTotal("h26").projects)),
      total: true
    },
    ...c.darkFiberOperators.map(operator => ({
      label: operator.name,
      detail: "оператор Dark Fiber",
      color: operator.color,
      past: contractorPeriod(operator.h25),
      current: contractorPeriod(operator.h26),
      delta: deltaValue(signedPercent(change(operator.h25.projects, operator.h26.projects)), "проекты · 1H25 → 1H26", `${signedPercent(change(operator.h25.kilometers, operator.h26.kilometers))} · км`),
      tone: deltaTone(change(operator.h25.projects, operator.h26.projects))
    }))
  ];
  const contractorTopFive = `<section class="contractor-top-five"><header><div><span>Топ‑5 внешних ПО</span><p>Количество разрешений; отдельно отмечены разрешения для ТО‑3.</p></div><b>${c.source}</b></header><div class="contractor-top-five__head"><span>Подрядчик</span><span>1H 2025 <small>ТО‑3</small></span><span>1H 2026 <small>ТО‑3</small></span><span title="Δ 1H25 → 1H26" aria-label="Δ">Δ</span></div>${c.topFive.map(item => { const delta = change(item.h25, item.h26); return `<div class="contractor-top-five__row"><strong>${item.name}</strong><span><b>${integer(item.h25)}</b><small>${integer(item.h25Top3)} проекта</small></span><span><b>${integer(item.h26)}</b><small>${integer(item.h26Top3)} проекта</small></span><em class="${deltaTone(delta)}">${signedPercent(delta)}</em></div>`; }).join("")}</section>`;
  document.getElementById("workGrid").innerHTML = `
    <article class="work-card work-comparison card"><header><div><span>операционный контур</span><h3>Эксплуатация ЛКС</h3></div></header>${comparisonTable(operationsRows, { metricLabel: "Метрика" })}</article>
    <article class="work-card work-comparison work-contractors card"><header><div><span>проектный контур</span><h3>Анализ внешних ПО</h3></div></header>${comparisonTable(contractorRows, { className: "year-ledger--contractors", metricLabel: "Показатель" })}${contractorTopFive}</article>`;
}

function enhanceExternalPoTable() {
  const table = document.querySelector("#workGrid .contractor-top-five");
  if (!table) return;
  const c = contractorAnalysis;
  const darkFiberProjects = period => c.darkFiberOperators.reduce((sum, item) => sum + item[period].projects, 0);
  table.insertAdjacentHTML("beforeend", `<section class="contractor-project-summary" aria-label="Сводка проектов по операторам"><header><span>Проекты по операторам</span><small>суммарно по трём компаниям в каждой группе</small></header><div class="contractor-project-summary__grid"><article><span>ТО‑3 · 3 компании</span><b>${integer(c.darkFiber.h25.projects)}</b><small>1H 2025 · проектов</small></article><article><span>ТО‑3 · 3 компании</span><b>${integer(c.darkFiber.h26.projects)}</b><small>1H 2026 · проектов</small></article><article><span>Тёмная оптика · 3 оператора</span><b>${integer(darkFiberProjects("h25"))}</b><small>1H 2025 · проектов</small></article><article><span>Тёмная оптика · 3 оператора</span><b>${integer(darkFiberProjects("h26"))}</b><small>1H 2026 · проектов</small></article></div></section>`);
}

function renderAssets() {
  const p = assetData.portfolio;
  const usage = assetData.usage;
  const usageCommercialRent = usage.commercialRent;
  const cards = [
    { label: "Объекты", h25: p.objects.h25, h26: p.objects.h26, format: value => `${integer(value)} шт.`, detail: "в административном портфеле" },
    { label: "Общая площадь", h25: p.totalArea.h25, h26: p.totalArea.h26, format: formatArea, detail: "всего площадей" },
    { label: "Коммерческая площадь", h25: p.commercialArea.h25, h26: p.commercialArea.h26, format: formatArea, detail: "площадь по договорам" },
    { label: "Доход за полугодие", h25: p.annualRent.h25, h26: p.annualRent.h26, format: formatBillions, detail: "доход от сдачи в аренду" }
  ];
  document.getElementById("assetOverview").innerHTML = comparisonTable(cards.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.label,
      detail: item.detail,
      past: periodValue(item.format(item.h25)),
      current: periodValue(item.format(item.h26)),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--hero", metricLabel: "Портфель" });

  const resources = commercialData.services.find(item => item.name === "Комплекс ресурсов");
  const commercialShare25 = (usageCommercialRent.h25 / p.totalArea.h25) * 100;
  const commercialShare26 = (usageCommercialRent.h26 / p.totalArea.h26) * 100;
  const rent = assetData.commercialRent;
  const incomeRows = [
    { label: "Доход от аренды", detail: "за полугодие", h25: p.annualRent.h25, h26: p.annualRent.h26, format: formatBillions },
    { label: "Арендаторы коммерческой аренды", detail: "ИНН с коммерческой арендой", h25: rent.inn.h25, h26: rent.inn.h26, format: value => `${integer(value)} ИНН` },
    { label: "Площадь аренды", detail: "коммерческая аренда · использование площадей", h25: usageCommercialRent.h25, h26: usageCommercialRent.h26, format: formatArea },
    { label: "Доход ПСО", detail: "комплекс ресурсов · Core", h25: resources.core25, h26: resources.core26, format: formatMoney },
    { label: "Клиенты ПСО по объектам", detail: "база ИНН", h25: resources.h25, h26: resources.h26, format: value => `${integer(value)} ИНН` },
    { label: "Площадь ПСО", detail: "под коммерческий контур", h25: usage.commercialBlock.h25, h26: usage.commercialBlock.h26, format: formatArea }
  ];
  document.getElementById("assetIncome").innerHTML = `<header class="card-heading"><h3>Доход и клиенты</h3><span>полугодия</span></header>${comparisonTable(incomeRows.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.label,
      detail: item.detail,
      past: periodValue(item.format(item.h25)),
      current: periodValue(item.format(item.h26)),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--compact", metricLabel: "Метрика" })}`;

  document.getElementById("assetRentDetail").innerHTML = `<header class="card-heading"><div><h3>Содержание и крупнейшие арендаторы</h3><p>Детализация без повторения общей базы ИНН.</p></div><span>админблок</span></header><div class="rent-insights"><div class="rent-insights__monthly"><span>Сумма на содержание одного объекта в год</span><strong>${number(rent.annualMaintenancePerObject / 1000000, 1)} млн ₽</strong><small>${integer(rent.annualMaintenancePerObject)} ₽ / год</small></div><div class="rent-insights__tenants"><span>Крупнейшие арендаторы</span><div>${rent.tenants.map((tenant, index) => `<article><b>${index + 1}</b><p>${tenant.name}</p><strong>${formatSquareMeters(tenant.area)}</strong></article>`).join("")}</div></div></div>`;

  const distributed25 = usage.technical.h25 + usage.commercialBlock.h25 + usage.offices.h25 + usageCommercialRent.h25;
  const distributed26 = usage.technical.h26 + usage.commercialBlock.h26 + usage.offices.h26 + usageCommercialRent.h26;
  const useEntries = [
    { label: "Технический блок", h25: usage.technical.h25, h26: usage.technical.h26, color: "#1468f5" },
    { label: "Коммерческий блок", h25: usage.commercialBlock.h25, h26: usage.commercialBlock.h26, color: "#3159b7" },
    { label: "Офисы Оператор А", h25: usage.offices.h25, h26: usage.offices.h26, color: "#63a3f8" },
    { label: "Коммерческая аренда", h25: usageCommercialRent.h25, h26: usageCommercialRent.h26, color: "#159c9c" },
    { label: "Прочее / не распределено", h25: p.totalArea.h25 - distributed25, h26: p.totalArea.h26 - distributed26, color: "#c8d5e8" }
  ];
  const useBar = (period, label, current = false) => `<div class="asset-use-period${current ? " asset-use-period--current" : ""}"><header><span>${label}</span><strong>${formatArea(p.totalArea[period])}</strong></header><div class="asset-use__bar" aria-label="Распределение площади за ${label}">${useEntries.map(item => `<i style="--share:${item[period] / p.totalArea[period] * 100}%;--use-color:${item.color}" title="${item.label}: ${formatArea(item[period])}"></i>`).join("")}</div></div>`;
  const useRows = useEntries.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.label,
      color: item.color,
      past: periodValue(formatArea(item.h25), `${number(item.h25 / p.totalArea.h25 * 100, 1)}% от площади`),
      current: periodValue(formatArea(item.h26), `${number(item.h26 / p.totalArea.h26 * 100, 1)}% от площади`),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta)
    };
  });
  useRows.push({
    label: "Доля коммерческой аренды",
    detail: "в общей площади",
    past: periodValue(percent(commercialShare25)),
    current: periodValue(percent(commercialShare26)),
    delta: deltaValue(signedPp(commercialShare26 - commercialShare25), "доля · 1H25 → 1H26"),
    tone: deltaTone(commercialShare26 - commercialShare25),
    total: true
  });
  document.getElementById("assetUseSplit").innerHTML = `<header class="card-heading"><h3>Использование площадей</h3><span>м² · полугодия</span></header><div class="asset-use-periods">${useBar("h25", "1H 2025")}${useBar("h26", "1H 2026", true)}</div>${comparisonTable(useRows, { className: "year-ledger--compact", metricLabel: "Назначение" })}`;

  const condition = assetData.condition;
  const assessed = condition.good + condition.average + condition.poor;
  document.getElementById("assetCondition").innerHTML = `<div class="asset-condition__intro"><span>Техническое состояние</span><h3>Портфель объектов</h3><p>${integer(assessed)} объекта в портфеле.</p></div><div class="asset-condition__donut" style="--good:${(condition.good / assessed) * 100}%;--average:${(condition.average / assessed) * 100}%;--poor:${(condition.poor / assessed) * 100}%"><div><strong>${integer(assessed)}</strong><span>объекта</span></div></div><div class="asset-condition__legend"><div><i></i><span>хорошее</span><b>${integer(condition.good)}</b></div><div><i></i><span>среднее</span><b>${integer(condition.average)}</b></div><div><i></i><span>требует внимания</span><b>${integer(condition.poor)}</b></div></div>`;
}

function renderObjectPower() {
  const portfolioObjectCount = assetData.portfolio.objects.h26;
  const total = objectPowerData.reduce((sum, item) => ({
    consumed: sum.consumed + item.consumed,
    allowed: sum.allowed + item.allowed
  }), { consumed: 0, allowed: 0 });
  const reserve = total.allowed - total.consumed;
  const consumptionShare = (total.consumed / total.allowed) * 100;
  const reserveShare = 100 - consumptionShare;

  const cards = [
    { label: "Объекты", value: integer(portfolioObjectCount), detail: "в портфеле объектов 2026", kind: "objects", share: 100, shareLabel: "адресный перечень" },
    { label: "Доступная Организация 07щность", value: formatMegawatts(total.allowed), detail: "разрешённая Организация 07щность · весь ввод", kind: "allowed", share: 100, shareLabel: "доступный объём" },
    { label: "Утилизированная Организация 07щность", value: formatMegawatts(total.consumed), detail: `${number(consumptionShare, 1)}% от доступной`, kind: "consumed", share: consumptionShare, shareLabel: "используется" },
    { label: "Резерв / не используется", value: formatMegawatts(reserve), detail: `${number(reserveShare, 1)}% от доступной`, kind: "reserve", share: reserveShare, shareLabel: "свободный резерв" }
  ];
  document.getElementById("powerOverview").innerHTML = cards.map(card => `<article class="power-kpi power-kpi--${card.kind} card"><header><span>${card.label}</span></header><strong>${card.value}</strong><p>${card.detail}</p><div class="power-kpi__meter"><i style="--share:${card.share}%"></i><b>${card.shareLabel}</b></div></article>`).join("");
  document.getElementById("powerListCount").textContent = integer(portfolioObjectCount);
  document.getElementById("powerListRows").innerHTML = objectPowerData.map(item => {
    const reserveByObject = item.allowed - item.consumed;
    const consumptionByObject = (item.consumed / item.allowed) * 100;
    return `<article class="power-object-row"><div class="power-object-row__identity"><strong>АТС ${item.ats}</strong><span>${item.address}</span><em>${item.type}</em></div><div class="power-object-row__metric" data-label="Потребление"><strong>${formatKilowatts(item.consumed)}</strong></div><div class="power-object-row__metric" data-label="Разрешённая"><strong>${formatKilowatts(item.allowed)}</strong></div><div class="power-object-row__metric power-object-row__reserve" data-label="Резерв"><strong>${formatKilowatts(reserveByObject)}</strong><i style="--consumption:${consumptionByObject}%" aria-label="Потребление ${number(consumptionByObject, 1)} процентов от разрешённой Организация 07щности"></i></div></article>`;
  }).join("");
}

function renderCapacity() {
  const d = reportData;
  const total25 = d.manholes.h25 + d.external.h25.wells;
  const total26 = d.manholes.h26 + d.external.h26.wells;
  const operatorShare25 = d.manholes.h25 / total25 * 100;
  const operatorShare26 = d.manholes.h26 / total26 * 100;
  const externalShare25 = d.external.h25.wells / total25 * 100;
  const externalShare26 = d.external.h26.wells / total26 * 100;
  const nonPassableShare25 = d.nonPassable.h25 / d.manholes.h25 * 100;
  const nonPassableShare26 = d.nonPassable.h26 / d.manholes.h26 * 100;
  const entries = [
    { title: "Всего колодцев", h25: total25, h26: total26, unit: "шт.", detail25: "100%", detail26: "100%" },
    { title: "Колодцы Оператор А", h25: d.manholes.h25, h26: d.manholes.h26, unit: "шт.", detail25: `${number(operatorShare25, 1)}% от общего`, detail26: `${number(operatorShare26, 1)}% от общего` },
    { title: "Сторонние колодцы", h25: d.external.h25.wells, h26: d.external.h26.wells, unit: "шт.", detail25: `${number(externalShare25, 1)}% от общего`, detail26: `${number(externalShare26, 1)}% от общего` },
    { title: "Непроходные участки", h25: d.nonPassable.h25, h26: d.nonPassable.h26, unit: "шт.", detail25: `${number(nonPassableShare25, 1)}% от колодцев Оператор А`, detail26: `${number(nonPassableShare26, 1)}% от колодцев Оператор А`, caution: true }
  ];
  document.getElementById("capacityGrid").innerHTML = comparisonTable(entries.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.title,
      detail: item.caution ? "техническая зона внимания" : "телефонная канализация",
      past: periodValue(formatCompactCount(item.h25, item.unit), item.detail25),
      current: periodValue(formatCompactCount(item.h26, item.unit), item.detail26),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta),
      total: item.title === "Всего колодцев"
    };
  }), { className: "year-ledger--hero", metricLabel: "Категория" });
}

let activeServiceScope = "dkri";
let activeCustomerScope = "dkri";

const halfYearMonths = 6;
const formatMonthlyArpu = value => value === null || !Number.isFinite(value) ? "—" : `${integer(Math.round(value))} ₽`;
const monthlyArpu = (income, inn) => Number.isFinite(income) && Number.isFinite(inn) && inn > 0 ? income / inn / halfYearMonths : null;
const formatPortfolioRevenue = value => value >= 1000000000 ? formatBillions(value) : formatMoney(value);
const serviceView = () => {
  const isDrsp = activeServiceScope === "drsp";
  const services = isDrsp ? commercialData.drspServices : commercialData.services;
  const projects = isDrsp ? commercialData.drspProjects : commercialData.projects;
  const serviceRevenue25 = services.reduce((sum, item) => sum + item.core25, 0);
  const serviceRevenue26 = services.reduce((sum, item) => sum + item.core26, 0);
  const clientBase25 = services.reduce((sum, item) => sum + item.h25, 0);
  const clientBase26 = services.reduce((sum, item) => sum + item.h26, 0);
  return {
    scope: isDrsp ? "Сервисный контур" : "Инфраструктурный департамент",
    services,
    projects,
    serviceRevenue25,
    serviceRevenue26,
    portfolioRevenue25: serviceRevenue25 + projects.revenue.h25,
    portfolioRevenue26: serviceRevenue26 + projects.revenue.h26,
    clientBase25,
    clientBase26
  };
};

function renderServiceTable() {
  const { scope, services } = serviceView();
  document.getElementById("serviceScopeTitle").textContent = `Услуги и доходы ${scope}`;
  document.querySelectorAll("[data-service-scope]").forEach(button => {
    const active = button.dataset.serviceScope === activeServiceScope;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.getElementById("serviceTable").innerHTML = services.map(item => {
    const incomeDelta = change(item.core25, item.core26);
    const innItemDelta = change(item.h25, item.h26);
    const hasNatural = item.natural25 !== null && item.natural25 !== undefined && item.natural26 !== null && item.natural26 !== undefined;
    const naturalDelta = hasNatural ? change(item.natural25, item.natural26) : null;
    const arpu25 = monthlyArpu(item.core25, item.h25);
    const arpu26 = monthlyArpu(item.core26, item.h26);
    const arpuDelta = change(arpu25, arpu26);
    const naturalUnit = item.unit === "м" ? "км" : item.unit;
    const periodMetrics = (period, income, inn, natural, arpu, current = false) => `<div class="service-year ${current ? "service-year--current" : "service-year--past"}"><span>${period}</span><div><small>Core‑доход</small><b>${formatMoney(income)}</b></div><div><small>ИНН, шт.</small><b>${integer(inn)}</b></div><div><small>Натуральный показатель, ${naturalUnit}</small><b>${formatCommercialNatural(natural, item.unit)}</b></div><div><small>ARPU, ₽/мес</small><b>${formatMonthlyArpu(arpu)}</b></div></div>`;
    const deltaCell = (label, value, missing = false) => `<div><span>${label}</span><b class="${missing ? "neutral" : value < 0 ? "negative" : "positive"}">${missing ? "—" : signedPercent(value)}</b></div>`;
    return `<div class="service-row"><div class="service-row__service"><strong>${item.name}</strong></div>${periodMetrics("1H 2025", item.core25, item.h25, item.natural25, arpu25)}${periodMetrics("1H 2026", item.core26, item.h26, item.natural26, arpu26, true)}<div class="service-change">${deltaCell("Core‑доход", incomeDelta)}${deltaCell("ИНН, шт.", innItemDelta)}${deltaCell("Натуральный показатель", naturalDelta, !hasNatural)}${deltaCell("ARPU · ₽/мес", arpuDelta, arpuDelta === null)}</div></div>`;
  }).join("");
  renderServiceMix();
}

function renderServiceMix() {
  const view = serviceView();
  const metric = (label, share, detail, tone = "revenue") => `<div class="service-mix__metric service-mix__metric--${tone}"><span>${label}<b>${number(share, 1)}%</b></span><small>${detail}</small><i><em style="--share:${Math.max(0, Math.min(100, share))}%"></em></i></div>`;
  const period = (periodKey, label) => {
    const revenueTotal = periodKey === "h25" ? view.portfolioRevenue25 : view.portfolioRevenue26;
    const serviceClientTotal = periodKey === "h25" ? view.clientBase25 : view.clientBase26;
    return `<article class="service-mix__period"><header><span>${label}</span><small>портфель ${formatPortfolioRevenue(revenueTotal)}</small></header>${view.services.map(item => {
      const income = item[`core${periodKey.slice(1)}`];
      const inn = item[periodKey];
      const revenueShare = revenueTotal ? income / revenueTotal * 100 : 0;
      const clientShare = serviceClientTotal ? inn / serviceClientTotal * 100 : 0;
      return `<div class="service-mix__row"><strong>${item.name}</strong><div class="service-mix__metrics">${metric("Доход", revenueShare, formatPortfolioRevenue(income), "revenue")}${metric("ИНН", clientShare, `${integer(inn)} ИНН`, "clients")}</div></div>`;
    }).join("")}</article>`;
  };
  document.getElementById("serviceMix").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">${view.scope} · состав портфеля</span><h3>Доли услуг и клиентов</h3></div><span>1H25 / 1H26</span></header><p class="service-mix__note">Доля дохода = Core‑доход услуги / (услуги + инфраструктурные проекты). Доля клиентов = ИНН услуги / сумма ИНН по услугам; один ИНН Организация 07жет входить в несколько услуг.</p><div class="service-mix__periods">${period("h25", "1H 2025")}${period("h26", "1H 2026")}</div>`;
}

function renderCustomerPortfolio(elementId, portfolio, options) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const h25 = portfolio.h25;
  const h26 = portfolio.h26;
  const total25 = h25.reduce((sum, item) => sum + item.revenue, 0);
  const total26 = h26.reduce((sum, item) => sum + item.revenue, 0);
  const byName = (items) => new Map(items.map(item => [item.name, item]));
  const oldItems = byName(h25);
  const newItems = byName(h26);
  const names = [...new Set([...h25, ...h26].map(item => item.name))].sort((a, b) => {
    return (newItems.get(b)?.revenue || 0) - (newItems.get(a)?.revenue || 0);
  });
  const period = (item, total) => item
    ? `<div class="customer-top__period"><strong>${formatPortfolioRevenue(item.revenue)}</strong><span>${integer(item[options.countKey])} ${options.countLabel}</span><small>${number(item.revenue / total * 100, 1)}% ${options.shareLabel}</small></div>`
    : `<div class="customer-top__period customer-top__period--empty"><strong>—</strong><span>нет данных</span><small>—</small></div>`;
  const rows = names.map(name => {
    const oldItem = oldItems.get(name);
    const newItem = newItems.get(name);
    const delta = oldItem && newItem ? change(oldItem.revenue, newItem.revenue) : null;
    return `<div class="customer-top__row"><strong>${name}</strong>${period(oldItem, total25)}${period(newItem, total26)}<b class="${deltaTone(delta)}">${signedPercent(delta)}<small>Δ выручки</small></b></div>`;
  }).join("");
  const scopeSwitch = `<div class="customer-scope-switch" role="tablist" aria-label="Контур заказчиков"><button type="button" class="${activeCustomerScope === "dkri" ? "is-active" : ""}" data-customer-scope="dkri" role="tab" aria-selected="${activeCustomerScope === "dkri"}">Инфраструктурный департамент</button><button type="button" class="${activeCustomerScope === "drsp" ? "is-active" : ""}" data-customer-scope="drsp" role="tab" aria-selected="${activeCustomerScope === "drsp"}">Сервисный контур</button></div>`;
  element.setAttribute("aria-label", `Крупнейшие заказчики ${options.scope}`);
  element.innerHTML = `<header class="customer-top__heading"><div><span class="commercial-kicker">${options.kicker}</span><h3>${options.title}</h3></div><div class="customer-top__heading-actions"><p>${options.subtitle}</p>${scopeSwitch}</div></header><div class="customer-top__table"><div class="customer-top__head"><span>Заказчик</span><span>1H 2025</span><span>1H 2026</span><span>Δ</span></div>${rows}</div><p class="customer-top__note">${options.note}</p>`;
}

function renderCustomerTop() {
  const isDrsp = activeCustomerScope === "drsp";
  renderCustomerPortfolio("customerTop", isDrsp ? commercialData.drspCustomerPortfolio : commercialData.customerPortfolio, isDrsp ? {
    scope: "Сервисный контур",
    kicker: "Сервисный контур · крупные заказчики",
    title: "Выручка и услуги по заказчикам",
    subtitle: "Доход сегмента Сервисный контур и доля каждого заказчика.",
    countKey: "services",
    countLabel: "услуг",
    shareLabel: "от дохода Сервисный контур",
    note: "Количество услуг — показатель из исходной таблицы; он не является числом уникальных клиентов."
  } : {
    scope: "Инфраструктурный департамент",
    kicker: "Инфраструктурный департамент · крупные заказчики",
    title: "Выручка и услуги по заказчикам",
    subtitle: "Доля показана внутри представленного списка заказчиков.",
    countKey: "services",
    countLabel: "услуг",
    shareLabel: "от списка",
    note: "Количество услуг — показатель из исходной таблицы; он не является числом уникальных клиентов."
  });
}

function renderCommercial() {
  const dkriCore25 = commercialData.services.reduce((sum, item) => sum + item.core25, 0);
  const dkriCore26 = commercialData.services.reduce((sum, item) => sum + item.core26, 0);
  const drspCore25 = commercialData.drspServices.reduce((sum, item) => sum + item.core25, 0);
  const drspCore26 = commercialData.drspServices.reduce((sum, item) => sum + item.core26, 0);
  const totalCore25 = dkriCore25 + drspCore25;
  const totalCore26 = dkriCore26 + drspCore26;
  const dkriAb25 = commercialData.segments[0].h25 + commercialData.segments[1].h25;
  const dkriAb26 = commercialData.segments[0].h26 + commercialData.segments[1].h26;
  const drspAb25 = commercialData.segments[2].h25;
  const drspAb26 = commercialData.segments[2].h26;
  const totalAb25 = dkriAb25 + drspAb25;
  const totalAb26 = dkriAb26 + drspAb26;
  const coreDelta = change(totalCore25, totalCore26);
  const innDelta = change(totalAb25, totalAb26);

  const periodCard = (period, income, inn, dkriInn, drspInn, current = false) => `<article class="commercial-period ${current ? "commercial-period--current" : "commercial-period--past"}"><header><span>${period}</span><b>${current ? "Текущий период" : "Базовый период"}</b></header><div class="commercial-period__metrics"><div><span>Core‑доход · Инфраструктурный департамент + Сервисный контур</span><strong>${formatBillions(income)}</strong></div><div><span>Общая абонентская база, ИНН</span><strong>${integer(inn)}<small>Инфраструктурный департамент ${integer(dkriInn)} · Сервисный контур ${integer(drspInn)}</small></strong></div></div></article>`;
  const deltaMetric = (label, delta, detail) => `<div class="commercial-overview__delta"><span>${label}</span><strong class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}</strong><small>${detail}</small></div>`;
  document.getElementById("commercialOverview").innerHTML = `<header class="commercial-overview__header"><div><span class="commercial-kicker">Результат за полугодие</span><h3>Доход и общая абонентская база</h3></div><p>Инфраструктурный департамент + Сервисный контур. Δ = (1H26 / 1H25 − 1) × 100%</p></header><div class="commercial-overview__periods">${periodCard("1H 2025", totalCore25, totalAb25, dkriAb25, drspAb25)}${periodCard("1H 2026", totalCore26, totalAb26, dkriAb26, drspAb26, true)}</div><div class="commercial-overview__deltas"><b>Δ<br>1H25 → 1H26</b>${deltaMetric("Core‑доход", coreDelta, `${formatBillions(totalCore26)} против ${formatBillions(totalCore25)}`)}${deltaMetric("Абонентская база", innDelta, `${integer(totalAb26)} = Инфраструктурный департамент ${integer(dkriAb26)} + Сервисный контур ${integer(drspAb26)}`)}</div>`;

  const budgetAttainment = (dkriCore26 / commercialData.halfYearBudget) * 100;
  const budgetVariance = dkriCore26 - commercialData.halfYearBudget;
  const budgetVariancePercent = change(commercialData.halfYearBudget, dkriCore26);
  document.getElementById("commercialBudget").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">Инфраструктурный департамент · только полугодие</span><h3>Доход и бюджет · 1H 2026</h3></div><b>${number(budgetAttainment, 1)}% · факт / бюджет</b></header><div class="commercial-budget__grid"><div><span>Фактический Core‑доход Инфраструктурный департамент · 1H26</span><strong>${formatBillions(dkriCore26)}</strong></div><div><span>Бюджет Core‑дохода Инфраструктурный департамент · 1H26</span><strong>${formatBillions(commercialData.halfYearBudget)}</strong></div><div class="commercial-budget__variance"><span>Δ факта к бюджету · 1H26</span><strong class="${budgetVariance < 0 ? "negative" : "positive"}">${budgetVariance > 0 ? "+" : ""}${formatMoney(budgetVariance)}</strong><b class="${budgetVariancePercent < 0 ? "negative" : "positive"}">${signedPercent(budgetVariancePercent)} · факт / бюджет</b></div></div>`;

  const drspSegmentRevenue = commercialData.segmentRevenue.drsp;
  const revenueSegments = [
    { name: "Инфраструктурный департамент", note: "текущий коммерческий контур", h25: dkriCore25, h26: dkriCore26 },
    { name: "Сервисный контур", note: drspSegmentRevenue.note, h25: drspSegmentRevenue.h25, h26: drspSegmentRevenue.h26 }
  ];
  const segmentRevenueTotal25 = revenueSegments.reduce((sum, segment) => sum + segment.h25, 0);
  const segmentRevenueTotal26 = revenueSegments.reduce((sum, segment) => sum + segment.h26, 0);
  document.getElementById("commercialRevenueSplit").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">Инфраструктурный департамент + Сервисный контур · доход за полугодие</span><h3>Core‑доход по сегментам</h3></div><span>1H25 / 1H26</span></header><div class="commercial-revenue__grid">${revenueSegments.map(segment => { const delta = change(segment.h25, segment.h26); const share25 = (segment.h25 / segmentRevenueTotal25) * 100; const share26 = (segment.h26 / segmentRevenueTotal26) * 100; return `<article class="revenue-segment"><header><div><h4>${segment.name}</h4><span>${segment.note}</span></div><b class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}<small>Δ дохода · 1H25 → 1H26</small></b></header><div class="revenue-segment__periods"><div><span>1H 2025</span><strong>${formatBillions(segment.h25)}</strong><small>${number(share25, 1)}% от дохода сегментов 1H25</small></div><div><span>1H 2026</span><strong>${formatBillions(segment.h26)}</strong><small>${number(share26, 1)}% от дохода сегментов 1H26</small></div></div></article>`; }).join("")}</div>`;

  const segmentGroups = [
    { name: "Инфраструктурный департамент", note: "существующая абонентская база", h25: dkriAb25, h26: dkriAb26, breakdown: commercialData.segmentBreakdown.dkri },
    { name: "Сервисный контур", note: "абонентская база из протокола 06.08", h25: drspAb25, h26: drspAb26, breakdown: commercialData.segmentBreakdown.drsp }
  ];
  document.getElementById("commercialSegments").innerHTML = segmentGroups.map(segment => {
    const delta = change(segment.h25, segment.h26);
    const share25 = (segment.h25 / totalAb25) * 100;
    const share26 = (segment.h26 / totalAb26) * 100;
    const breakdown = segment.breakdown.map(item => {
      const itemDelta = change(item.h25, item.h26);
      return `<div class="segment-breakdown__row"><strong>${item.name}</strong><span>${integer(item.h25)}</span><span>${integer(item.h26)}</span><b class="${itemDelta < 0 ? "negative" : "positive"}">${signedPercent(itemDelta)}</b></div>`;
    }).join("");
    return `<article class="commercial-segment card"><header><div><h3>${segment.name}</h3><span>${segment.note}</span></div><b class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}<small>ИНН · 1H25 → 1H26</small></b></header><div class="commercial-segment__years"><div class="segment-year segment-year--past"><span>1H 2025 · ИНН, шт.</span><strong>${integer(segment.h25)}</strong><small>${number(share25, 1)}% от всех ИНН 1H25</small></div><div class="segment-year segment-year--current"><span>1H 2026 · ИНН, шт.</span><strong>${integer(segment.h26)}</strong><small>${number(share26, 1)}% от всех ИНН 1H26</small></div></div><div class="segment-breakdown"><header><span>Сегмент</span><span>1H25</span><span>1H26</span><span>Δ</span></header>${breakdown}</div></article>`;
  }).join("");

  renderServiceTable();
  renderCustomerTop();

  const projects = commercialData.projects;
  const incomeProjectDelta = change(projects.revenue.h25, projects.revenue.h26);
  const projectCountDelta = change(projects.count.h25, projects.count.h26);
  const arpu25 = projects.revenue.h25 / projects.count.h25;
  const arpu26 = projects.revenue.h26 / projects.count.h26;
  const arpuDelta = change(arpu25, arpu26);
  const gmDelta = (projects.gm.h26 - projects.gm.h25) * 100;
  const projectBudgetAttainment = (projects.revenue.h26 / projects.budget26) * 100;
  const serviceBar = period => {
    const lastFilledIndex = projects.services.reduce((lastIndex, service, index) => service[period] > 0 ? index : lastIndex, -1);
    return projects.services.map((service, index) => {
      const value = service[period];
      const total = projects.count[period];
      const share = (value / total) * 100;
      return `<span class="project-stack__segment${index === lastFilledIndex ? " project-stack__segment--fill" : ""}" style="--segment-share:${share};--segment-color:${service.color}" title="${service.name}: ${integer(value)} проектов · ${number(share, 1)}% от проектов ${period === "h25" ? "1H25" : "1H26"}"></span>`;
    }).join("");
  };
  const projectLabelLayout = period => {
    let cumulative = 0;
    const labels = projects.services.map(service => {
      const value = service[period];
      const share = (value / projects.count[period]) * 100;
      const anchor = cumulative + share / 2;
      cumulative += share;
      return { service, value, share, anchor, position: anchor };
    }).filter(item => item.value > 0);
    const minGap = 8;
    for (let index = 1; index < labels.length; index += 1) labels[index].position = Math.max(labels[index].position, labels[index - 1].position + minGap);
    if (labels.length) labels[labels.length - 1].position = Math.min(labels[labels.length - 1].position, 96);
    for (let index = labels.length - 2; index >= 0; index -= 1) labels[index].position = Math.min(labels[index].position, labels[index + 1].position - minGap);
    return labels;
  };
  const projectAnnotations = (period, side) => {
    const height = 420;
    const labels = projectLabelLayout(period);
    const anchorX = side === "left" ? 140 : 160;
    const elbowX = side === "left" ? 125 : 175;
    const endX = side === "left" ? 110 : 190;
    const lines = labels.map(item => {
      const anchorY = height * (1 - item.anchor / 100);
      const labelY = height * (1 - item.position / 100);
      const leaderColor = item.service.labelColor || item.service.color;
      return `<polyline points="${anchorX},${anchorY.toFixed(1)} ${elbowX},${anchorY.toFixed(1)} ${endX},${labelY.toFixed(1)}" style="--leader-color:${leaderColor}"></polyline><circle cx="${anchorX}" cy="${anchorY.toFixed(1)}" r="2.4" style="--leader-color:${leaderColor}"></circle>`;
    }).join("");
    const captions = labels.map(item => `<div class="project-stack-label" style="--label-top:${100 - item.position};--label-color:${item.service.labelColor || item.service.color}"><b>${item.service.name}</b><span>${number(item.share, 1)}%</span></div>`).join("");
    return `<svg class="project-stack-leaders" viewBox="0 0 300 420" preserveAspectRatio="none" aria-hidden="true">${lines}</svg><div class="project-stack-labels project-stack-labels--${side}">${captions}</div>`;
  };
  const projectBar = (period, label, side) => `<article class="project-column project-column--${side === "left" ? "past" : "current"}"><div class="project-column__plot"><div class="project-stack" aria-label="Структура проектов ${label}">${serviceBar(period)}</div>${projectAnnotations(period, side)}</div><div class="project-column__caption"><strong>${label}</strong><span>${integer(projects.count[period])} проектов · 100%</span></div></article>`;
  document.getElementById("infrastructureProjects").innerHTML = `<header class="project-portfolio__header"><div><span class="commercial-kicker">non‑Core · без подрядчиков</span><h3>Инфраструктурные проекты</h3></div><div class="project-total-delta"><span>Доход · 1П26 к 1П25</span><strong class="${incomeProjectDelta < 0 ? "negative" : "positive"}">${signedPercent(incomeProjectDelta)}</strong></div></header><div class="project-periods"><article><span>1П 2025</span><div><small>Количество проектов</small><strong>${integer(projects.count.h25)}</strong></div><div><small>Доход non‑Core</small><strong>${number(projects.revenue.h25 / 1000000, 1)} млн ₽</strong></div></article><article><span>1П 2026</span><div><small>Количество проектов</small><strong>${integer(projects.count.h26)}</strong></div><div><small>Доход non‑Core</small><strong>${number(projects.revenue.h26 / 1000000, 1)} млн ₽</strong></div></article></div><div class="project-deltas"><div><span>Δ дохода</span><strong class="${incomeProjectDelta < 0 ? "negative" : "positive"}">${signedPercent(incomeProjectDelta)}</strong><b>1П26 относительно 1П25</b></div><div><span>Δ количества</span><strong class="${projectCountDelta < 0 ? "negative" : "positive"}">${signedPercent(projectCountDelta)}</strong><b>1П26 относительно 1П25</b></div><div><span>ARPU · доход / проект</span><strong class="project-deltas__period-pair"><span><small>1П25</small>${formatArpu(arpu25)}</span><i>→</i><span><small>1П26</small>${formatArpu(arpu26)}</span></strong><b class="${arpuDelta < 0 ? "negative" : "positive"}">${signedPercent(arpuDelta)} · 1П26 к 1П25</b></div><div><span>GM проектов</span><strong>${percent(projects.gm.h25 * 100)} → ${percent(projects.gm.h26 * 100)}</strong><b class="${gmDelta < 0 ? "negative" : "positive"}">${signedPp(gmDelta)} · 1П26 к 1П25</b></div><div><span>Бюджет 1П26</span><strong>${number(projectBudgetAttainment, 1)}%</strong><b>доход / бюджет 1П26</b></div></div><section class="project-composition"><header><div><h4>Структура проектов по услугам</h4><p>Каждый столбик = 100% проектов периода</p></div><span>Доля рассчитывается от общего количества проектов соответствующего полугодия</span></header><div class="project-composition__body"><div class="project-chart"><div class="project-chart__axis" aria-hidden="true"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="project-chart__bars">${projectBar("h25", "1П 2025", "left")}${projectBar("h26", "1П 2026", "right")}</div></div><div class="project-legend">${projects.services.map(service => { const share25 = (service.h25 / projects.count.h25) * 100; const share26 = (service.h26 / projects.count.h26) * 100; const delta = change(service.h25, service.h26); return `<div><span><i style="--segment-color:${service.color}"></i>${service.name}</span><b><small>1П 2025</small>${integer(service.h25)} · ${number(share25, 1)}%</b><b><small>1П 2026</small>${integer(service.h26)} · ${number(share26, 1)}%</b><strong class="${delta === null || delta >= 0 ? "positive" : "negative"}">${signedPercent(delta)}<small>Δ количества</small></strong></div>`; }).join("")}</div></div></section>`;
  renderInfrastructurePortfolio("infrastructureProjects", commercialData.projects);
  renderInfrastructurePortfolio("infrastructureProjectsDrsp", commercialData.drspProjects);
}

function renderInfrastructurePortfolio(containerId, projects) {
  const incomeDelta = change(projects.revenue.h25, projects.revenue.h26);
  const countDelta = change(projects.count.h25, projects.count.h26);
  const serviceMetricKey = projects.serviceMetricKey || "count";
  const serviceMetricLabel = projects.serviceMetricLabel || "проектов";
  const serviceTotal = period => projects[serviceMetricKey]?.[period] || projects.count[period];
  const arpu25 = projects.count.h25 ? projects.revenue.h25 / projects.count.h25 : null;
  const arpu26 = projects.count.h26 ? projects.revenue.h26 / projects.count.h26 : null;
  const arpuDelta = change(arpu25, arpu26);
  const gmDelta = (projects.gm.h26 - projects.gm.h25) * 100;
  const budgetAttainment = projects.budget26 ? projects.revenue.h26 / projects.budget26 * 100 : null;
  const periodMetrics = (period, key) => {
    const inn = projects.inn ? `<div><small>ИНН, шт.</small><strong>${integer(projects.inn[key])}</strong></div>` : "";
    return `<article><span>${period}</span><div><small>Проекты</small><strong>${integer(projects.count[key])}</strong></div><div><small>Доход</small><strong>${formatMoney(projects.revenue[key])}</strong></div>${inn}</article>`;
  };
  const deltaCard = (label, value, tone, detail) => `<div><b class="project-delta__marker">Δ · 1H25 → 1H26</b><span>${label}</span><strong class="${tone}">${value}</strong><small>${detail}</small></div>`;
  const serviceShares = period => projects.services.map(service => ({
    service,
    value: service[period],
    share: serviceTotal(period) ? service[period] / serviceTotal(period) * 100 : 0
  }));
  const labelLayout = period => {
    const labels = [];
    let cumulative = 0;
    serviceShares(period).forEach(item => {
      const anchor = cumulative + item.share / 2;
      cumulative += item.share;
      if (item.value > 0) labels.push({ ...item, anchor, position: anchor });
    });
    const minimumGap = 10;
    labels.forEach((item, index) => {
      if (index) item.position = Math.max(item.position, labels[index - 1].position + minimumGap);
    });
    if (labels.length) labels[labels.length - 1].position = Math.min(labels[labels.length - 1].position, 96);
    for (let index = labels.length - 2; index >= 0; index -= 1) labels[index].position = Math.min(labels[index].position, labels[index + 1].position - minimumGap);
    return labels;
  };
  const leaderAnnotations = (period, side) => {
    const height = 420;
    const labels = labelLayout(period);
    const anchorX = side === "left" ? 140 : 160;
    const elbowX = side === "left" ? 124 : 176;
    const endX = side === "left" ? 96 : 204;
    const leaders = labels.map(item => {
      const anchorY = height * (1 - item.anchor / 100);
      const labelY = height * (1 - item.position / 100);
      const color = item.service.labelColor || item.service.color;
      return `<polyline points="${anchorX},${anchorY.toFixed(1)} ${elbowX},${anchorY.toFixed(1)} ${endX},${labelY.toFixed(1)}" style="--leader-color:${color}"></polyline><circle cx="${anchorX}" cy="${anchorY.toFixed(1)}" r="2.4" style="--leader-color:${color}"></circle>`;
    }).join("");
    const captions = labels.map(item => `<div class="project-stack-label" style="--label-top:${100 - item.position};--label-color:${item.service.labelColor || item.service.color}"><b>${item.service.name}</b><span>${number(item.share, 1)}%</span></div>`).join("");
    return `<svg class="project-stack-leaders" viewBox="0 0 300 420" preserveAspectRatio="none" aria-hidden="true">${leaders}</svg><div class="project-stack-labels project-stack-labels--${side}">${captions}</div>`;
  };
  const bar = (period, label, side) => `<article class="project-column project-column--${side === "left" ? "past" : "current"}"><div class="project-column__plot"><div class="project-stack" aria-label="Структура ${serviceMetricLabel} ${projects.scope}, ${label}">${serviceShares(period).map(item => `<span class="project-stack__segment" style="--segment-share:${item.share};--segment-color:${item.service.color}" title="${item.service.name}: ${integer(item.value)} ${serviceMetricLabel} · ${number(item.share, 1)}%"></span>`).join("")}</div>${leaderAnnotations(period, side)}</div><div class="project-column__caption"><strong>${label}</strong><span>${integer(projects.count[period])} проектов · ${integer(serviceTotal(period))} ${serviceMetricLabel} · 100%</span></div></article>`;
  const legend = projects.services.map(service => {
    const serviceDelta = change(service.h25, service.h26);
    return `<div><span><i style="--segment-color:${service.color}"></i>${service.name}</span><b><small>1H 2025</small>${integer(service.h25)} ${serviceMetricLabel}</b><b><small>1H 2026</small>${integer(service.h26)} ${serviceMetricLabel}</b><strong class="${deltaTone(serviceDelta)}">${signedPercent(serviceDelta)}<small>Δ количества</small></strong></div>`;
  }).join("");
  const budgetCard = projects.budget26
    ? deltaCard("Выполнение бюджета", percent(budgetAttainment), budgetAttainment >= 100 ? "positive" : "negative", "доход / бюджет · 1H26")
    : deltaCard("Бюджет", "—", "neutral", "не предоставлен для Сервисный контур");
  const arpuCard = arpu25 !== null && arpu26 !== null
    ? `<div><b class="project-delta__marker">Δ · 1H25 → 1H26</b><span>ARPU · доход / проект</span><strong class="project-deltas__period-pair"><span><small>1H25</small>${formatArpu(arpu25)}</span><i>→</i><span><small>1H26</small>${formatArpu(arpu26)}</span></strong><small class="${deltaTone(arpuDelta)}">${signedPercent(arpuDelta)} · Δ ARPU</small></div>`
    : deltaCard("ARPU · доход / проект", "—", "neutral", "не рассчитывается");
  document.getElementById(containerId).innerHTML = `<header class="project-portfolio__header"><div><span class="commercial-kicker">${projects.scope} · без подрядчиков</span><h3>Инфраструктурные проекты ${projects.scope}</h3></div><div class="project-total-delta"><span>Δ дохода</span><strong class="${deltaTone(incomeDelta)}">${signedPercent(incomeDelta)}</strong><small>1H25 → 1H26</small></div></header><div class="project-periods${projects.inn ? " project-periods--with-inn" : ""}">${periodMetrics("1H 2025", "h25")}${periodMetrics("1H 2026", "h26")}</div><div class="project-deltas">${deltaCard("Доход", signedPercent(incomeDelta), deltaTone(incomeDelta), "доход · 1H25 → 1H26")}${deltaCard("Проекты по РП", signedPercent(countDelta), deltaTone(countDelta), "количество · 1H25 → 1H26")}${arpuCard}${deltaCard("GM проектов", `${percent(projects.gm.h25 * 100)} → ${percent(projects.gm.h26 * 100)}`, deltaTone(gmDelta), `${signedPp(gmDelta)} · Δ GM`)}${budgetCard}</div><section class="project-composition"><header><div><h4>Структура по услугам</h4><p>Доли показаны только у столбиков; каждый столбик = 100% ${serviceMetricLabel} периода.</p></div><span>${serviceMetricLabel === "ИНН" ? "Количество ИНН по услугам" : "Количество проектов по РП"}</span></header><div class="project-composition__body"><div class="project-chart"><div class="project-chart__axis" aria-hidden="true"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="project-chart__bars">${bar("h25", "1H 2025", "left")}${bar("h26", "1H 2026", "right")}</div></div><div class="project-legend">${legend}</div></div></section>`;
}

function setupServiceScopeSwitch() {
  document.querySelectorAll("[data-service-scope]").forEach(button => {
    button.addEventListener("click", () => {
      activeServiceScope = button.dataset.serviceScope;
      renderServiceTable();
      renderServiceMix();
    });
  });
}

function setupCustomerScopeSwitch() {
  document.querySelectorAll("[data-customer-scope]").forEach(button => {
    button.addEventListener("click", () => {
      activeCustomerScope = button.dataset.customerScope;
      renderCustomerTop();
      setupCustomerScopeSwitch();
    });
  });
}

function revealTab(tabId, shouldScroll = true) {
  document.querySelectorAll(`[data-panel="${tabId}"][data-reveal]`).forEach(panel => {
    panel.classList.remove("is-animated");
    panel.classList.add("is-visible");
    requestAnimationFrame(() => panel.classList.add("is-animated"));
  });
  if (shouldScroll) window.scrollTo({ top: document.querySelector(".section-nav").offsetTop - 4, behavior: "smooth" });
}

function setupTabsFallback() {
  const tabs = [...document.querySelectorAll("[data-report-tab]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  const selectTab = tabId => {
    tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.reportTab === tabId));
    panels.forEach(panel => panel.classList.toggle("is-active", panel.dataset.panel === tabId));
    revealTab(tabId);
  };
  tabs.forEach(tab => tab.addEventListener("click", () => selectTab(tab.dataset.reportTab)));
  selectTab("commercial");
}

function setupVueApp() {
  if (!window.Vue?.createApp) {
    setupTabsFallback();
    return;
  }

  const { createApp, nextTick } = window.Vue;
  createApp({
    data: () => ({ activeTab: "commercial" }),
    methods: {
      selectTab(tabId) {
        this.activeTab = tabId;
        nextTick(() => revealTab(tabId));
      }
    }
  }).mount("#reportApp");
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      requestAnimationFrame(() => entry.target.classList.add("is-animated"));
    }
  }), { threshold: 0.06 });
  document.querySelectorAll("[data-reveal]").forEach(section => observer.observe(section));
}

renderNetwork();
renderFiberSummary();
renderBooking();
renderDarkFiberRent();
renderDuti();
renderWork();
enhanceExternalPoTable();
renderAssets();
renderObjectPower();
renderCapacity();
renderCommercial();
setupVueApp();
setupServiceScopeSwitch();
setupCustomerScopeSwitch();
setupReveal();
document.getElementById("printReport").addEventListener("click", () => window.print());
