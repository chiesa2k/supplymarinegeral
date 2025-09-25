import { SystemData } from './modecEquipment';

export const mv26SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Split System DX",
    local: "Casario",
    equipamentos: [
      { code: "SD-AHU-8245-A", description: "AHU Alpha", tipo: "Split System DX", fabricante: "Ushio Reinetsu", capacidade: "255,0 kW" },
      { code: "SD-AHU-8245-B", description: "AHU Bravo", tipo: "Split System DX", fabricante: "Ushio Reinetsu", capacidade: "255,0 kW" },
      { code: "ER1-HCN-8245-A", description: "Unidade Condensadora Alpha", fabricante: "Ushio Reinetsu", capacidade: "255,0 kW" },
      { code: "ER1-HCN-8245-B", description: "Unidade Condensadora Bravo", fabricante: "Ushio Reinetsu", capacidade: "255,0 kW" },
      { code: "ER1-HCN-8245-C", description: "Unidade Condensadora Charlie (Stand-by)", fabricante: "Ushio Reinetsu", capacidade: "255,0 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "9C-ACU-8280-A", description: "Rooftop Alpha", fabricante: "Jiangsu Yongsheng", modelo: "MACU(F)-310", capacidade: "310,0 kW" },
      { code: "9C-ACU-8280-B", description: "Rooftop Bravo", fabricante: "Jiangsu Yongsheng", modelo: "MACU(F)-310", capacidade: "310,0 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "DA-ACU-8247-A", description: "Self Contained Alpha", fabricante: "Ushio Reinetsu", modelo: "UAP-3HF4DL4", capacidade: "10,55 kW" },
      { code: "DA-ACU-8247-B", description: "Self Contained Bravo (Stand-by)", fabricante: "Ushio Reinetsu", modelo: "UAP-3HF4DL4", capacidade: "10,55 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Sala de Rádio & Telecom",
    tipo: "Self Contained Remoto",
    local: "Sala de Rádio",
    equipamentos: [
      { code: "ND-ACU-8246-A", description: "Self Contained Alpha", fabricante: "Refrind", modelo: "CLA503QT00", capacidade: "50,0 kW" },
      { code: "ND-ACU-8246-A", description: "Unidade Condensadora Alpha", fabricante: "Refrind", modelo: "EXA 7030 DOO", capacidade: "50,0 kW" },
      { code: "ND-ACU-8246-B", description: "Self Contained Bravo (Stand-by)", fabricante: "Refrind", modelo: "CLA503QT00", capacidade: "50,0 kW" },
      { code: "ND-ACU-8246-B", description: "Unidade Condensadora Bravo (Stand-by)", fabricante: "Refrind", modelo: "EXA 7030 DOO", capacidade: "50,0 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: EER & UPS",
    tipo: "Self Contained",
    local: "Sala de Elétrica",
    equipamentos: [
      { code: "SD-ACU-8251-A", description: "Self Contained Alpha", fabricante: "Ushio Reinetsu", modelo: "UAP-10HF4DL4", capacidade: "17,58 kW" },
      { code: "SD-ACU-8251-B", description: "Self Contained Bravo (Stand-by)", fabricante: "Ushio Reinetsu", modelo: "UAP-10HF4DL4", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: Oficina de Produção",
    tipo: "Self Contained Remoto",
    local: "Oficina",
    equipamentos: [
      { code: "DU-ACU-8250", description: "Self Contained", fabricante: "Refrind", modelo: "CLA153QT00", capacidade: "16,2 kW" },
      { code: "DU-ACU-8250", description: "Unidade Condensadora", fabricante: "Refrind", modelo: "ANE 2230 E00", capacidade: "16,2 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Engine Control Room (ECR)",
    tipo: "Self Contained",
    local: "Sala de Controle",
    equipamentos: [
      { code: "ER1-ACU-8252", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-R7HF4DL4", capacidade: "22,0 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Oficina da Sala de Máquinas",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
      { code: "ER1-ACU-8253", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-5HF4PL4", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Refeitório",
    equipamentos: [
      { code: "DU-ACU-8248", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-7HF4PL4", capacidade: "22,0 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "DU-ACU-8249", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAPG-W7HF4DL4", capacidade: "22,0 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: Almoxarifado",
    tipo: "Rooftop",
    local: "Almoxarifado",
    equipamentos: [
      { code: "7P-ACU-8255-D", description: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-7", capacidade: "81,0 kW" },
    ],
  },
  {
    numero: 12,
    nome: "Sistema de Climatização: Laboratório",
    tipo: "Rooftop",
    local: "Laboratório",
    equipamentos: [
      { code: "7P-ACU-8255-A", description: "Rooftop Alpha", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-3", capacidade: "27,83 kW" },
      { code: "7P-ACU-8255-B", description: "Rooftop Bravo (Stand-by)", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-3", capacidade: "27,83 kW" },
    ],
  },
  {
    numero: 13,
    nome: "Sistema de Climatização: Oficina Mecânica",
    tipo: "Rooftop",
    local: "Oficina",
    equipamentos: [
      { code: "7P-ACU-8255-C", description: "Rooftop", fabricante: "Jiangsu Yongsheng", modelo: "BMPC(F)-3", capacidade: "27,83 kW" },
    ],
  },
  {
    numero: 14,
    nome: "Sistemas de Climatização: Guindastes",
    tipo: "Misto",
    local: "Guindaste",
    equipamentos: [
      { code: "", description: "Guindaste Rooftop", tipo: "Rooftop", fabricante: "Supply Marine", modelo: "SMRTA001.25V-PAHST-8A", capacidade: "4,39 kW" },
      { code: "", description: "Guindaste Janela", tipo: "Ar Condicionado Janela", fabricante: "Italgru / Elettromeccanica M.B.", modelo: "MAC-CWX 312 YP01", capacidade: "3,51 kW" },
    ],
  },
  {
    numero: 15,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Provisões",
    equipamentos: [
      { code: "ER1-HCN-8265A", description: "Unidade Condensadora Alpha", fabricante: "Bitzer", modelo: "URS-7.5SSFB4", capacidade: "8,59 kW" },
      { code: "ER1-HCN-8265B", description: "Unidade Condensadora Bravo (Stand-by)", fabricante: "Bitzer", modelo: "URS-7.5SSFB4", capacidade: "8,59 kW" },
      { code: "DA-HUC-8265", description: "Câmara Frigorífica de Carnes", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-37HT", capacidade: "3,9 kW" },
      { code: "DA-HUC-8266", description: "Câmara Frigorífica de Peixes", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-22HT", capacidade: "2,6 kW" },
      { code: "DA-HUC-8267", description: "Câmara Frigorífica de Verduras", fabricante: "Taisei Co. Ltd.", modelo: "UTSAX-15ME", capacidade: "1,7 kW" },
      { code: "DA-HUC-8268", description: "Câmara Frigorífica de Lobby", fabricante: "Taisei Co. Ltd.", modelo: "TRX-A4T", capacidade: "1,7 kW" },
    ],
  },
];

export const mv26EquipmentData = mv26SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv26 = (): string[] => {
  return Array.from(new Set(mv26SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv26 = (): number => {
  return mv26EquipmentData.length;
};