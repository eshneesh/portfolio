const reportData = {
  assetA: { h25: 6994.7457, h26: 6857.6521, unit: "ед." },
  primaryAsset: { h25: 41266.079, h26: 41667.589, unit: "ед." },
  thirdPartyAsset: { h25: 71596577, h26: 71093168.2272, note: "по процесс 02" },
  partnerAsset: { h25: 10123043.5944, h26: 10237515.9737, note: "по процесс 02" },
  assetPoints: { h25: 136767, h26: 137096, unit: "шт." },
  presence: { h25: 0.634239, h26: 0.630122 },
  external: { h25: { points: 69209 }, h26: { points: 70792 } },
  nonPassable: { h25: 943, h26: 1070, unit: "участков" },
  allocation: [
    { name: "Поставщик 01", value: 33, color: "#1468f5" },
    { name: "Поставщик 02", value: 5, color: "#70a1fc" },
    { name: "Поставщики 03", value: 50, color: "#a7bee4" }
  ],
  serviceTypeRent: [
    { name: "Контрагент 16", h25: 2645460, h26: 2779081 },
    { name: "Контрагент 17", h25: 1358506, h26: 1543879 },
    { name: "Контрагент 18", h25: 901348, h26: 1018577 },
    { name: "Итого", h25: 4905309, h26: 5341531, total: true }
  ],
  operations: {
    expenses: { h25: 637124463.2889, h26: 774379049.7555 },
    payroll: { h25: 229775819, h26: 257327171 },
    headcount: { h25: 516, h26: 509 },
    providers: { h25: 21, h26: 22 },
    providerSpend: { h25: 357869221.9489, h26: 469633456.8055 },
    relocation: { h25: 36049.5929, h26: 28695.3115, unit: "тыс. ₽" },
    construction: { h25: 31913.0223, h26: 22500.731, unit: "тыс. ₽" },
    design: { h25: 4139.5706, h26: 6197.5805, unit: "тыс. ₽" },
    permits: { h25: 6587, h26: 6369 }
  },
  processFlow: {
    requestFlow: {
      pnd: { name: "Этап 01", h25: { requested: 2700, issued: 2012 }, h26: { requested: 1563, issued: 1333 } },
      other: { name: "Этап 02", h25: { requested: 1675, issued: 1426 }, h26: { requested: 1244, issued: 1184 } }
    },
    stages: [
      { name: "Этап 03", h25: { requested: 4235, issued: 3702 }, h26: { requested: 2355, issued: 2010 } },
      { name: "Этап 04", h25: { requested: 5164, issued: 4565 }, h26: { requested: 3433, issued: 2691 } },
      { name: "Этап 05", h25: 1494, h26: 765, single: true }
    ],
    partner: {
      bookedSites: {
        name: "Зарезервировано под Поставщик 01",
        h25: 122,
        h26: 70,
        single: true,
        breakdown: [
          { name: "Тип 01", h25: 98, h26: 31 },
          { name: "Тип 02", h25: 0, h26: 41 },
          { name: "Тип 03", h25: 26, h26: 1 }
        ]
      },
      requestFlow: { name: "Документ 01 Поставщик 02", h25: { requested: 297, issued: 289 }, h26: { requested: 146, issued: 128 } },
      workPackages: { name: "Этап 04 Поставщик 02", h25: { requested: 238, issued: 238 }, h26: { requested: 533, issued: 475 } },
      submittedId: { name: "Этап 05 Поставщик 02", h25: 25, h26: 8, single: true }
    }
  }
};

