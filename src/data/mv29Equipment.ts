import { SystemData } from './modecEquipment';

export const mv29SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Chiller",
    local: "AHU Room / Praça de Máquinas",
    equipamentos: [
      { code: "SD-AHU-8245-A", description: "Fan Coil Alpha", tipo: "Fan Coil", fabricante: "DM Alscott", modelo: "MAHK3616R", capacidade: "492,0 kW", numeroSerie: "011615" },
      { code: "SD-AHU-8245-B", description: "Fan Coil Bravo", tipo: "Fan Coil", fabricante: "DM Alscott", modelo: "MAHK3616R", capacidade: "492,0 kW", numeroSerie: "011616" },
      { code: "M2-HCW-8245-A", description: "Chiller Alpha", tipo: "Chiller", fabricante: "DMA", modelo: "MCU-CSH7563", capacidade: "492,0 kW (do sistema)", numeroSerie: "021088" },
      { code: "M2-HCW-8245-B", description: "Chiller Bravo", tipo: "Chiller", fabricante: "DMA", modelo: "MCU-CSH7563", capacidade: "492,0 kW (do sistema)", numeroSerie: "021089" },
      { code: "M2-HCW-8245-C", description: "Chiller Charlie", tipo: "Chiller", fabricante: "DMA", modelo: "MCU-CSH7563", capacidade: "492,0 kW (do sistema)", numeroSerie: "021090" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House (Topside)",
    tipo: "Rooftop",
    local: "Topside",
    equipamentos: [
      { code: "9C-AHU-8280-A | 9C-ACU-8280-A", description: "Rooftop Alpha", tipo: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "MAU-66A | MCU(F)-66A", capacidade: "663,6 kW" },
      { code: "9C-AHU-8280-B | 9C-ACU-8280-B", description: "Rooftop Bravo", tipo: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "MAU-66B | MCU(F)-66B", capacidade: "663,6 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "DA-ACU-8247-A | DB-HCN-8247-A", description: "Self Contained Alpha", fabricante: "DMA", modelo: "SCU-D5VRAI | SCU-D5VRAO", capacidade: "16,0 kW" },
      { code: "DA-ACU-8247B | DB-HCN-8247-B", description: "Self Contained Bravo", fabricante: "DMA", modelo: "SCU-D5VRAI | SCU-D5VRAO", capacidade: "16,0 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Sala de Rádio & Telecom",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "ND-ACU-8246-A | CD-HCN-8246-A", description: "Self Contained Alpha", fabricante: "DMA", modelo: "SCU-D5VRAI | SCU-D5VRAO", capacidade: "15,0 kW" },
      { code: "ND-ACU-8246-B | CD-HCN-8246-B", description: "Self Contained Bravo", fabricante: "DMA", modelo: "SCU-D5VRAI | SCU-D5VRAO", capacidade: "15,0 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: EER & UPS",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "DU-ACU-8248-A | DU-HCN-8248-A", description: "Self Contained Alpha", fabricante: "DMA", modelo: "SCU-D20VRAI | SCU-D20VRAO", capacidade: "72,0 kW" },
      { code: "DU-ACU-8248-B | DU-HCN-8248-B", description: "Self Contained Bravo", fabricante: "DMA", modelo: "D20VRAI | SCU-D20D5VRAO", capacidade: "72,0 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistemas de Climatização: Oficinas",
    tipo: "Misto",
    local: "Casario e Topside",
    equipamentos: [
      { local: "Oficina Mecânica", code: "ER1-ACU-8251", description: "Self Contained", tipo: "Self Contained", fabricante: "DMA", modelo: "SCU-D10VF", capacidade: "35,0 kW" },
      { local: "Oficina Elétrica", code: "ER1-ACU-8252", description: "Self Contained", tipo: "Self Contained", fabricante: "DMA", modelo: "SCU-D10VF", capacidade: "35,0 kW" },
      { local: "Oficinas (Topside)", code: "8P-ACU-8230", description: "Rooftop", tipo: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-6", capacidade: "60,6 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: ECR (Engine Control Room)",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "ER2-ACU-8253", description: "Self Contained", fabricante: "DMA", modelo: "SCU-D10VR", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "DU-ACU-8250-A", description: "Self Contained Alpha", fabricante: "DMA", modelo: "SCU-D16VF", capacidade: "56,0 kW" },
      { code: "DU-ACU-8250-B", description: "Self Contained Bravo", fabricante: "DMA", modelo: "SCU-D16VF", capacidade: "56,0 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Casario",
    equipamentos: [
      { code: "DU-ACU-8249", description: "Self Contained", fabricante: "DMA", modelo: "SCU-D8VR", capacidade: "28,5 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Laboratório",
    tipo: "Rooftop",
    local: "Topside",
    equipamentos: [
      { code: "8P-ACU-8210-A", description: "Rooftop Alpha", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-15", capacidade: "152,8 kW" },
      { code: "8P-ACU-8210-B", description: "Rooftop Bravo", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-15", capacidade: "152,8 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: Almoxarifado",
    tipo: "Rooftop",
    local: "Topside",
    equipamentos: [
      { code: "8P-ACU-8220", description: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-10", capacidade: "107,6 kW" },
    ],
  },
  {
    numero: 12,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Praça de Máquinas / Cozinha",
    equipamentos: [
      { code: "ER1-HCN-8265A", description: "Unidade Condensadora Alpha", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4 | HGX4/465-45", capacidade: "8,59 kW" },
      { code: "ER1-HCN-8265B", description: "Unidade Condensadora Bravo", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4 | HGX4/465-45", capacidade: "8,59 kW" },
      { code: "DA-HUC-8265", description: "Forçador de Ar | Câmara de Carnes", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-37HT" },
      { code: "DA-HUC-8266", description: "Forçador de Ar | Câmara de Peixes", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-22HT" },
      { code: "DA-HUC-8267", description: "Forçador de Ar | Câmara de Verduras", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-15HE" },
      { code: "DA-HUC-8268", description: "Forçador de Ar | Câmara de Lobby", fabricante: "Taisei Co. Ltd.", modelo: "TRX-A4T" },
    ],
  },
];

export const mv29EquipmentData = mv29SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv29 = (): string[] => {
  return Array.from(new Set(mv29SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv29 = (): number => {
  return mv29EquipmentData.length;
};