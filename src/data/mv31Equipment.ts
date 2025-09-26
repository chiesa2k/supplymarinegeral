import { SystemData } from './modecEquipment';

export const mv31SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Split System de Alta Capacidade",
    local: "Casario",
    equipamentos: [
      { code: "36-HVAH-001A", description: "Unidade de Tratamento de Ar (AHU) 001A", tipo: "AHU", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5", capacidade: "434,0 kW" },
      { code: "36-HVAH-001B", description: "Unidade de Tratamento de Ar (AHU) 001B", tipo: "AHU", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5", capacidade: "434,0 kW" },
      { code: "36-HVAH-002A", description: "Unidade de Tratamento de Ar (AHU) 002A", tipo: "AHU", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5", capacidade: "434,0 kW" },
      { code: "36-HVAH-002B", description: "Unidade de Tratamento de Ar (AHU) 002B", tipo: "AHU", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5", capacidade: "434,0 kW" },
      { code: "36-HVCP-001A", description: "Unidade Condensadora A", tipo: "Unidade Condensadora", fabricante: "Heinen & Hopman", modelo: "HWC 1475-C2-W-S", capacidade: "870,0 kW" },
      { code: "36-HVCP-001B", description: "Unidade Condensadora B", tipo: "Unidade Condensadora", fabricante: "Heinen & Hopman", modelo: "HWC 1475-C2-W-S", capacidade: "870,0 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "36-HVAV-1001", description: "Rooftop Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW" },
      { code: "36-HVAV-1002", description: "Rooftop Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "CCR",
    equipamentos: [
      { code: "36-HVAU-0001", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
      { code: "36-HVAU-0002", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Climatização: Sala de Controle de Motores (ECR)",
    tipo: "Self Contained",
    local: "ECR",
    equipamentos: [
      { code: "36-HVAU-0003", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
      { code: "36-HVAU-0004", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "36-HVAU-0005", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
      { code: "36-HVAU-0006", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: Sala de UPS",
    tipo: "Self Contained",
    local: "Sala de UPS",
    equipamentos: [
      { code: "36-HVAU-0007", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW" },
      { code: "36-HVAU-0008", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Sala de Baterias",
    tipo: "Self Contained",
    local: "Sala de Baterias",
    equipamentos: [
      { code: "36-HVAV-0001", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
      { code: "36-HVAV-0002", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Laboratório",
    tipo: "Self Contained",
    local: "Laboratório",
    equipamentos: [
      { code: "36-HVAV-0003", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
      { code: "36-HVAV-0004", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Climatização: Oficina",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
      { code: "36-HVAV-0005", description: "Self Contained Alpha", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
      { code: "36-HVAV-0006", description: "Self Contained Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Refrigeração: Provisões",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      { code: "36-PKRP-0001", description: "Unidade Condensadora Alpha", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW" },
      { code: "36-PKRP-0002", description: "Unidade Condensadora Bravo (Stand-by)", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW" },
      { code: "36-PKAH-0001", description: "Forçador de Ar | Câmara de Carne", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW" },
      { code: "36-PKAH-0002", description: "Forçador de Ar | Câmara de Peixe", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW" },
      { code: "36-PKAH-0003", description: "Forçador de Ar | Câmara de Laticínios", fabricante: "Helpman", modelo: "LKS-16-6", capacidade: "2,0 kW" },
      { code: "36-PKAH-0004", description: "Forçador de Ar | Câmara de Vegetais", fabricante: "Helpman", modelo: "LKS-21-6", capacidade: "3,10 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização: Guindaste",
    tipo: "Self Contained",
    local: "Guindaste",
    equipamentos: [
      { code: "N/A", description: "Self Contained", fabricante: "Marvair", modelo: "DKA-36-H-A00", capacidade: "10,25 kW" },
    ],
  },
];

export const mv31EquipmentData = mv31SystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaMv31 = (): string[] => {
  return Array.from(new Set(mv31SystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosMv31 = (): number => {
  return mv31EquipmentData.length;
};