const commercialData = {
  segments: [
    { name: "Контур A", h25: 362, h26: 352 },
    { name: "Контур B", h25: 787, h26: 781 },
    { name: "Направление 04", h25: 2689, h26: 2716 }
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
  scope: "Направление 01",
  services: [
    { name: "Услуга 01", h25: 1180, h26: 1163, core25: 2818417255.2286, core26: 3152616802.9702, natural25: 65970058.3821, natural26: 65771364.2668, unit: "ед." },
    { name: "Услуга 02", h25: 205, h26: 103, core25: 185287258.1855, core26: 206748431.6422, natural25: 3624.8378, natural26: 4857.9107, unit: "шт." },
    { name: "Услуга 03", h25: 465, h26: 473, core25: 146782982.539, core26: 199571587.8248, natural25: 3449, natural26: 948.0712, unit: "шт." },
    { name: "Услуга 04", h25: 108, h26: 103, core25: 58582883.3714, core26: 66269595.6908, natural25: 2272, natural26: 2204, unit: "шт." },
    { name: "Услуга 05", h25: 43, h26: 44, core25: 7980683.9724, core26: 11723509.6274, natural25: 787, natural26: 1016, unit: "шт." },
    { name: "Услуга 06", h25: 20, h26: 20, core25: 1862096.6207, core26: 2006790.944, natural25: 53818, natural26: 48024, unit: "шт." },
    { name: "Услуга 07", h25: 5, h26: 7, core25: 377281.3592, core26: 1428832.0474, natural25: null, natural26: null, unit: "шт." },
    { name: "Услуга 08", h25: 0, h26: 1, core25: 0, core26: 3174538.8102, natural25: 0, natural26: 7, unit: "шт." }
  ],
  customerPortfolio: {
    h25: [
      { name: "Контрагент 01", revenue: 459658378.345, services: 5 },
      { name: "Контрагент 02", revenue: 449354467.679, services: 4 },
      { name: "Контрагент 03", revenue: 352287929.716, services: 5 },
      { name: "Контрагент 04", revenue: 319983442.695, services: 5 },
      { name: "Контрагент 05", revenue: 113574533.554, services: 2 },
      { name: "Прочий крупный заказчик", revenue: 72281111.673, services: 2 }
    ],
    h26: [
      { name: "Контрагент 01", revenue: 519580847.608, services: 5 },
      { name: "Контрагент 02", revenue: 504184752.897, services: 4 },
      { name: "Контрагент 03", revenue: 374873389.226, services: 4 },
      { name: "Контрагент 04", revenue: 359625905.185, services: 5 },
      { name: "Контрагент 05", revenue: 135411689.632, services: 2 },
      { name: "Прочий крупный заказчик", revenue: 8590979, services: 4 }
    ]
  },
  drspCustomerPortfolio: {
    h25: [
      { name: "Контрагент 06", revenue: 87927506, services: 5 },
      { name: "Контрагент 07", revenue: 72403806, services: 4 },
      { name: "Контрагент 08", revenue: 43533360, services: 5 },
      { name: "Контрагент 09", revenue: 120338597, services: 5 },
      { name: "Прочие", revenue: 204663225, services: 9 },
      { name: "Категория 05", revenue: 4577027, services: 5 }
    ],
    h26: [
      { name: "Контрагент 06", revenue: 84390499, services: 5 },
      { name: "Контрагент 07", revenue: 81781254, services: 4 },
      { name: "Контрагент 08", revenue: 49328754, services: 5 },
      { name: "Контрагент 09", revenue: 138818995, services: 5 },
      { name: "Прочие", revenue: 230190682, services: 8 },
      { name: "Категория 05", revenue: 5226807, services: 5 }
    ]
  },
  drspServices: [
    { name: "Услуга 01", h25: 84, h26: 93, core25: 248448142.5056, core26: 284274957.4911, natural25: 5958976, natural26: 6085749, unit: "ед." },
    { name: "Услуга 06", h25: 762, h26: 738, core25: 140895308.5993, core26: 148605551.9581, natural25: 62511, natural26: 53076, unit: "шт." },
    { name: "Услуга 02", h25: 36, h26: 49, core25: 77724740.2945, core26: 79497451.7946, natural25: 3543, natural26: 3992, unit: "шт." },
    { name: "Услуга 05", h25: 1061, h26: 1122, core25: 14976632.8754, core26: 18531979.0766, natural25: 1153, natural26: 1219, unit: "шт." },
    { name: "Услуга 03", h25: 60, h26: 65, core25: 23609329.1624, core26: 31221946.6182, natural25: 0, natural26: 0, unit: "шт." },
    { name: "Услуга 04", h25: 10, h26: 11, core25: 2195806.512, core26: 2276423.9064, natural25: 11.5469, natural26: 8.1854, unit: "ед." },
    { name: "Услуга 09", h25: 6, h26: 2, core25: 1185243, core26: 534529, natural25: 0, natural26: 0, unit: "шт." },
    { name: "Услуга 12", h25: 69, h26: 65, core25: 1952761.4632, core26: 1785290.6036, natural25: 0, natural26: 0, unit: "шт." },
    { name: "Услуга 10", h25: 395, h26: 372, core25: 687696.1551, core26: 754384.9702, natural25: 400, natural26: 378, unit: "шт." },
    { name: "Услуга 11", h25: 226, h26: 220, core25: 21767873.9482, core26: 22254487.8561, natural25: 1442, natural26: 1522, unit: "шт." }
  ],
  segmentRevenue: {
    drsp: { h25: 533443506.9596, h26: 589736975.7017, note: "лист Контур C · выручка по основным заказчикам" }
  },
  halfYearBudget: 3411975157.7352,
  projects: {
    scope: "Направление 01",
    revenue: { h25: 116955505.3623, h26: 150230003 },
    count: { h25: 785, h26: 741 },
    inn: null,
    gm: { h25: 0.2484, h26: 0.6306 },
    budget26: 141100003,
    services: [
      { name: "Тип проекта 01", h25: 309, h26: 197, color: "#1468f5", labelColor: "#0f57c8" },
      { name: "Тип проекта 07", h25: 47, h26: 55, color: "#f27662", labelColor: "#c74b3c" },
      { name: "Тип проекта 02", h25: 259, h26: 209, color: "#ffc857", labelColor: "#ad7200" },
      { name: "Тип проекта 03", h25: 178, h26: 289, color: "#3159b7", labelColor: "#274a9b" }
    ]
  },
  drspProjects: {
    scope: "Направление 04",
    revenue: { h25: 45176807, h26: 28114377.2083 },
    count: { h25: 13, h26: 10 },
    inn: { h25: 12, h26: 10 },
    gm: { h25: 0.307653, h26: 0.409272 },
    budget26: null,
    serviceMetricKey: "inn",
    serviceMetricLabel: "идентификатор",
    services: [
      { name: "Тип проекта 04", h25: 7, h26: 5, color: "#3159b7", labelColor: "#274a9b" },
      { name: "Тип проекта 05", h25: 1, h26: 0, color: "#7fa7eb", labelColor: "#4e75b8" },
      { name: "Тип проекта 01", h25: 2, h26: 2, color: "#1468f5", labelColor: "#0f57c8" },
      { name: "Тип проекта 07", h25: 1, h26: 1, color: "#f27662", labelColor: "#c74b3c" },
      { name: "Тип проекта 06", h25: 2, h26: 2, color: "#159c9c", labelColor: "#087979" }
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
      { name: "Контрагент 24", area: 4879 },
      { name: "Контрагент 11", area: 3135 },
      { name: "Контрагент 25", area: 2587 }
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

const providerAnalysis = {
  source: "публичный аналитический срез · 2026",
  h25: { providers: 54, projects: 1394 },
  h26: { providers: 72, projects: 1885 },
  serviceCategory: {
    h25: { projects: 511, kilometers: 151124 },
    h26: { projects: 503, kilometers: 74407 }
  },
  operators: [
    { name: "Контрагент 13", h25: { projects: 135, kilometers: 38283 }, h26: { projects: 125, kilometers: 19296 }, color: "#1468f5" },
    { name: "Контрагент 01", h25: { projects: 152, kilometers: 57521 }, h26: { projects: 151, kilometers: 27285 }, color: "#5d94ef" },
    { name: "Контрагент 15", h25: { projects: 230, kilometers: 55327 }, h26: { projects: 233, kilometers: 27832 }, color: "#159c9c" }
  ],
  serviceTypeOperators: [
    { name: "Контрагент 16", h25: { projects: 12, kilometers: 2648 }, h26: { projects: 42, kilometers: 2782 }, color: "#7467e8" },
    { name: "Контрагент 17", h25: { projects: 279, kilometers: 1362 }, h26: { projects: 306, kilometers: 1547 }, color: "#ec8d3f" },
    { name: "Контрагент 18", h25: { projects: 226, kilometers: 904 }, h26: { projects: 338, kilometers: 1021 }, color: "#2b9c75" }
  ],
  topFive: [
    { name: "Контрагент 19", h25: 304, h26: 362, h25Top3: 25, h26Top3: 38 },
    { name: "Контрагент 20", h25: 191, h26: 298, h25Top3: 0, h26Top3: 0 },
    { name: "Контрагент 21", h25: 109, h26: 96, h25Top3: 76, h26Top3: 44 },
    { name: "Контрагент 22", h25: 98, h26: 97, h25Top3: 0, h26Top3: 0 },
    { name: "Контрагент 23", h25: 56, h26: 70, h25Top3: 24, h26Top3: 22 }
  ]
};

const objectPowerData = [
  ["Объект-001", "Тип объекта 01", "Адрес скрыт", 163, 435],
  ["Объект-002", "Тип объекта 01", "Адрес скрыт", 56, 303],
  ["Объект-003", "Тип объекта 01", "Адрес скрыт", 148, 501],
  ["Объект-004", "Тип объекта 01", "Адрес скрыт", 98, 229.092],
  ["Объект-005", "Тип объекта 01", "Адрес скрыт", 161, 418],
  ["Объект-006", "Тип объекта 01", "Адрес скрыт", 81, 289],
  ["Объект-007", "Тип объекта 01", "Адрес скрыт", 157, 484],
  ["Объект-008", "Тип объекта 01", "Адрес скрыт", 96, 501],
  ["Объект-009", "Тип объекта 01", "Адрес скрыт", 156, 567],
  ["Объект-010", "Тип объекта 01", "Адрес скрыт", 116, 304.6552],
  ["Объект-011", "Тип объекта 01", "Адрес скрыт", 72, 314],
  ["Объект-012", "Тип объекта 01", "Адрес скрыт", 40, 238.056],
  ["Объект-013", "Тип объекта 01", "Адрес скрыт", 68, 222.3856],
  ["Объект-014", "Тип объекта 01", "Адрес скрыт", 139, 316.408],
  ["Объект-015", "Тип объекта 01", "Адрес скрыт", 107, 152],
  ["Объект-016", "Тип объекта 01", "Адрес скрыт", 101, 501],
  ["Объект-017", "Тип объекта 01", "Адрес скрыт", 58, 505],
  ["Объект-018", "Тип объекта 01", "Адрес скрыт", 76, 335],
  ["Объект-019", "Тип объекта 01", "Адрес скрыт", 196, 517.4672],
  ["Объект-020", "Тип объекта 01", "Адрес скрыт", 190, 393.764],
  ["Объект-021", "Тип объекта 01", "Адрес скрыт", 284, 684],
  ["Объект-022", "Тип объекта 01", "Адрес скрыт", 211, 398],
  ["Объект-023", "Тип объекта 01", "Адрес скрыт", 127, 406],
  ["Объект-024", "Тип объекта 01", "Адрес скрыт", 201, 335],
  ["Объект-025", "Тип объекта 01", "Адрес скрыт", 259, 410],
  ["Объект-026", "Тип объекта 01", "Адрес скрыт", 129, 476],
  ["Объект-027", "Тип объекта 01", "Адрес скрыт", 202, 510],
  ["Объект-028", "Тип объекта 01", "Адрес скрыт", 142, 370],
  ["Объект-029", "Тип объекта 01", "Адрес скрыт", 102, 468],
  ["Объект-030", "Тип объекта 01", "Адрес скрыт", 122, 601],
  ["Объект-031", "Тип объекта 01", "Адрес скрыт", 152, 436],
  ["Объект-032", "Тип объекта 01", "Адрес скрыт", 152, 346],
  ["Объект-033", "Тип объекта 01", "Адрес скрыт", 120, 502],
  ["Объект-034", "Тип объекта 01", "Адрес скрыт", 152, 472],
  ["Объект-035", "Тип объекта 01", "Адрес скрыт", 75, 227],
  ["Объект-036", "Тип объекта 01", "Адрес скрыт", 107, 227],
  ["Объект-037", "Тип объекта 01", "Адрес скрыт", 155, 484],
  ["Объект-038", "Тип объекта 01", "Адрес скрыт", 177, 476],
  ["Объект-039", "Тип объекта 01", "Адрес скрыт", 211, 477],
  ["Объект-040", "Тип объекта 01", "Адрес скрыт", 177, 496],
  ["Объект-041", "Тип объекта 01", "Адрес скрыт", 89, 501],
  ["Объект-042", "Тип объекта 01", "Адрес скрыт", 92, 206],
  ["Объект-043", "Тип объекта 01", "Адрес скрыт", 162, 502],
  ["Объект-044", "Тип объекта 01", "Адрес скрыт", 54, 436.924],
  ["Объект-045", "Тип объекта 01", "Адрес скрыт", 91, 335],
  ["Объект-046", "Тип объекта 01", "Адрес скрыт", 115, 235],
  ["Объект-047", "Тип объекта 01", "Адрес скрыт", 625, 742],
  ["Объект-048", "Тип объекта 01", "Адрес скрыт", 128, 460],
  ["Объект-049", "Тип объекта 01", "Адрес скрыт", 110, 335],
  ["Объект-050", "Тип объекта 01", "Адрес скрыт", 119, 277.232],
  ["Объект-051", "Тип объекта 01", "Адрес скрыт", 66, 235],
  ["Объект-052", "Тип объекта 01", "Адрес скрыт", 86, 285],
  ["Объект-053", "Тип объекта 01", "Адрес скрыт", 75, 202],
  ["Объект-054", "Тип объекта 01", "Адрес скрыт", 78, 420],
  ["Объект-055", "Тип объекта 01", "Адрес скрыт", 71, 811.586],
  ["Объект-056", "Тип объекта 01", "Адрес скрыт", 77, 181],
  ["Объект-057", "Тип объекта 01", "Адрес скрыт", 424, 460],
  ["Объект-058", "Тип объекта 01", "Адрес скрыт", 92, 468],
  ["Объект-059", "Тип объекта 01", "Адрес скрыт", 91, 259.9929],
  ["Объект-060", "Тип объекта 01", "Адрес скрыт", 151, 501],
  ["Объект-061", "Тип объекта 01", "Адрес скрыт", 61, 659],
  ["Объект-062", "Тип объекта 01", "Адрес скрыт", 231, 667],
  ["Объект-063", "Тип объекта 01", "Адрес скрыт", 246, 1124],
  ["Объект-064", "Тип объекта 01", "Адрес скрыт", 177, 542],
  ["Объект-065", "Тип объекта 01", "Адрес скрыт", 74, 420],
  ["Объект-066", "Тип объекта 01", "Адрес скрыт", 337, 584],
  ["Объект-067", "Тип объекта 01", "Адрес скрыт", 99, 667],
  ["Объект-068", "Тип объекта 01", "Адрес скрыт", 280, 601],
  ["Объект-069", "Тип объекта 01", "Адрес скрыт", 127, 505],
  ["Объект-070", "Тип объекта 01", "Адрес скрыт", 289, 787],
  ["Объект-071", "Тип объекта 01", "Адрес скрыт", 58, 430],
  ["Объект-072", "Тип объекта 01", "Адрес скрыт", 118, 792],
  ["Объект-073", "Тип объекта 01", "Адрес скрыт", 176, 1165],
  ["Объект-074", "Тип объекта 01", "Адрес скрыт", 353, 1504],
  ["Объект-075", "Тип объекта 01", "Адрес скрыт", 219, 505],
  ["Объект-076", "Тип объекта 01", "Адрес скрыт", 70, 476],
  ["Объект-077", "Тип объекта 01", "Адрес скрыт", 206, 584]
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
const formatKilometers = value => `${integer(Math.round(value / 1000))} ед.`;
const formatAssetKilometers = value => `${integer(Math.round(value / 10) * 10)} ед.`;
const formatCommercialNatural = value => (value === null || value === undefined) ? "—" : `${number(value, 1)} ед.`;
const issuanceRate = ({ requested, issued }) => requested === 0 ? 0 : (issued / requested) * 100;
const pair = ({ requested, issued }) => `${integer(requested)} / ${integer(issued)}`;
const formatKilowatts = value => `${Number.isInteger(value) ? integer(value) : number(value, 2)} ед.`;
const formatMegawatts = value => `${number(value / 1000, 1)} тыс. ед.`;
const formatArea = value => `${number(value / 1000, 1)} тыс. ед.`;
const formatSquareMeters = value => `${integer(value)} ед.`;
const formatCompactCount = (value, unit = "шт.") => value >= 1000000
  ? `${number(value / 1000000, 1)} млн ${unit}`
  : value >= 1000
    ? `${number(value / 1000, 1)} тыс. ${unit}`
    : `${integer(value)} ${unit}`;
const formatCompactKm = value => value >= 1000 ? `${number(value / 1000, 1)} тыс. ед.` : `${integer(value)} ед.`;
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

function renderAssetComparison() {
  const totalAsset = period => reportData.primaryAsset[period] + reportData.thirdPartyAsset[period] / 1000 + reportData.partnerAsset[period] / 1000;
  const totalPoints = period => reportData.assetPoints[period] + reportData.external[period].points;
  const items = [
    { title: "Актив 01", detail: "показатель актива", h25: reportData.assetA.h25, h26: reportData.assetA.h26, format: formatCompactKm },
    { title: "Актив 03", detail: "Поставщик 01 + Поставщик 03", h25: totalPoints("h25"), h26: totalPoints("h26"), format: value => formatCompactCount(value, "шт.") },
    { title: "Актив 02 — всего", detail: "Поставщик 01 + сторонние поставщики + Поставщик 02", h25: totalAsset("h25"), h26: totalAsset("h26"), format: formatCompactKm }
  ];
  document.getElementById("assetCompare").innerHTML = comparisonTable(items.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.title,
      detail: item.detail,
      past: periodValue(item.format(item.h25), "итог за период 01"),
      current: periodValue(item.format(item.h26), "итог за период 02"),
      delta: deltaValue(signedPercentAdaptive(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--hero", metricLabel: "направление 01" });
}

function renderAssetSummary() {
  const entries = [
    { name: "Актив 02 Поставщик 01", h25: reportData.primaryAsset.h25, h26: reportData.primaryAsset.h26 },
    { name: "Сторонние Актив 02", h25: reportData.thirdPartyAsset.h25 / 1000, h26: reportData.thirdPartyAsset.h26 / 1000, note: reportData.thirdPartyAsset.note },
    { name: "Актив 02 Поставщик 01", h25: reportData.partnerAsset.h25 / 1000, h26: reportData.partnerAsset.h26 / 1000, note: reportData.partnerAsset.note }
  ];
  document.getElementById("assetSummary").innerHTML = comparisonTable(entries.map(entry => {
    const delta = change(entry.h25, entry.h26);
    return {
      label: entry.name,
      detail: entry.note || "показатель актива",
      past: periodValue(formatCompactKm(entry.h25)),
      current: periodValue(formatCompactKm(entry.h26)),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta)
    };
  }), { className: "year-ledger--compact", metricLabel: "Тип Актив 02" });
}

function renderAllocation() {
  let offset = 0;
  const total = reportData.allocation.reduce((sum, item) => sum + item.value, 0);
  const chart = reportData.allocation.map(item => {
    const start = offset;
    offset += item.value;
    return `${item.color} ${start}% ${offset}%`;
  }).join(", ");
  document.getElementById("allocationList").innerHTML = `<div class="allocation-list__layout"><div class="allocation-legend">${reportData.allocation.map(item => `<div><span><i style="--share-color:${item.color}"></i>${item.name}</span><strong>${item.value}%</strong></div>`).join("")}</div><figure class="allocation-donut-panel"><div class="allocation-donut" style="--allocation-chart:conic-gradient(${chart}, #e5edf8 ${total}% 100%)" role="img" aria-label="Структура показателя: ${reportData.allocation.map(item => `${item.name} ${item.value}%`).join(", ")}"><div><strong>${total}%</strong><span>учтено</span></div></div><figcaption>Период 02</figcaption></figure></div><p class="allocation-note">Доли показателя по поставщикам; расхождение связано с округлением исходного среза.</p>`;
}

function renderServiceTypeRent() {
  document.getElementById("dfRentTable").innerHTML = comparisonTable(reportData.serviceTypeRent.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.name,
      detail: item.total ? "все поставщики" : "Поставщик 01",
      past: periodValue(`${number(item.h25 / 1000000, 2)} тыс. ед.`),
      current: periodValue(`${number(item.h26 / 1000000, 2)} тыс. ед.`),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta),
      total: item.total
    };
  }), { metricLabel: "поставщик" });
}

function renderProcessFlow() {
  const { processFlow } = reportData;
  const tu25 = Object.values(processFlow.requestFlow).reduce((total, item) => ({ requested: total.requested + item.h25.requested, issued: total.issued + item.h25.issued }), { requested: 0, issued: 0 });
  const tu26 = Object.values(processFlow.requestFlow).reduce((total, item) => ({ requested: total.requested + item.h26.requested, issued: total.issued + item.h26.issued }), { requested: 0, issued: 0 });
  const rows = [
    { name: "Документ 01 — всего", description: "весь входящий поток", h25: tu25, h26: tu26 },
    { ...processFlow.requestFlow.pnd, description: "доля Тип 01 в общем объёме Документ 01" },
    { ...processFlow.requestFlow.other, description: "остальные элементы потока" },
    ...processFlow.stages.map(item => ({ ...item, description: item.single ? "комплектов исполнительной документации" : "запрошено / выдано" })),
    { ...processFlow.partner.bookedSites, description: "объекты направление 01 в реестре резервирования" }
  ];
  document.getElementById("processFlowLedger").innerHTML = comparisonTable(rows.map(item => {
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
  }), { className: "year-ledger--processFlow", metricLabel: "Этап" });
}

function renderWork() {
  const o = reportData.operations;
  const rp = reportData.processFlow.stages.find(item => item.name === "Этап 04");
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
    row("Расходы", "процесс 04 Актив 01", o.expenses.h25, o.expenses.h26, formatMoney),
    row("Расход 01", "собственная команда", o.payroll.h25, o.payroll.h26, formatMoney),
    row("Команда", "штатные единицы", o.headcount.h25, o.headcount.h26, value => `${integer(value)} ед.`),
    {
      label: "Расходы / Категория 01-доход",
      detail: "доля процесс 04 расходов в доходе",
      past: periodValue(percent(expenseShare25)),
      current: periodValue(percent(expenseShare26)),
      delta: deltaValue(signedPp(expenseShare26 - expenseShare25), "доля · 1H25 → 1H26"),
      tone: deltaTone(expenseShare26 - expenseShare25)
    }
  ];
  const c = providerAnalysis;
  const providerPeriod = item => periodValue(`${integer(item.projects)} проектов`, `${integer(item.kilometers)} ед.`);
  const serviceTypeTotal = period => c.serviceTypeOperators.reduce((total, item) => ({ projects: total.projects + item[period].projects, kilometers: total.kilometers + item[period].kilometers }), { projects: 0, kilometers: 0 });
  const providerRows = [
    {
      label: "поставщик",
      detail: "активные организации",
      past: periodValue(`${integer(c.h25.providers)} орг.`),
      current: periodValue(`${integer(c.h26.providers)} орг.`),
      delta: deltaValue(signedPercent(change(c.h25.providers, c.h26.providers))),
      tone: deltaTone(change(c.h25.providers, c.h26.providers))
    },
    {
      label: "Проекты по Этап 04",
      detail: "выданные рабочие проекты",
      past: periodValue(`${integer(rp.h25.issued)} проектов`),
      current: periodValue(`${integer(rp.h26.issued)} проектов`),
      delta: deltaValue(signedPercent(change(rp.h25.issued, rp.h26.issued))),
      tone: deltaTone(change(rp.h25.issued, rp.h26.issued))
    },
    {
      label: "Разрешения на работы",
      detail: "выдано для работ в Актив 01",
      past: periodValue(`${integer(c.h25.projects)} документов`),
      current: periodValue(`${integer(c.h26.projects)} документов`),
      delta: deltaValue(signedPercent(change(c.h25.projects, c.h26.projects))),
      tone: deltaTone(change(c.h25.projects, c.h26.projects))
    },
    {
      label: "Услуга 01 · Категория 03",
      detail: "Контрагент 13 + Контрагент 01 + Контрагент 15",
      past: providerPeriod(c.serviceCategory.h25),
      current: providerPeriod(c.serviceCategory.h26),
      delta: deltaValue(signedPercent(change(c.serviceCategory.h25.projects, c.serviceCategory.h26.projects)), "проекты · период 01 → период 02", `${signedPercent(change(c.serviceCategory.h25.kilometers, c.serviceCategory.h26.kilometers))} · ед.`),
      tone: deltaTone(change(c.serviceCategory.h25.projects, c.serviceCategory.h26.projects)),
      total: true
    },
    ...c.operators.map(operator => ({
      label: operator.name,
      detail: "Услуга 01",
      color: operator.color,
      past: providerPeriod(operator.h25),
      current: providerPeriod(operator.h26),
      delta: deltaValue(signedPercent(change(operator.h25.projects, operator.h26.projects)), "проекты · период 01 → период 02", `${signedPercent(change(operator.h25.kilometers, operator.h26.kilometers))} · ед.`),
      tone: deltaTone(change(operator.h25.projects, operator.h26.projects))
    })),
    {
      label: "Поставщик 01 01",
      detail: "Контрагент 16 + Контрагент 17 + Контрагент 18",
      past: providerPeriod(serviceTypeTotal("h25")),
      current: providerPeriod(serviceTypeTotal("h26")),
      delta: deltaValue(signedPercent(change(serviceTypeTotal("h25").projects, serviceTypeTotal("h26").projects)), "проекты · период 01 → период 02", `${signedPercent(change(serviceTypeTotal("h25").kilometers, serviceTypeTotal("h26").kilometers))} · ед.`),
      tone: deltaTone(change(serviceTypeTotal("h25").projects, serviceTypeTotal("h26").projects)),
      total: true
    },
    ...c.serviceTypeOperators.map(operator => ({
      label: operator.name,
      detail: "Поставщик 01 01",
      color: operator.color,
      past: providerPeriod(operator.h25),
      current: providerPeriod(operator.h26),
      delta: deltaValue(signedPercent(change(operator.h25.projects, operator.h26.projects)), "проекты · период 01 → период 02", `${signedPercent(change(operator.h25.kilometers, operator.h26.kilometers))} · ед.`),
      tone: deltaTone(change(operator.h25.projects, operator.h26.projects))
    }))
  ];
  const providerTopFive = `<section class="provider-top-five"><header><div><span>Поставщики 01–05</span><p>Количество документов по поставщикам и категориям.</p></div><b>${c.source}</b></header><div class="provider-top-five__head"><span>Поставщик</span><span>Период 01 <small>Категория 03</small></span><span>Период 02 <small>Категория 03</small></span><span title="Δ периода 01 → период 02" aria-label="Δ">Δ</span></div>${c.topFive.map(item => { const delta = change(item.h25, item.h26); return `<div class="provider-top-five__row"><strong>${item.name}</strong><span><b>${integer(item.h25)}</b><small>${integer(item.h25Top3)} проекта</small></span><span><b>${integer(item.h26)}</b><small>${integer(item.h26Top3)} проекта</small></span><em class="${deltaTone(delta)}">${signedPercent(delta)}</em></div>`; }).join("")}</section>`;
  document.getElementById("workGrid").innerHTML = `
    <article class="work-card work-comparison card"><header><div><span>операционный контур</span><h3>процесс 04 Актив 01</h3></div></header>${comparisonTable(operationsRows, { metricLabel: "Метрика" })}</article>
    <article class="work-card work-comparison work-providers card"><header><div><span>проектный контур</span><h3>Анализ поставщиков</h3></div></header>${comparisonTable(providerRows, { className: "year-ledger--providers", metricLabel: "Показатель" })}${providerTopFive}</article>`;
}

function enhanceExternalPoTable() {
  const table = document.querySelector("#workGrid .provider-top-five");
  if (!table) return;
  const c = providerAnalysis;
  const serviceTypeProjects = period => c.serviceTypeOperators.reduce((sum, item) => sum + item[period].projects, 0);
  table.insertAdjacentHTML("beforeend", `<section class="provider-project-summary" aria-label="Сводка проектов по поставщик"><header><span>Проекты по поставщик</span><small>суммарно по трём компаниям в каждой группе</small></header><div class="provider-project-summary__grid"><article><span>Категория 03 · 3 компании</span><b>${integer(c.serviceCategory.h25.projects)}</b><small>1H 2025 · проектов</small></article><article><span>Категория 03 · 3 компании</span><b>${integer(c.serviceCategory.h26.projects)}</b><small>1H 2026 · проектов</small></article><article><span>Услуга 01 · 3 поставщик</span><b>${integer(serviceTypeProjects("h25"))}</b><small>1H 2025 · проектов</small></article><article><span>Услуга 01 · 3 поставщик</span><b>${integer(serviceTypeProjects("h26"))}</b><small>1H 2026 · проектов</small></article></div></section>`);
}

function renderAssets() {
  const p = assetData.portfolio;
  const usage = assetData.usage;
  const usageCommercialRent = usage.commercialRent;
  const cards = [
    { label: "Объекты", h25: p.objects.h25, h26: p.objects.h26, format: value => `${integer(value)} шт.`, detail: "в административном портфеле" },
    { label: "Общая площадь", h25: p.totalArea.h25, h26: p.totalArea.h26, format: formatArea, detail: "всего площадей" },
    { label: "Коммерческая площадь", h25: p.commercialArea.h25, h26: p.commercialArea.h26, format: formatArea, detail: "площадь по договорам" },
    { label: "Доход за полугодие", h25: p.annualRent.h25, h26: p.annualRent.h26, format: formatBillions, detail: "доход от сдачи в услуга" }
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

  const resources = commercialData.services.find(item => item.name === "Услуга 04");
  const commercialShare25 = (usageCommercialRent.h25 / p.totalArea.h25) * 100;
  const commercialShare26 = (usageCommercialRent.h26 / p.totalArea.h26) * 100;
  const rent = assetData.commercialRent;
  const incomeRows = [
    { label: "Доход от услуга", detail: "за полугодие", h25: p.annualRent.h25, h26: p.annualRent.h26, format: formatBillions },
    { label: "услуга коммерческой услуга", detail: "идентификатор с коммерческой услуга", h25: rent.inn.h25, h26: rent.inn.h26, format: value => `${integer(value)} идентификатор` },
    { label: "Площадь услуга", detail: "коммерческая услуга · использование площадей", h25: usageCommercialRent.h25, h26: usageCommercialRent.h26, format: formatArea },
    { label: "Доход Категория 04", detail: "комплекс ресурсов · Категория 01", h25: resources.core25, h26: resources.core26, format: formatMoney },
    { label: "Клиенты Категория 04 по объектам", detail: "база идентификатор", h25: resources.h25, h26: resources.h26, format: value => `${integer(value)} идентификатор` },
    { label: "Площадь Категория 04", detail: "под коммерческий контур", h25: usage.commercialBlock.h25, h26: usage.commercialBlock.h26, format: formatArea }
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

  document.getElementById("assetRentDetail").innerHTML = `<header class="card-heading"><div><h3>Содержание и крупнейшие услуга</h3><p>Детализация без повторения общей базы идентификатор.</p></div><span>админблок</span></header><div class="rent-insights"><div class="rent-insights__monthly"><span>Сумма на содержание одного объекта в год</span><strong>${number(rent.annualMaintenancePerObject / 1000000, 1)} млн ₽</strong><small>${integer(rent.annualMaintenancePerObject)} ₽ / год</small></div><div class="rent-insights__tenants"><span>Крупнейшие услуга</span><div>${rent.tenants.map((tenant, index) => `<article><b>${index + 1}</b><p>${tenant.name}</p><strong>${formatSquareMeters(tenant.area)}</strong></article>`).join("")}</div></div></div>`;

  const distributed25 = usage.technical.h25 + usage.commercialBlock.h25 + usage.offices.h25 + usageCommercialRent.h25;
  const distributed26 = usage.technical.h26 + usage.commercialBlock.h26 + usage.offices.h26 + usageCommercialRent.h26;
  const useEntries = [
    { label: "Категория 01", h25: usage.technical.h25, h26: usage.technical.h26, color: "#1468f5" },
    { label: "Коммерческий блок", h25: usage.commercialBlock.h25, h26: usage.commercialBlock.h26, color: "#3159b7" },
    { label: "Офисы Поставщик 01", h25: usage.offices.h25, h26: usage.offices.h26, color: "#63a3f8" },
    { label: "Коммерческая услуга", h25: usageCommercialRent.h25, h26: usageCommercialRent.h26, color: "#159c9c" },
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
    label: "Доля коммерческой услуга",
    detail: "в общей площади",
    past: periodValue(percent(commercialShare25)),
    current: periodValue(percent(commercialShare26)),
    delta: deltaValue(signedPp(commercialShare26 - commercialShare25), "доля · 1H25 → 1H26"),
    tone: deltaTone(commercialShare26 - commercialShare25),
    total: true
  });
  document.getElementById("assetUseSplit").innerHTML = `<header class="card-heading"><h3>Показатели объектов</h3><span>ед. · периоды</span></header><div class="asset-use-periods">${useBar("h25", "Период 01")}${useBar("h26", "Период 02", true)}</div>${comparisonTable(useRows, { className: "year-ledger--compact", metricLabel: "Категория" })}`;

  const condition = assetData.condition;
  const assessed = condition.good + condition.average + condition.poor;
  document.getElementById("assetCondition").innerHTML = `<div class="asset-condition__intro"><span>Состояние объектов</span><h3>Портфель объектов</h3><p>${integer(assessed)} объекта в портфеле.</p></div><div class="asset-condition__donut" style="--good:${(condition.good / assessed) * 100}%;--average:${(condition.average / assessed) * 100}%;--poor:${(condition.poor / assessed) * 100}%"><div><strong>${integer(assessed)}</strong><span>объекта</span></div></div><div class="asset-condition__legend"><div><i></i><span>Категория 01</span><b>${integer(condition.good)}</b></div><div><i></i><span>Категория 02</span><b>${integer(condition.average)}</b></div><div><i></i><span>Категория 03</span><b>${integer(condition.poor)}</b></div></div>`;
}

function renderObjectMetrics() {
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
    { label: "Показатель 01", value: formatMegawatts(total.allowed), detail: "итоговое значение", kind: "allowed", share: 100, shareLabel: "общий объём" },
    { label: "Показатель 02", value: formatMegawatts(total.consumed), detail: `${number(consumptionShare, 1)}% от показателя 01`, kind: "consumed", share: consumptionShare, shareLabel: "учтено" },
    { label: "Показатель 03", value: formatMegawatts(reserve), detail: `${number(reserveShare, 1)}% от показателя 01`, kind: "reserve", share: reserveShare, shareLabel: "остаток" }
  ];
  document.getElementById("powerOverview").innerHTML = cards.map(card => `<article class="power-kpi power-kpi--${card.kind} card"><header><span>${card.label}</span></header><strong>${card.value}</strong><p>${card.detail}</p><div class="power-kpi__meter"><i style="--share:${card.share}%"></i><b>${card.shareLabel}</b></div></article>`).join("");
  document.getElementById("powerListCount").textContent = integer(portfolioObjectCount);
  document.getElementById("powerListRows").innerHTML = objectPowerData.map(item => {
    const reserveByObject = item.allowed - item.consumed;
    const consumptionByObject = (item.consumed / item.allowed) * 100;
    return `<article class="power-object-row"><div class="power-object-row__identity"><strong>${item.ats}</strong><span>${item.address}</span><em>${item.type}</em></div><div class="power-object-row__metric" data-label="Показатель 01"><strong>${formatKilowatts(item.consumed)}</strong></div><div class="power-object-row__metric" data-label="Показатель 02"><strong>${formatKilowatts(item.allowed)}</strong></div><div class="power-object-row__metric power-object-row__reserve" data-label="Показатель 03"><strong>${formatKilowatts(reserveByObject)}</strong><i style="--consumption:${consumptionByObject}%" aria-label="Доля ${number(consumptionByObject, 1)} процентов"></i></div></article>`;
  }).join("");
}

function renderCapacity() {
  const d = reportData;
  const total25 = d.assetPoints.h25 + d.external.h25.points;
  const total26 = d.assetPoints.h26 + d.external.h26.points;
  const operatorShare25 = d.assetPoints.h25 / total25 * 100;
  const operatorShare26 = d.assetPoints.h26 / total26 * 100;
  const externalShare25 = d.external.h25.points / total25 * 100;
  const externalShare26 = d.external.h26.points / total26 * 100;
  const nonPassableShare25 = d.nonPassable.h25 / d.assetPoints.h25 * 100;
  const nonPassableShare26 = d.nonPassable.h26 / d.assetPoints.h26 * 100;
  const entries = [
    { title: "Категория 01", h25: total25, h26: total26, unit: "ед.", detail25: "100%", detail26: "100%" },
    { title: "Категория 02", h25: d.assetPoints.h25, h26: d.assetPoints.h26, unit: "ед.", detail25: `${number(operatorShare25, 1)}% от общего`, detail26: `${number(operatorShare26, 1)}% от общего` },
    { title: "Категория 03", h25: d.external.h25.points, h26: d.external.h26.points, unit: "ед.", detail25: `${number(externalShare25, 1)}% от общего`, detail26: `${number(externalShare26, 1)}% от общего` },
    { title: "Категория 04", h25: d.nonPassable.h25, h26: d.nonPassable.h26, unit: "ед.", detail25: `${number(nonPassableShare25, 1)}% от категории 02`, detail26: `${number(nonPassableShare26, 1)}% от категории 02`, caution: true }
  ];
  document.getElementById("capacityGrid").innerHTML = comparisonTable(entries.map(item => {
    const delta = change(item.h25, item.h26);
    return {
      label: item.title,
      detail: item.caution ? "зона внимания" : "Актив 03",
      past: periodValue(formatCompactCount(item.h25, item.unit), item.detail25),
      current: periodValue(formatCompactCount(item.h26, item.unit), item.detail26),
      delta: deltaValue(signedPercent(delta)),
      tone: deltaTone(delta),
      total: item.title === "Категория 01"
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
    scope: isDrsp ? "Направление 04" : "Направление 01",
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
    const naturalUnit = "ед.";
    const periodMetrics = (period, income, inn, natural, ratio, current = false) => `<div class="service-year ${current ? "service-year--current" : "service-year--past"}"><span>${period}</span><div><small>Доход категории 01</small><b>${formatMoney(income)}</b></div><div><small>идентификатор, шт.</small><b>${integer(inn)}</b></div><div><small>Показатель 01, ${naturalUnit}</small><b>${formatCommercialNatural(natural, item.unit)}</b></div><div><small>Метрика 03</small><b>${formatMonthlyArpu(ratio)}</b></div></div>`;
    const deltaCell = (label, value, missing = false) => `<div><span>${label}</span><b class="${missing ? "neutral" : value < 0 ? "negative" : "positive"}">${missing ? "—" : signedPercent(value)}</b></div>`;
    return `<div class="service-row"><div class="service-row__service"><strong>${item.name}</strong></div>${periodMetrics("1H 2025", item.core25, item.h25, item.natural25, arpu25)}${periodMetrics("1H 2026", item.core26, item.h26, item.natural26, arpu26, true)}<div class="service-change">${deltaCell("Категория 01‑доход", incomeDelta)}${deltaCell("идентификатор, шт.", innItemDelta)}${deltaCell("Показатель 01", naturalDelta, !hasNatural)}${deltaCell("Метрика 03 · ₽/мес", arpuDelta, arpuDelta === null)}</div></div>`;
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
      return `<div class="service-mix__row"><strong>${item.name}</strong><div class="service-mix__metrics">${metric("Доход", revenueShare, formatPortfolioRevenue(income), "revenue")}${metric("идентификатор", clientShare, `${integer(inn)} идентификатор`, "clients")}</div></div>`;
    }).join("")}</article>`;
  };
  document.getElementById("serviceMix").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">${view.scope} · состав портфеля</span><h3>Доли услуг и заказчиков</h3></div><span>Период 01 / период 02</span></header><p class="service-mix__note">Доли показателей рассчитаны внутри соответствующего направления; один идентификатор может входить в несколько услуг.</p><div class="service-mix__periods">${period("h25", "Период 01")}${period("h26", "Период 02")}</div>`;
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
  const scopeSwitch = `<div class="customer-scope-switch" role="tablist" aria-label="Контур заказчиков"><button type="button" class="${activeCustomerScope === "dkri" ? "is-active" : ""}" data-customer-scope="dkri" role="tab" aria-selected="${activeCustomerScope === "dkri"}">Направление 01</button><button type="button" class="${activeCustomerScope === "drsp" ? "is-active" : ""}" data-customer-scope="drsp" role="tab" aria-selected="${activeCustomerScope === "drsp"}">Направление 04</button></div>`;
  element.setAttribute("aria-label", `Крупнейшие заказчики ${options.scope}`);
  element.innerHTML = `<header class="customer-top__heading"><div><span class="commercial-kicker">${options.kicker}</span><h3>${options.title}</h3></div><div class="customer-top__heading-actions"><p>${options.subtitle}</p>${scopeSwitch}</div></header><div class="customer-top__table"><div class="customer-top__head"><span>Заказчик</span><span>1H 2025</span><span>1H 2026</span><span>Δ</span></div>${rows}</div><p class="customer-top__note">${options.note}</p>`;
}

function renderCustomerTop() {
  const isDrsp = activeCustomerScope === "drsp";
  renderCustomerPortfolio("customerTop", isDrsp ? commercialData.drspCustomerPortfolio : commercialData.customerPortfolio, isDrsp ? {
    scope: "Направление 04",
    kicker: "Направление 04 · крупные заказчики",
    title: "Выручка и услуги по заказчикам",
    subtitle: "Доход сегмента Направление 04 и доля каждого заказчика.",
    countKey: "services",
    countLabel: "услуг",
    shareLabel: "от дохода Направление 04",
    note: "Количество услуг — показатель из исходной таблицы; он не является числом уникальных клиентов."
  } : {
    scope: "Направление 01",
    kicker: "Направление 01 · крупные заказчики",
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

  const periodCard = (period, income, inn, dkriInn, drspInn, current = false) => `<article class="commercial-period ${current ? "commercial-period--current" : "commercial-period--past"}"><header><span>${period}</span><b>${current ? "Текущий период" : "Базовый период"}</b></header><div class="commercial-period__metrics"><div><span>Категория 01‑доход · Направление 01 + Направление 04</span><strong>${formatBillions(income)}</strong></div><div><span>Общая клиентская база, идентификатор</span><strong>${integer(inn)}<small>Направление 01 ${integer(dkriInn)} · Направление 04 ${integer(drspInn)}</small></strong></div></div></article>`;
  const deltaMetric = (label, delta, detail) => `<div class="commercial-overview__delta"><span>${label}</span><strong class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}</strong><small>${detail}</small></div>`;
  document.getElementById("commercialOverview").innerHTML = `<header class="commercial-overview__header"><div><span class="commercial-kicker">Результат за полугодие</span><h3>Доход и общая клиентская база</h3></div><p>Направление 01 + Направление 04. Δ = (1H26 / 1H25 − 1) × 100%</p></header><div class="commercial-overview__periods">${periodCard("1H 2025", totalCore25, totalAb25, dkriAb25, drspAb25)}${periodCard("1H 2026", totalCore26, totalAb26, dkriAb26, drspAb26, true)}</div><div class="commercial-overview__deltas"><b>Δ<br>1H25 → 1H26</b>${deltaMetric("Категория 01‑доход", coreDelta, `${formatBillions(totalCore26)} против ${formatBillions(totalCore25)}`)}${deltaMetric("клиентская база", innDelta, `${integer(totalAb26)} = Направление 01 ${integer(dkriAb26)} + Направление 04 ${integer(drspAb26)}`)}</div>`;

  const budgetAttainment = (dkriCore26 / commercialData.halfYearBudget) * 100;
  const budgetVariance = dkriCore26 - commercialData.halfYearBudget;
  const budgetVariancePercent = change(commercialData.halfYearBudget, dkriCore26);
  document.getElementById("commercialBudget").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">Направление 01 · только полугодие</span><h3>Доход и бюджет · 1H 2026</h3></div><b>${number(budgetAttainment, 1)}% · факт / бюджет</b></header><div class="commercial-budget__grid"><div><span>Фактический Категория 01‑доход Направление 01 · 1H26</span><strong>${formatBillions(dkriCore26)}</strong></div><div><span>Бюджет Категория 01‑дохода Направление 01 · 1H26</span><strong>${formatBillions(commercialData.halfYearBudget)}</strong></div><div class="commercial-budget__variance"><span>Δ факта к бюджету · 1H26</span><strong class="${budgetVariance < 0 ? "negative" : "positive"}">${budgetVariance > 0 ? "+" : ""}${formatMoney(budgetVariance)}</strong><b class="${budgetVariancePercent < 0 ? "negative" : "positive"}">${signedPercent(budgetVariancePercent)} · факт / бюджет</b></div></div>`;

  const drspSegmentRevenue = commercialData.segmentRevenue.drsp;
  const revenueSegments = [
    { name: "Направление 01", note: "текущий коммерческий контур", h25: dkriCore25, h26: dkriCore26 },
    { name: "Направление 04", note: drspSegmentRevenue.note, h25: drspSegmentRevenue.h25, h26: drspSegmentRevenue.h26 }
  ];
  const segmentRevenueTotal25 = revenueSegments.reduce((sum, segment) => sum + segment.h25, 0);
  const segmentRevenueTotal26 = revenueSegments.reduce((sum, segment) => sum + segment.h26, 0);
  document.getElementById("commercialRevenueSplit").innerHTML = `<header class="card-heading"><div><span class="commercial-kicker">Направление 01 + Направление 04 · доход за полугодие</span><h3>Категория 01‑доход по сегментам</h3></div><span>1H25 / 1H26</span></header><div class="commercial-revenue__grid">${revenueSegments.map(segment => { const delta = change(segment.h25, segment.h26); const share25 = (segment.h25 / segmentRevenueTotal25) * 100; const share26 = (segment.h26 / segmentRevenueTotal26) * 100; return `<article class="revenue-segment"><header><div><h4>${segment.name}</h4><span>${segment.note}</span></div><b class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}<small>Δ дохода · 1H25 → 1H26</small></b></header><div class="revenue-segment__periods"><div><span>1H 2025</span><strong>${formatBillions(segment.h25)}</strong><small>${number(share25, 1)}% от дохода сегментов 1H25</small></div><div><span>1H 2026</span><strong>${formatBillions(segment.h26)}</strong><small>${number(share26, 1)}% от дохода сегментов 1H26</small></div></div></article>`; }).join("")}</div>`;

  const segmentGroups = [
    { name: "Направление 01", note: "существующая клиентская база", h25: dkriAb25, h26: dkriAb26, breakdown: commercialData.segmentBreakdown.dkri },
    { name: "Направление 04", note: "клиентская база из протокола 06.08", h25: drspAb25, h26: drspAb26, breakdown: commercialData.segmentBreakdown.drsp }
  ];
  document.getElementById("commercialSegments").innerHTML = segmentGroups.map(segment => {
    const delta = change(segment.h25, segment.h26);
    const share25 = (segment.h25 / totalAb25) * 100;
    const share26 = (segment.h26 / totalAb26) * 100;
    const breakdown = segment.breakdown.map(item => {
      const itemDelta = change(item.h25, item.h26);
      return `<div class="segment-breakdown__row"><strong>${item.name}</strong><span>${integer(item.h25)}</span><span>${integer(item.h26)}</span><b class="${itemDelta < 0 ? "negative" : "positive"}">${signedPercent(itemDelta)}</b></div>`;
    }).join("");
    return `<article class="commercial-segment card"><header><div><h3>${segment.name}</h3><span>${segment.note}</span></div><b class="${delta < 0 ? "negative" : "positive"}">${signedPercent(delta)}<small>идентификатор · 1H25 → 1H26</small></b></header><div class="commercial-segment__years"><div class="segment-year segment-year--past"><span>1H 2025 · идентификатор, шт.</span><strong>${integer(segment.h25)}</strong><small>${number(share25, 1)}% от всех идентификатор 1H25</small></div><div class="segment-year segment-year--current"><span>1H 2026 · идентификатор, шт.</span><strong>${integer(segment.h26)}</strong><small>${number(share26, 1)}% от всех идентификатор 1H26</small></div></div><div class="segment-breakdown"><header><span>Сегмент</span><span>1H25</span><span>1H26</span><span>Δ</span></header>${breakdown}</div></article>`;
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
  document.getElementById("directionProjects").innerHTML = `<header class="project-portfolio__header"><div><span class="commercial-kicker">Категория 01 · без поставщика</span><h3>Направление 01</h3></div><div class="project-total-delta"><span>Показатель 01 · период 02 к периоду 01</span><strong class="${incomeProjectDelta < 0 ? "negative" : "positive"}">${signedPercent(incomeProjectDelta)}</strong></div></header><div class="project-periods"><article><span>Период 01</span><div><small>Количество проектов</small><strong>${integer(projects.count.h25)}</strong></div><div><small>Показатель 01</small><strong>${number(projects.revenue.h25 / 1000000, 1)} млн ед.</strong></div></article><article><span>Период 02</span><div><small>Количество проектов</small><strong>${integer(projects.count.h26)}</strong></div><div><small>Показатель 01</small><strong>${number(projects.revenue.h26 / 1000000, 1)} млн ед.</strong></div></article></div><div class="project-deltas"><div><span>Δ показателя 01</span><strong class="${incomeProjectDelta < 0 ? "negative" : "positive"}">${signedPercent(incomeProjectDelta)}</strong><b>период 02 относительно периода 01</b></div><div><span>Δ количества</span><strong class="${projectCountDelta < 0 ? "negative" : "positive"}">${signedPercent(projectCountDelta)}</strong><b>период 02 относительно периода 01</b></div><div><span>Метрика 03</span><strong class="project-deltas__period-pair"><span><small>Период 01</small>${formatArpu(arpu25)}</span><i>→</i><span><small>Период 02</small>${formatArpu(arpu26)}</span></strong><b class="${arpuDelta < 0 ? "negative" : "positive"}">${signedPercent(arpuDelta)} · период 02 к периоду 01</b></div><div><span>Метрика 04</span><strong>${percent(projects.gm.h25 * 100)} → ${percent(projects.gm.h26 * 100)}</strong><b class="${gmDelta < 0 ? "negative" : "positive"}">${signedPp(gmDelta)} · период 02 к периоду 01</b></div><div><span>Показатель 02</span><strong>${number(projectBudgetAttainment, 1)}%</strong><b>метрика за период 02</b></div></div><section class="project-composition"><header><div><h4>Структура проектов по услугам</h4><p>Каждый столбик = 100% проектов периода</p></div><span>Доля рассчитывается от общего количества проектов соответствующего периода</span></header><div class="project-composition__body"><div class="project-chart"><div class="project-chart__axis" aria-hidden="true"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="project-chart__bars">${projectBar("h25", "Период 01", "left")}${projectBar("h26", "Период 02", "right")}</div></div><div class="project-legend">${projects.services.map(service => { const share25 = (service.h25 / projects.count.h25) * 100; const share26 = (service.h26 / projects.count.h26) * 100; const delta = change(service.h25, service.h26); return `<div><span><i style="--segment-color:${service.color}"></i>${service.name}</span><b><small>Период 01</small>${integer(service.h25)} · ${number(share25, 1)}%</b><b><small>Период 02</small>${integer(service.h26)} · ${number(share26, 1)}%</b><strong class="${delta === null || delta >= 0 ? "positive" : "negative"}">${signedPercent(delta)}<small>Δ количества</small></strong></div>`; }).join("")}</div></div></section>`;
  renderDirectionPortfolio("directionProjects", commercialData.projects);
  renderDirectionPortfolio("directionProjectsSecondary", commercialData.drspProjects);
}

function renderDirectionPortfolio(containerId, projects) {
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
    const inn = projects.inn ? `<div><small>идентификатор, шт.</small><strong>${integer(projects.inn[key])}</strong></div>` : "";
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
    : deltaCard("Бюджет", "—", "neutral", "не предоставлен для Направление 04");
  const arpuCard = arpu25 !== null && arpu26 !== null
    ? `<div><b class="project-delta__marker">Δ · 1H25 → 1H26</b><span>Метрика 03 · доход / проект</span><strong class="project-deltas__period-pair"><span><small>1H25</small>${formatArpu(arpu25)}</span><i>→</i><span><small>1H26</small>${formatArpu(arpu26)}</span></strong><small class="${deltaTone(arpuDelta)}">${signedPercent(arpuDelta)} · Δ Метрика 03</small></div>`
    : deltaCard("Метрика 03 · доход / проект", "—", "neutral", "не рассчитывается");
  document.getElementById(containerId).innerHTML = `<header class="project-portfolio__header"><div><span class="commercial-kicker">${projects.scope} · без поставщика</span><h3>${projects.scope}</h3></div><div class="project-total-delta"><span>Δ показателя 01</span><strong class="${deltaTone(incomeDelta)}">${signedPercent(incomeDelta)}</strong><small>период 01 → период 02</small></div></header><div class="project-periods${projects.inn ? " project-periods--with-inn" : ""}">${periodMetrics("Период 01", "h25")}${periodMetrics("Период 02", "h26")}</div><div class="project-deltas">${deltaCard("Показатель 01", signedPercent(incomeDelta), deltaTone(incomeDelta), "период 01 → период 02")}${deltaCard("Проекты", signedPercent(countDelta), deltaTone(countDelta), "количество · период 01 → период 02")}${arpuCard}${deltaCard("Метрика 04", `${percent(projects.gm.h25 * 100)} → ${percent(projects.gm.h26 * 100)}`, deltaTone(gmDelta), `${signedPp(gmDelta)} · Δ метрики 04`)}${budgetCard}</div><section class="project-composition"><header><div><h4>Структура по услугам</h4><p>Каждый столбик = 100% ${serviceMetricLabel} соответствующего периода.</p></div><span>Количество по услугам</span></header><div class="project-composition__body"><div class="project-chart"><div class="project-chart__axis" aria-hidden="true"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div class="project-chart__bars">${bar("h25", "Период 01", "left")}${bar("h26", "Период 02", "right")}</div></div><div class="project-legend">${legend}</div></div></section>`;
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

renderAssetComparison();
renderAssetSummary();
renderAllocation();
renderServiceTypeRent();
renderProcessFlow();
renderWork();
enhanceExternalPoTable();
renderAssets();
renderObjectMetrics();
renderCapacity();
renderCommercial();
setupVueApp();
setupServiceScopeSwitch();
setupCustomerScopeSwitch();
setupReveal();
document.getElementById("printReport").addEventListener("click", () => window.print());
