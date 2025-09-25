import { SystemData } from './modecEquipment';

export const mv18SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações - 5º Piso",
    tipo: "Rooftop",
    local: "Acomodações - 5º Piso",
    equipamentos: [
      { code: "M-8823-2-1-DU", description: "Rooftop Alpha", tipo: "Rooftop (1x 100%)", fabricante: "Carrier", modelo: "50HC-A06A2F6A0", capacidade: "214,87 kW", refrigerante: "R-410A" },
      { code: "M-8823-2-2-DU", description: "Rooftop Bravo", tipo: "Rooftop (1x 100%, \"Stand-by\")", fabricante: "Carrier", modelo: "50HC-A06A2F6A0", capacidade: "214,87 kW", refrigerante: "R-410A" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: Novas Acomodações - Tijupá",
    tipo: "AHU/Condensadora",
    local: "Novas Acomodações - Tijupá",
    equipamentos: [
      { code: "DX-AHULH-", description: "AHU Boreste", tipo: "AHU (1x 100%)", fabricante: "York", modelo: "YSM 40X70", capacidade: "156,9 kW" },
      { code: "", description: "Unidade Condensadora Boreste", tipo: "Unidade Condensadora (1x 100%)", fabricante: "York", modelo: "YCA 50", capacidade: "161,1 kW" },
      { code: "DX-AHULH-", description: "AHU Bombordo", tipo: "AHU (1x 100%, \"Stand-by\")", fabricante: "York", modelo: "YSM 40X70", capacidade: "156,9 kW" },
      { code: "", description: "Unidade Condensadora Bombordo", tipo: "Unidade Condensadora (1x 100%, \"Stand-by\")", fabricante: "York", modelo: "YCA 50", capacidade: "161,1 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "CCR",
    equipamentos: [
      { code: "", description: "Self Contained Boreste", tipo: "Self Contained (1x 100%)", fabricante: "Daikin", modelo: "2T55LF-YE", capacidade: "14,08 kW" },
      { code: "", description: "Self Contained Bombordo", tipo: "Self Contained (1x 100%, \"Standby\")", fabricante: "Marine Split", modelo: "CFK(F)-15", capacidade: "15,0 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistemas de Climatização: Oficinas",
    tipo: "Misto",
    local: "Oficinas",
    equipamentos: [
      { local: "Oficina Mecânica", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Marine Split", modelo: "CFK(F)-20", capacidade: "20,0 kW", code: "" },
      { local: "Oficina Mecânica", description: "Split System Bravo (Stand-by)", tipo: "Split System Piso Teto", fabricante: "Springer Midea", capacidade: "17,58 kW", code: "" },
      { local: "Oficina de Instrumentação", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Marine Split", modelo: "CFK(F)-15", capacidade: "15,0 kW", code: "" },
      { local: "Oficina de Instrumentação", description: "Split System Bravo (Stand-by)", tipo: "Split System Piso Teto", fabricante: "Springer Midea", capacidade: "17,58 kW", code: "" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Oficina Praça de Máquinas",
    tipo: "Split System",
    local: "Oficina Praça de Máquinas",
    equipamentos: [
      { code: "", description: "Split System Hi-Wall", fabricante: "Elgin", modelo: "HLFI18B2FA & HLFE18B2FA", capacidade: "5,27 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: Oficina CCM",
    tipo: "Self Contained",
    local: "Oficina CCM",
    equipamentos: [
      { code: "", description: "Self Contained", fabricante: "Daikin", modelo: "US8G3", capacidade: "26,37 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Sala de UPS",
    tipo: "Self Contained",
    local: "Sala de UPS",
    equipamentos: [
      { code: "8832", description: "Self Contained com condensador remoto", fabricante: "York", modelo: "YCUA 100", capacidade: "26,6 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "", description: "Self Contained", fabricante: "Supply Marine", capacidade: "29,89 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Almoxarifado",
    tipo: "Misto",
    local: "Almoxarifado",
    equipamentos: [
      { description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Marine Split", modelo: "CFK(F)-8", capacidade: "8,0 kW", code: "" },
      { description: "Split System Bravo", tipo: "Split System Piso Teto (1x 100%)", fabricante: "Springer Midea", capacidade: "17,58 kW", code: "" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Climatização: Laboratório",
    tipo: "Misto",
    local: "Laboratório",
    equipamentos: [
      { description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Marine Split", modelo: "CFK(F)-8", capacidade: "8,0 kW", code: "" },
      { description: "Split System Bravo", tipo: "Split System Piso Teto (1x 100%)", fabricante: "Springer Midea", capacidade: "17,58 kW", code: "" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: E-House (Adicional)",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "8810-A", description: "Rooftop Alpha", tipo: "Rooftop (1x 100%)", fabricante: "Plant & Power", capacidade: "126,0 kW" },
      { code: "8810-B", description: "Rooftop Bravo", tipo: "Rooftop (1x 100%, \"Standby\")", fabricante: "Plant & Power", capacidade: "126,0 kW" },
    ],
  },
  {
    numero: 12,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      { description: "Unidade Condensadora Alpha", tipo: "Unidade Condensadora (1x 100%)", fabricante: "Bitzer", modelo: "4T.2Y-K", capacidade: "18,43 kW (do sistema)", code: "" },
      { description: "Unidade Condensadora Bravo", tipo: "Unidade Condensadora (1x 100%, \"Standby\")", fabricante: "Bitzer", modelo: "4T.2Y-K", capacidade: "18,43 kW (do sistema)", code: "" },
      { description: "Forçador de Ar | Câmara de Legumes", fabricante: "Daikin", modelo: "CSS27120-10", capacidade: "5,0 kW", code: "" },
      { description: "Forçador de Ar | Câmara de Lobby", fabricante: "Daikin", modelo: "CSS2712D-10", capacidade: "5,0 kW", code: "" },
      { description: "Forçador de Ar | Câmara de Carnes", fabricante: "Kolpak", modelo: "PC299LOP2E", capacidade: "8,43 kW", code: "" },
    ],
  },
  {
    numero: 13,
    nome: "Sistemas Independentes",
    tipo: "Misto",
    local: "Diversos",
    equipamentos: [
      { local: "Contêiner da Produção", description: "Split System Hi-Wall", fabricante: "Carrier", capacidade: "5,27 kW", code: "" },
      { local: "Contêiner de Medição", description: "Ar Condicionado Janela", fabricante: "Springer Midea", capacidade: "2,92 kW", code: "" },
    ],
  },
];

export const mv18EquipmentData = mv18SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv18 = (): string[] => {
  return Array.from(new Set(mv18SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv18 = (): number => {
  return mv18EquipmentData.length;
};