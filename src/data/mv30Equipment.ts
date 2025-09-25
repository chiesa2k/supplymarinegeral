import { SystemData } from './modecEquipment';

export const mv30SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Split System DX",
    local: "Casario / Praça de Máquinas",
    equipamentos: [
      { code: "LD-AHU-8201A", description: "Unidade de Tratamento de Ar (AHU) Alpha", fabricante: "Rapid Marine", modelo: "AMAC45.0N-125", capacidade: "675,0 kW" },
      { code: "LD-AHU-8201B", description: "Unidade de Tratamento de Ar (AHU) Bravo", fabricante: "Rapid Marine", modelo: "AMAC45.0N-12S", capacidade: "675,0 kW" },
      { code: "MZ-HCW-8201A", description: "Unidade Condensadora Alpha", fabricante: "Rapid Marine", modelo: "GWWL675", capacidade: "675,0 kW" },
      { code: "MZ-HCW-8201B", description: "Unidade Condensadora Bravo", fabricante: "Rapid Marine", modelo: "GWWL675", capacidade: "675,0 kW" },
      { code: "MZ-HCW-8201C", description: "Unidade Condensadora Charlie (Stand-by)", fabricante: "Rapid Marine", modelo: "GWWL675", capacidade: "675,0 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "10S-ACU-8280A", description: "Rooftop Alpha", fabricante: "Novenco", modelo: "HAHUN450A", capacidade: "450,0 kW" },
      { code: "10S-ACU-8280B", description: "Rooftop Bravo", fabricante: "Novenco", modelo: "HAHUN450B", capacidade: "450,0 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: VFD",
    tipo: "Split System",
    local: "VFD",
    equipamentos: [
      { code: "9P-AHU-8201A", description: "Unidade de Tratamento de Ar (AHU) Alpha", tipo: "Rooftop", fabricante: "Rapid Marine", modelo: "MAU-350", capacidade: "323,0 kW" },
      { code: "9P-HCN-8281A-01", description: "Unidade Condensadora Alpha", tipo: "Unidade Condensadora", fabricante: "Rapid Marine", modelo: "CFK(F)-350", capacidade: "323,0 kW" },
      { code: "9P-HCN-8281B-01", description: "Unidade Condensadora Bravo", tipo: "Unidade Condensadora", fabricante: "Rapid Marine", modelo: "CFK(F)-350", capacidade: "323,0 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Telecom, Rádio & UPS",
    tipo: "Self Contained",
    local: "Sala de Telecom, Rádio & UPS",
    equipamentos: [
      { code: "DE-ACU-8202A | CD-HCN-8202A", description: "Self Contained Alpha", fabricante: "Rapid Marine", modelo: "SW47 | GWL47", capacidade: "35,8 kW" },
      { code: "DE-ACU-8202B | DE-HCN-8202B", description: "Self Contained Bravo", fabricante: "Rapid Marine", modelo: "SW47 | GWL47", capacidade: "35,8 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "DA-ACU-8203A", description: "Self Contained Alpha", fabricante: "Rapid Marine", modelo: "GWL25", capacidade: "25,0 kW" },
      { code: "DA-ACU-8203B", description: "Self Contained Bravo", fabricante: "Rapid Marine", modelo: "GWL25", capacidade: "25,0 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: EER & UPS",
    tipo: "Self Contained",
    local: "Sala de Elétrica",
    equipamentos: [
      { code: "DU-ACU-8248-A | DU-HCN-8248-A", description: "Self Contained Alpha", fabricante: "DMA", modelo: "SCU-D20VRAI | SCU-D20VRAO", capacidade: "72,0 kW" },
      { code: "DU-ACU-8248-B | DU-HCN-8248-B", description: "Self Contained Bravo", fabricante: "DMA", modelo: "D20VRAI | SCU-D20D5VRAO", capacidade: "72,0 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "DU-ACU-8206A", description: "Self Contained Alpha", fabricante: "Rapid Marine", modelo: "GWL41", capacidade: "40,8 kW" },
      { code: "DU-ACU-8206B", description: "Self Contained Bravo", fabricante: "Rapid Marine", modelo: "GWL41", capacidade: "40,8 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Laboratório (Topside)",
    tipo: "Rooftop",
    local: "Topside",
    equipamentos: [
      { code: "9P-ACU-8281D", description: "Rooftop Alpha", fabricante: "Rapid Marine", modelo: "CJKR(F)-125", capacidade: "128,0 kW" },
      { code: "9P-ACU-8281-E", description: "Rooftop Bravo", fabricante: "Rapid Marine", modelo: "CJKR(F)-125", capacidade: "128,0 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Provisões",
    equipamentos: [
      { code: "ER1-HRP-8265A", description: "Unidade Condensadora Alpha", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4-2", capacidade: "10,7 kW" },
      { code: "ER1-HRP-8265B", description: "Unidade Condensadora Bravo", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4-2", capacidade: "10,7 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Refeitório",
    equipamentos: [
      { code: "DU-ACU-8205", description: "Self Contained", fabricante: "Rapid Marine", modelo: "GWM-19", capacidade: "18,8 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: ECR",
    tipo: "Self Contained",
    local: "Engine Control Room",
    equipamentos: [
      { code: "ER2-ACU-8207", description: "Self Contained", fabricante: "Rapid Marine", modelo: "GWL35", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 12,
    nome: "Sistema de Climatização: Oficina Mecânica Pç Máquinas",
    tipo: "Self Contained",
    local: "Oficinas",
    equipamentos: [
      { code: "MZ-ACU-8208", description: "Self Contained", capacidade: "16,3 kW" },
    ],
  },
  {
    numero: 13,
    nome: "Sistema de Climatização: Oficina Elétrica Pç Máquinas",
    tipo: "Self Contained",
    local: "Oficinas",
    equipamentos: [
      { code: "MZ-ACU-8209", description: "Self Contained", capacidade: "7,9 kW" },
    ],
  },
  {
    numero: 14,
    nome: "Sistema de Climatização: Oficina Calibração e Medição",
    tipo: "Self Contained",
    local: "Oficinas",
    equipamentos: [
      { code: "LD-ACU-8210", description: "Self Contained", capacidade: "12,7 kW" },
    ],
  },
  {
    numero: 15,
    nome: "Sistema de Climatização: Almoxarifado / Oficina",
    tipo: "Rooftop",
    local: "Oficinas",
    equipamentos: [
      { code: "9P-ACU-8281C", description: "Rooftop", capacidade: "109,0 kW" },
    ],
  },
  {
    numero: 16,
    nome: "Sistema Independente: Contêiner da Produção",
    tipo: "Split System",
    local: "Diversos",
    equipamentos: [
      { code: "", description: "Split System", fabricante: "Carrier", capacidade: "5,27 kW" },
    ],
  },
  {
    numero: 17,
    nome: "Sistema Independente: Contêiner de Medição",
    tipo: "Ar Condicionado Janela",
    local: "Diversos",
    equipamentos: [
      { code: "", description: "Ar Condicionado Janela", fabricante: "Springer Midea", capacidade: "2,92 kW" },
    ],
  },
];

export const mv30EquipmentData = mv30SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv30 = (): string[] => {
  return Array.from(new Set(mv30SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv30 = (): number => {
  return mv30EquipmentData.length;
};