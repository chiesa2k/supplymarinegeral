export type SystemType = 'VRF' | 'Evaporadora' | 'Self Contained' | 'Split System' | 'Unidade Condensadora' | 'Rooftop' | 'Forçador de Ar';

export interface Equipment {
  code: string;
  description: string;
  fabricante?: string;
  modelo?: string;
  capacidade?: string;
  tipo?: string;
  local?: string;
  sistema?: number;
  condensacao?: string;
  numeroSerie?: string;
  valvulaSolenoide?: string;
  valvulaExpansao?: string;
  compressor?: string;
  unidadeComp?: string;
  refrigerante?: string;
  alimentacao?: string;
  ventilador?: string;
  vazaoVentilador?: string;
  filtro?: string;
}

export interface SystemData {
  numero: number;
  nome: string;
  tipo: SystemType;
  local: string;
  equipamentos: Equipment[];
}

export const modecSystemsData: SystemData[] = [
  // Sistema 1: Ar-Condicionado - Acomodações
  {
    numero: 1,
    nome: "Sistema de Ar-Condicionado - Acomodações",
    tipo: "Unidade Condensadora",
    local: "Acomodações",
    equipamentos: [
      {
        code: "77GB001A",
        description: "Unidade Condensadora Alpha",
        fabricante: "Glory Bright",
        capacidade: "620 kW",
        tipo: "Unidade Condensadora",
        condensacao: "Água",
        modelo: "CB.CS.3521140/2P.D.K.A-NR13",
        numeroSerie: "4500089760",
        valvulaSolenoide: "Emerson/200RB 2T3",
        compressor: "Bitzer/CSH7563-80Y",
        unidadeComp: "02 Unidade",
        refrigerante: "R407C",
        alimentacao: "440V-3F-60Hz"
      },
      {
        code: "77GB001B",
        description: "Unidade Condensadora Bravo",
        fabricante: "Glory Bright",
        capacidade: "620 kW",
        tipo: "Unidade Condensadora",
        condensacao: "Água",
        modelo: "N/I",
        numeroSerie: "4500089760",
        valvulaSolenoide: "Emerson/200RB 2T3",
        compressor: "Bitzer/CSH7563-809",
        unidadeComp: "02 Unidade",
        refrigerante: "R407C",
        alimentacao: "440V-3F-60Hz"
      },
      {
        code: "77GB001C",
        description: "Unidade Condensadora Charlie",
        fabricante: "Glory Bright",
        capacidade: "620 kW",
        tipo: "Unidade Condensadora",
        condensacao: "Água",
        modelo: "CB.CS.3521140/2P.D.K.A-NR13",
        numeroSerie: "4500089760",
        valvulaSolenoide: "Emerson/200RB 2T3",
        compressor: "Bitzer/CSH7563-80Y",
        unidadeComp: "02 Unidade",
        refrigerante: "R407C",
        alimentacao: "440V-3F-60Hz"
      },
      {
        code: "77GA001A",
        description: "Unidade Evaporadora Alpha (AHU)",
        fabricante: "Glory Bright",
        capacidade: "476 kW",
        tipo: "Unidade Evaporadora (AHU)"
      },
      {
        code: "77GA001B",
        description: "Unidade Evaporadora Bravo (AHU)",
        fabricante: "Glory Bright",
        capacidade: "476 kW",
        tipo: "Unidade Evaporadora (AHU)"
      }
    ]
  },

  // Sistema 2: Ar-Condicionado - E-House
  {
    numero: 2,
    nome: "Sistema de Ar-Condicionado - E-House",
    tipo: "Rooftop",
    local: "E-House",
    equipamentos: [
      {
        code: "77GB500A",
        description: "Rooftop Alpha",
        fabricante: "Cadar Marine",
        capacidade: "658 kW",
        tipo: "Rooftop"
      },
      {
        code: "77GB500B",
        description: "Rooftop Bravo",
        fabricante: "Cadar Marine",
        capacidade: "658 kW",
        tipo: "Rooftop"
      }
    ]
  },

  // Sistema 3: Ar-Condicionado - VFD
  {
    numero: 3,
    nome: "Sistema de Ar-Condicionado - VFD",
    tipo: "Rooftop",
    local: "VFD",
    equipamentos: [
      {
        code: "77GJ500A",
        description: "Rooftop Alpha",
        fabricante: "Friend Thermal",
        capacidade: "482 kW",
        tipo: "Rooftop"
      },
      {
        code: "77GJ500B",
        description: "Rooftop Bravo",
        fabricante: "Friend Thermal",
        capacidade: "482 kW",
        tipo: "Rooftop"
      }
    ]
  },

  // Sistema 4: Ar-Condicionado - Laboratório
  {
    numero: 4,
    nome: "Sistema de Ar-Condicionado - Laboratório",
    tipo: "Self Contained",
    local: "Laboratório",
    equipamentos: [
      {
        code: "77GB400A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "107.5 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB400B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "107.5 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 5: Ar-Condicionado - Oficina
  {
    numero: 5,
    nome: "Sistema de Ar-Condicionado - Oficina",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
      {
        code: "77GB402",
        description: "Self Contained",
        fabricante: "Glory Bright",
        capacidade: "86.6 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 6: Ar-Condicionado - Telecom & UPS A
  {
    numero: 6,
    nome: "Sistema de Ar-Condicionado - Telecom & UPS A",
    tipo: "Self Contained",
    local: "Telecom & UPS A",
    equipamentos: [
      {
        code: "77GB005A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "104.50 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB005B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "104.50 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 7: Ar-Condicionado - CER & UPS B
  {
    numero: 7,
    nome: "Sistema de Ar-Condicionado - CER & UPS B",
    tipo: "Self Contained",
    local: "CER & UPS B",
    equipamentos: [
      {
        code: "77GB010A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "88.40 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB010B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "88.40 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 8: Ar-Condicionado - Switchboard RM
  {
    numero: 8,
    nome: "Sistema de Ar-Condicionado - Switchboard RM",
    tipo: "Self Contained",
    local: "Switchboard RM",
    equipamentos: [
      {
        code: "77GB012",
        description: "Self Contained",
        fabricante: "Glory Bright",
        capacidade: "72 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 9: Ar-Condicionado - Engine Room
  {
    numero: 9,
    nome: "Sistema de Ar-Condicionado - Engine Room",
    tipo: "Self Contained",
    local: "Engine Room Mesh WS",
    equipamentos: [
      {
        code: "77GB018",
        description: "Self Contained",
        fabricante: "Glory Bright",
        capacidade: "44.7 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 10: Ar-Condicionado - Cozinha
  {
    numero: 10,
    nome: "Sistema de Ar-Condicionado - Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
      {
        code: "77GB009A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "53 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB009B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "53 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 11: Ar-Condicionado - CCR
  {
    numero: 11,
    nome: "Sistema de Ar-Condicionado - CCR",
    tipo: "Self Contained",
    local: "CCR (Sala de Controle Central)",
    equipamentos: [
      {
        code: "77GB003A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "30 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB003B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "30 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 12: Ar-Condicionado - Sala de Reunião
  {
    numero: 12,
    nome: "Sistema de Ar-Condicionado - Sala de Reunião",
    tipo: "Self Contained",
    local: "Sala de Reunião",
    equipamentos: [
      {
        code: "77GB007",
        description: "Self Contained",
        fabricante: "Glory Bright",
        capacidade: "32 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 13: Ar-Condicionado - FWD
  {
    numero: 13,
    nome: "Sistema de Ar-Condicionado - FWD",
    tipo: "Self Contained",
    local: "FWD",
    equipamentos: [
      {
        code: "77GB014",
        description: "Self Contained",
        fabricante: "Glory Bright",
        capacidade: "12 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 14: Ar-Condicionado - Sala de Rádio
  {
    numero: 14,
    nome: "Sistema de Ar-Condicionado - Sala de Rádio",
    tipo: "Self Contained",
    local: "Sala de Rádio",
    equipamentos: [
      {
        code: "77GB002A",
        description: "Self Contained Alpha",
        fabricante: "Glory Bright",
        capacidade: "9 kW",
        tipo: "Self Contained"
      },
      {
        code: "77GB002B",
        description: "Self Contained Bravo",
        fabricante: "Glory Bright",
        capacidade: "9 kW",
        tipo: "Self Contained"
      }
    ]
  },

  // Sistema 15: Refrigeração - Provisões
  {
    numero: 15,
    nome: "Sistema de Refrigeração - Provisões",
    tipo: "Unidade Condensadora",
    local: "Área de Provisões",
    equipamentos: [
      {
        code: "97GB701A",
        description: "Unidade Condensadora Alpha",
        fabricante: "Rapid Marine",
        capacidade: "18 kW",
        tipo: "Unidade Condensadora"
      },
      {
        code: "97GB701B",
        description: "Unidade Condensadora Bravo",
        fabricante: "Rapid Marine",
        capacidade: "18 kW",
        tipo: "Unidade Condensadora"
      },
      {
        code: "97GB703",
        description: "Forçador de Ar | Carne",
        fabricante: "Walter Roller",
        capacidade: "5.5 kW",
        tipo: "Forçador de Ar"
      },
      {
        code: "97GB704",
        description: "Forçador de Ar | Peixe",
        fabricante: "Walter Roller",
        capacidade: "4.1 kW",
        tipo: "Forçador de Ar"
      },
      {
        code: "97GB706",
        description: "Forçador de Ar | Laticínios",
        fabricante: "Walter Roller",
        capacidade: "1.97 kW",
        tipo: "Forçador de Ar"
      },
      {
        code: "97GB705",
        description: "Forçador de Ar | Vegetais",
        fabricante: "Walter Roller",
        capacidade: "4.0 kW",
        tipo: "Forçador de Ar"
      }
    ]
  }
];

export const modecEquipmentData = modecSystemsData.flatMap(sistema => 
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: sistema.local
  }))
);

export const getTiposSistemaModec = (): string[] => {
  return Array.from(new Set(modecSystemsData.map(sistema => sistema.tipo)));
};

export const getTotalEquipamentosModec = (): number => {
  return modecEquipmentData.length;
};

export const getUnidadesByClienteModec = (cliente: string): string[] => {
  if (cliente === 'Modec') {
    return ['FPSO Bacalhau'];
  }
  return [];
};

export const getSistemasByUnidadeModec = (unidade: string): string[] => {
  if (unidade === 'FPSO Bacalhau') {
    return modecSystemsData.map(sistema => sistema.nome);
  }
  return [];
};