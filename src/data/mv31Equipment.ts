import { SystemData } from './modecEquipment';

export const mv31SystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Ar Condicionado - Acomodações",
    tipo: "Split System de Alta Capacidade",
    local: "Casario",
    equipamentos: [
      {
        code: "36-HVAH-001A / 36-HVAH-002A",
        description: "AHU Alpha (Unidades A e B)",
        tipo: "Unidade de Tratamento de Ar (2x 50%)",
        fabricante: "Heinen & Hopman",
        modelo: "HPL.S 12.5",
        capacidade: "434,0 kW",
        condensacao: "Água Gelada",
        ventilador: "Centrífugo, Comefri, vazão: 18.000 m³/h",
        motor: "WEG, 18.5 kW, 1770 RPM",
        filtro: "Classe G4 (Filtro primário) + F7 (Filtro secundário)",
        refrigerante: "R-407C",
        alimentacao: "440V – 3F – 60Hz",
        classificacao: "Seguro"
      },
      {
        code: "36-HVAH-001B / 36-HVAH-002B",
        description: "AHU Bravo (Unidades A e B)",
        tipo: "Unidade de Tratamento de Ar (2x 50%)",
        fabricante: "Heinen & Hopman",
        modelo: "HPL.S 12.5",
        capacidade: "434,0 kW",
        condensacao: "Água Gelada",
        ventilador: "Centrífugo, Comefri, vazão: 18.000 m³/h",
        motor: "WEG, 18.5 kW, 1770 RPM",
        filtro: "Classe G4 (Filtro primário) + F7 (Filtro secundário)",
        refrigerante: "R-407C",
        alimentacao: "440V – 3F – 60Hz",
        classificacao: "Seguro"
      },
      {
        code: "36-HVCP-001A",
        description: "Unidade Condensadora Alpha",
        tipo: "Unidade Condensadora (1x 100%)",
        fabricante: "Heinen & Hopman",
        modelo: "HWC 1475-C2-W-S",
        capacidade: "870,0 kW",
        condensacao: "Água do Mar",
        compressor: "2x Bitzer, CSH 8573-140",
        refrigerante: "R-407C",
        alimentacao: "440V – 3F – 60Hz",
        classificacao: "Seguro"
      },
      {
        code: "36-HVCP-001B",
        description: "Unidade Condensadora Bravo",
        tipo: "Unidade Condensadora (1x 100%, \"Stand-by\")",
        fabricante: "Heinen & Hopman",
        modelo: "HWC 1475-C2-W-S",
        capacidade: "870,0 kW",
        condensacao: "Água do Mar",
        compressor: "2x Bitzer, CSH 8573-140",
        refrigerante: "R-407C",
        alimentacao: "440V – 3F – 60Hz",
        classificacao: "Seguro"
      },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Ar Condicionado - E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      { code: "36-HVAV-1001", description: "Rooftop Alpha", tipo: "Rooftop (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW", compressor: "3x Bitzer, 4CES-9Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIA, T3" },
      { code: "36-HVAV-1002", description: "Rooftop Bravo", tipo: "Rooftop (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW", compressor: "3x Bitzer, 4CES-9Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIA, T3" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Ar Condicionado - CCR",
    tipo: "Self Contained",
    local: "CCR",
    equipamentos: [
      { code: "36-HVAU-0001", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-HVAU-0002", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Ar Condicionado - ECR",
    tipo: "Self Contained",
    local: "ECR",
    equipamentos: [
      { code: "36-HVAU-0003", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-HVAU-0004", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Ar Condicionado - Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      { code: "36-HVAU-0005", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-HVAU-0006", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Ar Condicionado - Sala de UPS",
    tipo: "Self Contained",
    local: "Sala de UPS",
    equipamentos: [
      { code: "36-HVAU-0007", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW", compressor: "2x Bitzer, 4DES-5Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-HVAU-0008", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW", compressor: "2x Bitzer, 4DES-5Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Ar Condicionado - Sala de Baterias",
    tipo: "Self Contained",
    local: "Sala de Baterias",
    equipamentos: [
      { code: "36-HVAV-0001", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIA, T3" },
      { code: "36-HVAV-0002", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIA, T3" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Ar Condicionado - Laboratório",
    tipo: "Self Contained",
    local: "Laboratório",
    equipamentos: [
      { code: "36-HVAV-0003", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIB, T3" },
      { code: "36-HVAV-0004", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIB, T3" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Ar Condicionado - Oficina",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
      { code: "36-HVAV-0005", description: "Self Contained Alpha", tipo: "Self Contained (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIB, T3" },
      { code: "36-HVAV-0006", description: "Self Contained Bravo", tipo: "Self Contained (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", compressor: "2x Bitzer, 4EES-6Y", refrigerante: "R-407C", alimentacao: "440V – 3F – 60Hz", classificacao: "Zona 2, IIB, T3" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Refrigeração - Provisões",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      { code: "36-PKRP-0001", description: "Unidade Condensadora Alpha", tipo: "Unidade Condensadora (1x 100%)", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW", compressor: "2x Bitzer, 4CES-9Y", refrigerante: "R-404a", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-PKRP-0002", description: "Unidade Condensadora Bravo", tipo: "Unidade Condensadora (1x 100%, \"Stand-by\")", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW", compressor: "2x Bitzer, 4CES-9Y", refrigerante: "R-404a", alimentacao: "440V – 3F – 60Hz", classificacao: "Seguro" },
      { code: "36-PKAH-0001", description: "Forçador de Ar | Câmara de Carne", tipo: "Forçador de ar", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW" },
      { code: "36-PKAH-0002", description: "Forçador de Ar | Câmara de Peixe", tipo: "Forçador de ar", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW" },
      { code: "36-PKAH-0003", description: "Forçador de Ar | Câmara de Laticínios", tipo: "Forçador de ar", fabricante: "Helpman", modelo: "LKS-16-6", capacidade: "2,0 kW" },
      { code: "36-PKAH-0004", description: "Forçador de Ar | Câmara de Vegetais", tipo: "Forçador de ar", fabricante: "Helpman", modelo: "LKS-21-6", capacidade: "3,10 kW" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Ar Condicionado - Guindaste",
    tipo: "Self Contained",
    local: "Guindaste",
    equipamentos: [
      { code: "N/A", description: "Self Contained", tipo: "Self Contained (1x 100%)", fabricante: "Marvair", modelo: "DKA-36-H-A00", capacidade: "10,25 kW", compressor: "1x Copeland, Scroll", refrigerante: "R-407C", alimentacao: "460V – 3F – 60Hz", classificacao: "Zona 1, IIB, T3" },
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