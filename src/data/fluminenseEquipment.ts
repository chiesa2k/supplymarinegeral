import { SystemData, Equipment } from './modecEquipment';

export const fluminenseSystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Climatização: E-House",
    tipo: "Self Contained",
    local: "E-House",
    equipamentos: [
      { code: "MFLU-EH-ZZZ-8860-1", description: "Self Contained Alpha", tipo: "Self Contained", fabricante: "AirMarine", modelo: "4NES-20Y-40P", capacidade: "105,5 kW" },
      { code: "MFLU-EH-ZZZ-8860-2", description: "Self Contained Bravo", tipo: "Self Contained", fabricante: "AirMarine", modelo: "4NES-20Y-40P", capacidade: "105,5 kW" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Climatização: Acomodações (Principal)",
    tipo: "Self Contained",
    local: "Acomodações",
    equipamentos: [
      { code: "MFLU-LQD-ZZZ-8843A", description: "Self Contained Bombordo", tipo: "Self Contained", fabricante: "AirMarine", modelo: "CFA-25.N13058.00", capacidade: "176 kW" },
      { code: "MFLU-LQD-ZZZ-8843B", description: "Self Contained Boreste", tipo: "Self Contained", fabricante: "AirMarine", modelo: "CFA-25.N13058.00", capacidade: "176 kW" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Climatização: CCR (Sala de Controle Central)",
    tipo: "MultiSplit",
    local: "CCR",
    equipamentos: [
      { code: "MFLU-LQA-ZZZ-8846-1", description: "Unidade de Tratamento de Ar (AHU)", tipo: "MultiSplit", fabricante: "Carrier", modelo: "40RM-007-8611GC", capacidade: "26,37 kW", numeroSerie: "3402F74314" },
      { code: "MFLU-LQA-ZZZ-8846-2", description: "Unidade Condensadora (ACCU)", tipo: "MultiSplit", fabricante: "Supply Marine Serviços Ltda", modelo: "ACCU", capacidade: "26,37 kW", numeroSerie: "20180211" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Refrigeração: Provisões (Câmaras Frias)",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      { code: "LQA-ZZZ-8850-01", description: "Unidade Condensadora Alpha", tipo: "Unidade Condensadora", fabricante: "STAL", capacidade: "8,76 kW" },
      { code: "LQA-ZZZ-8850-02", description: "Unidade Condensadora Bravo", tipo: "Unidade Condensadora", fabricante: "STAL", capacidade: "8,76 kW" },
      { code: "LQA-ZZZ-8710-106", description: "Fan Coil - Descongelamento", tipo: "Fan Coil", fabricante: "Mipal", capacidade: "1,27 kW" },
      { code: "LQA-ZZZ-8710-105", description: "Fan Coil - Frios e Laticínios", tipo: "Fan Coil", fabricante: "Mipal", capacidade: "1,27 kW" },
      { code: "LQA-ZZZ-8710-104", description: "Fan Coil - Hortifruti", tipo: "Fan Coil", fabricante: "Mipal", capacidade: "3,11 kW" },
      { code: "LQA-ZZZ-8710-103", description: "Fan Coil - Câmara Fria Geral", tipo: "Fan Coil", fabricante: "Mipal", capacidade: "3,11 kW" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Climatização: Refeitório",
    tipo: "Self Contained",
    local: "Refeitório",
    equipamentos: [
      { code: "MFLU-LQA-ZZZ-8848-1", description: "Self Contained", tipo: "Self Contained", fabricante: "Air Marine", modelo: "4FES-5Y", capacidade: "5,07 kW" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Climatização: ECR (Sala de Controle de Motores)",
    tipo: "Split System",
    local: "ECR",
    equipamentos: [
      { code: "N/A", description: "Split Piso Teto", tipo: "Sistema Split Piso Teto", fabricante: "Hitachi", modelo: "RAP60E7L / RPC60E3P", capacidade: "17,58 kW" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Climatização: Guindaste",
    tipo: "Ar Condicionado Janela",
    local: "Guindaste",
    equipamentos: [
      { code: "N/A", description: "Ar Condicionado de Janela", tipo: "Ar Condicionado Janela", fabricante: "Springer", modelo: "MQI125BB", capacidade: "3,52 kW" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização: Salas Técnicas e Escritórios",
    tipo: "Split System",
    local: "Diversos",
    equipamentos: [
        { code: "N/A", description: "Split System Hi-Wall em Acomodações", local: "Acomodações", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Oficina Elétrica", local: "Oficina Elétrica", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Oficina Mecânica", local: "Oficina Mecânica", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Laboratório de Instrumentação", local: "Laboratório de Instrumentação", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Almoxarifado", local: "Almoxarifado", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Sala de SPIE", local: "Sala de SPIE", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12AAC-D3NNA1D/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Sala do Sistentec", local: "Sala do Sistentec", tipo: "Split System Hi-Wall", fabricante: "Elgin", modelo: "HVQE30B218 e HVQE30B2NB", capacidade: "8,79 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Sala da Shell", local: "Sala da Shell", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Sala da Gran IHC", local: "Sala da Gran IHC", tipo: "Split System Hi-Wall", fabricante: "Consul", modelo: "CBF12E e CBG12E", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Oficina Praça de Máquinas", local: "Oficina Praça de Máquinas", tipo: "Split System Hi-Wall", fabricante: "Carrier", modelo: "42FVCA18C5 e 38FVCA18C5", capacidade: "5,27 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Sala de Servidor", local: "Sala de Servidor", tipo: "Split System Hi-Wall", fabricante: "Carrier", modelo: "42FVCA18C5 e 38FVCA18C5", capacidade: "5,27 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Laboratório", local: "Laboratório", tipo: "Split System Hi-Wall", fabricante: "Carrier", modelo: "42FVCA18C5 e 38FVCA18C5", capacidade: "5,27 kW" },
        { code: "N/A", description: "Split System Hi-Wall em NavDeck (Módulo A) - Boreste", local: "NavDeck (Módulo A) - Boreste", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em NavDeck (Módulo A) - Bombordo", local: "NavDeck (Módulo A) - Bombordo", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Deck D (Módulo B) - Boreste", local: "Deck D (Módulo B) - Boreste", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Deck D (Módulo B) - Bombordo", local: "Deck D (Módulo B) - Bombordo", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Deck D (Módulo C) - Boreste", local: "Deck D (Módulo C) - Boreste", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
        { code: "N/A", description: "Split System Hi-Wall em Deck D (Módulo C) - Bombordo", local: "Deck D (Módulo C) - Bombordo", tipo: "Split System Hi-Wall", fabricante: "Gree", modelo: "GWC12QC-D3NNB4A/I e /O", capacidade: "3,52 kW" },
    ],
  },
];

export const fluminenseEquipmentData = fluminenseSystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTiposSistemaFluminense = (): string[] => {
  return Array.from(new Set(fluminenseSystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosFluminense = (): number => {
  return fluminenseEquipmentData.length;
};