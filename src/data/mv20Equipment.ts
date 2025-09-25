import { SystemData } from './modecEquipment';

export const mv20SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações",
    tipo: "Split System",
    local: "Casario",
    equipamentos: [
      { code: "ZCV-220003-A", description: "Split System Alpha (AHU)", tipo: "Unidade de Tratamento de Ar (AHU)", fabricante: "York", modelo: "YDM 70X80", capacidade: "615,4 kW" },
      { code: "ER-M-2215B-01", description: "Unidade Condensadora Alpha (ACU)", tipo: "Unidade Condensadora", fabricante: "Sabroe", modelo: "SMC116S", capacidade: "615,4 kW" },
      { code: "ZCV-220004-A", description: "Split System Bravo (AHU)", tipo: "Unidade de Tratamento de Ar (AHU)", fabricante: "York", modelo: "YDM 70X80", capacidade: "615,4 kW" },
      { code: "ER-M-2215B-02", description: "Unidade Condensadora Bravo (ACU)", tipo: "Unidade Condensadora", fabricante: "Sabroe", modelo: "SMC116S", capacidade: "615,4 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: VFD",
    tipo: "Split System",
    local: "Módulo Elétrico",
    equipamentos: [
      { code: "", description: "Split System Alpha", tipo: "Split System", fabricante: "Springer", modelo: "42XQ060S5 & 38CC060535MS", capacidade: "17,58 kW" },
      { code: "", description: "Split System Bravo", tipo: "Split System", fabricante: "Springer", modelo: "42XQ060S5 & 38CC060535MS", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "", description: "Rooftop Alpha", tipo: "Rooftop (1x 100%)", fabricante: "Siemens", modelo: "BDB 630 C-CCW 90 (W)", capacidade: "141,68 kW" },
      { code: "", description: "Rooftop Bravo", tipo: "Rooftop (1x \"Standby\")", fabricante: "Siemens", modelo: "BDB 630 C-CCW 90 (W)", capacidade: "141,68 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistemas de Climatização: Oficinas",
    tipo: "Split System",
    local: "Oficinas",
    equipamentos: [
      { code: "", description: "Split System - Oficina de Instrumentação", local: "Oficina de Instrumentação", fabricante: "Springer", modelo: "42XQ060S5 & 38CC060535MS", capacidade: "17,58 kW" },
      { code: "", description: "Split System - Oficina Mecânica", local: "Oficina Mecânica", fabricante: "Springer", modelo: "42XQ060S5 & 38CC060535MS", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Laboratório Químico",
    tipo: "Split System",
    local: "Laboratório",
    equipamentos: [
      { code: "", description: "Split System", fabricante: "Springer", modelo: "42XQ060S5 & 38CC060535MS", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: Sala de Rádio & Telecom",
    tipo: "Split System",
    local: "Casario",
    equipamentos: [
      { code: "", description: "Split System Alpha", tipo: "Split System Inverter", fabricante: "LG", modelo: "USNQ242CSG3 & USUQ242CSG3", capacidade: "7,03 kW" },
      { code: "", description: "Split System Bravo", tipo: "Split System Inverter", fabricante: "LG", modelo: "USNQ242CSG3 & USUQ242CSG3", capacidade: "7,03 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Split System",
    local: "Cozinha",
    equipamentos: [
      { code: "ZCV-220015-MDS", description: "Unidade de Tratamento de Ar (AHU)", tipo: "Split System", fabricante: "York", modelo: "FS150A", capacidade: "52,75 kW" },
      { code: "ZCV-220014-MDS", description: "Unidade Condensadora (ACU)", tipo: "Split System", fabricante: "York", modelo: "YCUA150", capacidade: "52,75 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Casario / Cozinha",
    equipamentos: [
      { code: "RHM-AC-CDN-01", description: "Unidade Condensadora Alpha", fabricante: "Bitzer/Torrent", modelo: "4G-20.2Y (Compressor) / MT-813 (Condensador)", capacidade: "22,4 kW" },
      { code: "RHM-AC-CDN-02", description: "Unidade Condensadora Bravo", fabricante: "Bitzer/Torrent", modelo: "4G-20.2Y (Compressor) / MT-813 (Condensador)", capacidade: "22,4 kW" },
      { code: "", description: "Forçador de Ar | Câmara de Carnes", fabricante: "Eden", modelo: "FEME 0750", capacidade: "7,5 kW" },
      { code: "", description: "Forçador de Ar | Câmara de Peixes", fabricante: "Eden", modelo: "FEME 0750", capacidade: "7,5 kW" },
      { code: "", description: "Forçador de Ar | Câmara de Verduras", fabricante: "Eden", modelo: "FEME 0460", capacidade: "4,6 kW" },
      { code: "", description: "Forçador de Ar | Câmara de Lobby", fabricante: "Eden", modelo: "FEME 0280", capacidade: "2,8 kW" },
    ],
  },
];

export const mv20EquipmentData = mv20SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv20 = (): string[] => {
  return Array.from(new Set(mv20SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv20 = (): number => {
  return mv20EquipmentData.length;
};