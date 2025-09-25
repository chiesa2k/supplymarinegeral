import { SystemData } from './modecEquipment';

export const mv22SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Split System",
    local: "Casario",
    equipamentos: [
      { code: "ZZZ-8820-A & ZCV-8820A-NDS", description: "Split System DX Alpha (AHU e ACU)", tipo: "Split System DX", fabricante: "York", modelo: "YSM 60X80 (AHU) & MT-200 (ACU)", capacidade: "588,4 kW", compressor: "1x Sabroe, SMC-1125" },
      { code: "ZZZ-8820-B & ZCV-8820B-NDS", description: "Split System DX Bravo (AHU e ACU)", tipo: "Split System DX", fabricante: "York", modelo: "YSM 60X80 (AHU) & MT-200 (ACU)", capacidade: "588,4 kW", compressor: "1x Sabroe, SMC-112S" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House",
    tipo: "Self Contained",
    local: "Sala Elétrica",
    equipamentos: [
      { code: "M8P-ACU-8610-A & M8P-AHU-8610-A", description: "Self Contained Alpha", fabricante: "Jiangsu Zhaosheng", modelo: "TMU-220 & CLNE-220", capacidade: "226,0 kW" },
      { code: "M8P-ACU-8610-B & M8P-AHU-8610-B", description: "Self Contained Bravo", fabricante: "Jiangsu Zhaosheng", modelo: "TMU-220 & CLNE-220", capacidade: "226,0 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "DA-ZCV-8620-A1 & DA-ZZZ-8620-A1", description: "Self Contained Alpha", fabricante: "York", modelo: "YCUA 100 & FS 100A DX", capacidade: "29,3 kW" },
      { code: "DA-ZCV-8620-A2 & DA-ZZZ-8620-A2", description: "Self Contained Bravo", fabricante: "York", modelo: "YCUA 100 & FS 100A DX", capacidade: "29,3 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Sala de UPS",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "DA-ZCV-8620-C1 & DU-ZZZ-8620-C1", description: "Self Contained Alpha", fabricante: "York", modelo: "YCUA 75 & FS 075A DX", capacidade: "23,44 kW" },
      { code: "DA-ZCV-8620-C2 & DU-ZZZ-8620-C2", description: "Self Contained Bravo", fabricante: "York", modelo: "YCUA 75 & FS 075A DX", capacidade: "23,44 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "DA-ZCV-8620C & DA-ZZZ-8620C", description: "Self Contained", fabricante: "York", modelo: "YCUA 060 & FS 060A DX", capacidade: "17,0 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Refeitório",
    equipamentos: [
      { code: "DA-ZCV-8620-B & DA-ZZZ-8620-B", description: "Self Contained", fabricante: "York", modelo: "YCUA 100 & FS 100A DX", capacidade: "24,8 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Sala de Controle de Motores (ECR)",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "ER-ZZZ-8620B", description: "Self Contained", fabricante: "Daikin", modelo: "ER-ZZZ-8620-B", capacidade: "65,0 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Oficinas",
    tipo: "Self Contained",
    local: "Workshop",
    equipamentos: [
      { code: "ER-ZZZ-8620-A", description: "Self Contained (para Oficina Mecânica e Elétrica)", fabricante: "York", modelo: "USP5HR1", capacidade: "16,5 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Laboratório",
    tipo: "Rooftop",
    local: "Laboratório",
    equipamentos: [
      { code: "M6S-ACU-8640", description: "Rooftop", fabricante: "Daikin", modelo: "DMAS-45PB-EX", capacidade: "13,0 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Almoxarifado",
    tipo: "Rooftop",
    local: "Almoxarifado",
    equipamentos: [
      { code: "M6S-ACU-8620", description: "Rooftop", fabricante: "Daikin", modelo: "DMAS-15SPB-EX", capacidade: "38,0 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: Sala de Telecomunicações",
    tipo: "Split System",
    local: "Sala de Telecom",
    equipamentos: [
      { code: "", description: "Split System Alpha", tipo: "Split System Hi-Wall", fabricante: "Elgin", modelo: "HWF130B2IB", capacidade: "8,79 kW" },
      { code: "", description: "Split System Bravo", tipo: "Split System Hi-Wall", fabricante: "Elgin", modelo: "HWF130B2IB", capacidade: "8,79 kW" },
    ],
  },
  {
    numero: 12,
    nome: "Sistemas de Climatização: Guindastes",
    tipo: "Rooftop",
    local: "Guindaste",
    equipamentos: [
      { code: "", description: "Guindaste 6S", tipo: "Rooftop", capacidade: "3,51 kW" },
      { code: "", description: "Guindaste 5S", tipo: "Ar Condicionado Janela", fabricante: "Springer Midea", capacidade: "3,51 kW" },
    ],
  },
  {
    numero: 13,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Provisões",
    equipamentos: [
      { code: "ER-CM-8600-1", description: "Unidade Condensadora Alpha", fabricante: "Bitzer", modelo: "4VES-7-2NU", capacidade: "10,21 kW" },
      { code: "ER-CM-8600-2", description: "Unidade Condensadora Bravo", fabricante: "Bitzer", modelo: "4VCS-6.2Y-40P", capacidade: "10,21 kW" },
      { code: "ZZZ-8600A-01", description: "Forçador de Ar | Câmara de Carnes", fabricante: "Eden", modelo: "FEME 0317LT6", capacidade: "3,17 kW" },
      { code: "ZZZ-8600A-02", description: "Forçador de Ar | Câmara de Peixes", fabricante: "Eden", modelo: "FEME 0317LT6", capacidade: "3,17 kW" },
      { code: "ZZZ-8600A-04", description: "Forçador de Ar | Câmara de Verduras", fabricante: "Eden", modelo: "FEM 0220", capacidade: "2,2 kW" },
      { code: "ZZZ-8600A-03", description: "Forçador de Ar | Câmara de Lobby", fabricante: "Eden", modelo: "FEM 0280", capacidade: "2,8 kW" },
    ],
  },
];

export const mv22EquipmentData = mv22SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv22 = (): string[] => {
  return Array.from(new Set(mv22SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv22 = (): number => {
  return mv22EquipmentData.length;
};