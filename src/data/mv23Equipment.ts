import { SystemData } from './modecEquipment';

export const mv23SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Split System de Alta Capacidade",
    local: "Casario",
    equipamentos: [
      { code: "ZZZ-8245-04-A1", description: "Unidade de Tratamento de Ar (AHU) A1", fabricante: "Ushio Reinetsu", modelo: "UAH-155", capacidade: "320,0 kW" },
      { code: "ZZZ-8245-04-A2", description: "Unidade de Tratamento de Ar (AHU) A2", fabricante: "Ushio Reinetsu", modelo: "UAH-155", capacidade: "320,0 kW" },
      { code: "ZZZ-8245-04-B1", description: "Unidade de Tratamento de Ar (AHU) B1", fabricante: "Ushio Reinetsu", modelo: "UAH-155", capacidade: "320,0 kW" },
      { code: "ZZZ-8245-04-B2", description: "Unidade de Tratamento de Ar (AHU) B2", fabricante: "Ushio Reinetsu", modelo: "UAH-155", capacidade: "320,0 kW" },
      { code: "ER-ZZZ-8245-01A", description: "Unidade Condensadora A", fabricante: "Ushio Reinetsu", modelo: "UAC-750SFS4", capacidade: "105,5 kW" },
      { code: "ER-ZZZ-8245-01B", description: "Unidade Condensadora B", fabricante: "Ushio Reinetsu", modelo: "UAC-750SFS4", capacidade: "105,5 kW" },
      { code: "ER-ZZZ-8245-01C", description: "Unidade Condensadora C", fabricante: "Ushio Reinetsu", modelo: "UAC-750SFS4", capacidade: "105,5 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "7S-ZZZ-8280A", description: "Rooftop Alpha", fabricante: "Jiangsu Yongsheng", modelo: "MPC(F)-25", capacidade: "281,0 kW" },
      { code: "7S-ZZZ-8280B", description: "Rooftop Bravo", fabricante: "Jiangsu Yongsheng", modelo: "MPC(F)-25", capacidade: "281,0 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: EER",
    tipo: "Self Contained",
    local: "EER",
    equipamentos: [
      { code: "SD-ZZZ-8250-02A", description: "Self Contained Alpha", fabricante: "Ushio Reinetsu", modelo: "UAP-7HF4DL4", capacidade: "32,4 kW" },
      { code: "SD-ZZZ-8250-02B", description: "Self Contained Bravo", fabricante: "Ushio Reinetsu", modelo: "UAP-7HF4DL4", capacidade: "32,4 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Sala de Controle de Motores (ECR)",
    tipo: "Self Contained",
    local: "ECR",
    equipamentos: [
      { code: "ER-ZZZ-8255-01", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-7HF4DL4", capacidade: "32,4 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "CCR",
    equipamentos: [
      { code: "UD-ZZZ-8250-01A", description: "Self Contained Alpha", fabricante: "Ushio Reinetsu", modelo: "UAP-5HF4DL4", capacidade: "24,6 kW" },
      { code: "UD-ZZZ-8250-01B", description: "Self Contained Bravo", fabricante: "Ushio Reinetsu", modelo: "UAP-5HF4DL4", capacidade: "24,6 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistemas de Climatização: Salas de Rádio e Telecomunicações",
    tipo: "Split System",
    local: "Sala de Rádio e Telecom",
    equipamentos: [
      { code: "ND-ZZZ-8250-06A", description: "AHU da Sala de Rádio", fabricante: "Mitsubishi", modelo: "PFAV-P140VCM-E", capacidade: "14,0 kW" },
      { code: "ND-ZZZ-8250-06B", description: "ACCU da Sala de Rádio", fabricante: "Mitsubishi", modelo: "PUHV-P140VCM-E-BSG", capacidade: "14,0 kW" },
      { code: "ND-ZZZ-8250-05A", description: "AHU de Telecom", fabricante: "Mitsubishi", modelo: "PFAV-P224VCM-E", capacidade: "22,4 kW" },
      { code: "ND-ZZZ-8250-05B", description: "ACCU de Telecom", fabricante: "Mitsubishi", modelo: "PUHV-P224VCM-E-BSG", capacidade: "22,4 kW" },
      { code: "", description: "Split de Apoio Alpha", tipo: "Split System Hi-Wall", fabricante: "Electrolux", modelo: "VE18F / VI18F", capacidade: "5,27 kW" },
      { code: "", description: "Split de Apoio Bravo", tipo: "Split System Hi-Wall", fabricante: "Electrolux", modelo: "VE18F / VI18F", capacidade: "5,27 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      { code: "ER-ZZZ-8265-01A", description: "Unidade Condensadora Alpha", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4", capacidade: "7,14 kW" },
      { code: "ER-ZZZ-8265-01B", description: "Unidade Condensadora Bravo", fabricante: "Ushio Reinetsu", modelo: "URS-7.5SSFB4", capacidade: "7,14 kW" },
      { code: "UD-ZZZ-8265-02A", description: "Forçador de Ar | Câmara de Carnes", fabricante: "Ushio Reinetsu", modelo: "UTSA-37HT", capacidade: "3,83 kW" },
      { code: "UD-ZZZ-8265-02B", description: "Forçador de Ar | Câmara de Peixes", fabricante: "Ushio Reinetsu", modelo: "UTSA-22MT", capacidade: "2,08 kW" },
      { code: "UD-ZZZ-8265-02C", description: "Forçador de Ar | Câmara de Verduras", fabricante: "Ushio Reinetsu", modelo: "UTSA-15HE", capacidade: "1,98 kW" },
      { code: "UD-ZZZ-8265-02D", description: "Forçador de Ar | Câmara de Lobby", fabricante: "Ushio Reinetsu", modelo: "UTSA-08HA", capacidade: "1,49 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "UD-ZZZ-8250-04", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAPG-W7HF4DL4", capacidade: "32,6 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Refeitório",
    equipamentos: [
      { code: "ER-ZZZ-8255B", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-3HF4PL4", capacidade: "17,1 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Oficina",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
      { code: "ER-ZZZ-8255B", description: "Self Contained", fabricante: "Ushio Reinetsu", modelo: "UAP-3HF4PL4", capacidade: "17,1 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistemas Independentes",
    tipo: "Misto",
    local: "Diversos",
    equipamentos: [
      { local: "Contêiner de Produção", code: "", description: "Split System Hi-Wall", fabricante: "Elgin", modelo: "HLFE30B2NA", capacidade: "8,79 kW" },
      { local: "Guindaste", code: "", description: "Rooftop", fabricante: "Supply Marine", modelo: "SMRTA001.25V-PAHST-8A", capacidade: "4,39 kW" },
    ],
  },
];

export const mv23EquipmentData = mv23SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv23 = (): string[] => {
  return Array.from(new Set(mv23SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv23 = (): number => {
  return mv23EquipmentData.length;
};