export type SystemType = 'VRF' | 'Evaporadora' | 'Self Contained' | 'Split System';

export interface Equipment {
  code: string;
  description: string;
  fabricante?: string;
  modelo?: string;
  capacidade?: string;
  tipo?: string;
  local?: string;
  sistema?: number;
}

export interface SystemData {
  numero: number;
  nome: string;
  tipo: SystemType;
  local: string;
  equipamentos: Equipment[];
}

export const siemensSystemsData: SystemData[] = [
  // PRÉDIO ADMINISTRATIVO - Sistema 1: VRF 1
  {
    numero: 1,
    nome: "VRF 1 - Prédio Administrativo",
    tipo: "VRF",
    local: "Prédio Administrativo",
    equipamentos: [
      {
        code: "10SAK10AN003",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ2AYL",
        capacidade: "67,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK10AH019",
        description: "Evaporadora - Engineering Room",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        capacidade: "9,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH021",
        description: "Evaporadora - Main Office",
        fabricante: "Daikin",
        modelo: "FXAQ3PVE",
        capacidade: "3,6 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH015",
        description: "Evaporadora - File Room",
        fabricante: "Daikin",
        modelo: "FXAQ20PVE",
        capacidade: "2,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH030",
        description: "Evaporadora - T.I",
        fabricante: "Daikin",
        modelo: "FXAQ20PVE",
        capacidade: "2,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH003",
        description: "Evaporadora - Modular Office 1",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH005",
        description: "Evaporadora - Modular Office 2",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH013",
        description: "Evaporadora - Rest Room",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH007",
        description: "Evaporadora - Conference Room",
        fabricante: "Daikin",
        modelo: "FXFQ63AVE",
        capacidade: "7,1 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH009",
        description: "Evaporadora - Office 1",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH023",
        description: "Evaporadora - Office 2",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH011",
        description: "Evaporadora - Office 3",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH025",
        description: "Evaporadora - Office 4",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH027",
        description: "Evaporadora - Office 5",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH017",
        description: "Evaporadora - Reception",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // PRÉDIO ADMINISTRATIVO - Sistema 2: VRF 2
  {
    numero: 2,
    nome: "VRF 2 - Prédio Administrativo",
    tipo: "VRF",
    local: "Prédio Administrativo",
    equipamentos: [
      {
        code: "10SAK10AN004",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ2AYL",
        capacidade: "67,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK10AH020",
        description: "Evaporadora - Engineering Room",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        capacidade: "9,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH022",
        description: "Evaporadora - Main Office",
        fabricante: "Daikin",
        modelo: "FXAQ3PVE",
        capacidade: "3,6 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH016",
        description: "Evaporadora - File Room",
        fabricante: "Daikin",
        modelo: "FXAQ20PVE",
        capacidade: "2,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH031",
        description: "Evaporadora - T.I",
        fabricante: "Daikin",
        modelo: "FXAQ20PVE",
        capacidade: "2,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH004",
        description: "Evaporadora - Modular Office 1",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH006",
        description: "Evaporadora - Modular Office 2",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH014",
        description: "Evaporadora - Rest Room",
        fabricante: "Daikin",
        modelo: "FXFQ90AVE",
        capacidade: "10,0 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH008",
        description: "Evaporadora - Conference Room",
        fabricante: "Daikin",
        modelo: "FXFQ63AVE",
        capacidade: "7,1 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH010",
        description: "Evaporadora - Office 1",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH024",
        description: "Evaporadora - Office 2",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH012",
        description: "Evaporadora - Office 3",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH026",
        description: "Evaporadora - Office 4",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH028",
        description: "Evaporadora - Office 5",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH018",
        description: "Evaporadora - Reception",
        fabricante: "Daikin",
        modelo: "FXAQ25PVE",
        capacidade: "2,8 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK10AH029",
        description: "Evaporadora - Medical Care",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        capacidade: "7,1 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // PRÉDIO ADMINISTRATIVO - Sistema 3: VRF 3 (Electrical Room)
  {
    numero: 3,
    nome: "VRF 3 - Prédio Administrativo | Electrical Room",
    tipo: "VRF",
    local: "Prédio Administrativo",
    equipamentos: [
      {
        code: "10SAK10AN001",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ5AVL",
        capacidade: "14,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK10AH001",
        description: "Evaporadora - Electrical Room",
        fabricante: "Daikin",
        modelo: "FXFQ112AVE",
        capacidade: "12,5 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // PRÉDIO ADMINISTRATIVO - Sistema 4: VRF 4 (Electrical Room)
  {
    numero: 4,
    nome: "VRF 4 - Prédio Administrativo | Electrical Room",
    tipo: "VRF",
    local: "Prédio Administrativo",
    equipamentos: [
      {
        code: "10SAK10AN002",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ5AVL",
        capacidade: "14,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK10AH001",
        description: "Evaporadora - Electrical Room",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        capacidade: "12,5 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 5: VRF 5
  {
    numero: 5,
    nome: "VRF 5 - Control Building",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20A001",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ28AYL",
        capacidade: "78,5 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH015",
        description: "Evaporadora - Leader Room",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH017",
        description: "Evaporadora - Reception",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH013",
        description: "Evaporadora - Meeting Room",
        fabricante: "Daikin",
        modelo: "FXFQ112AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH005",
        description: "Evaporadora - Control Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH007",
        description: "Evaporadora - Control Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH009",
        description: "Evaporadora - Control Room 3",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH011",
        description: "Evaporadora - Engineering Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH023",
        description: "Evaporadora - Engineering Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 6: VRF 6
  {
    numero: 6,
    nome: "VRF 6 - Control Building",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20A002",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ28AYL",
        capacidade: "78,5 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH016",
        description: "Evaporadora - Leader Room",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH018",
        description: "Evaporadora - Reception",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH014",
        description: "Evaporadora - Meeting Room",
        fabricante: "Daikin",
        modelo: "FXFQ112AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH006",
        description: "Evaporadora - Control Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH008",
        description: "Evaporadora - Control Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH010",
        description: "Evaporadora - Control Room 3",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH012",
        description: "Evaporadora - Engineering Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH024",
        description: "Evaporadora - Engineering Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ80AVE",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 7: VRF 7 (Eletric Room 1)
  {
    numero: 7,
    nome: "VRF 7 - Control Building | Eletric Room 1",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20AN003",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ8AYL",
        capacidade: "22,4 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH001",
        description: "Evaporadora - Eletric Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH002",
        description: "Evaporadora - Eletric Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 8: VRF 8 (Eletric Room 1)
  {
    numero: 8,
    nome: "VRF 8 - Control Building | Eletric Room 1",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20AN004",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ8AYL",
        capacidade: "22,4 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH003",
        description: "Evaporadora - Eletric Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH004",
        description: "Evaporadora - Eletric Room 1",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 9: VRF 9 (Eletric Room 2)
  {
    numero: 9,
    nome: "VRF 9 - Control Building | Eletric Room 2",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20AN005",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ8AYL",
        capacidade: "22,4 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH019",
        description: "Evaporadora - Eletric Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH021",
        description: "Evaporadora - Eletric Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // CONTROL BUILDING - Sistema 10: VRF 10 (Eletric Room 2)
  {
    numero: 10,
    nome: "VRF 10 - Control Building | Eletric Room 2",
    tipo: "VRF",
    local: "Control Building",
    equipamentos: [
      {
        code: "10SAK20AN006",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RHXYQ8AYL",
        capacidade: "22,4 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK20AH020",
        description: "Evaporadora - Eletric Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      },
      {
        code: "10SAK20AH022",
        description: "Evaporadora - Eletric Room 2",
        fabricante: "Daikin",
        modelo: "FXFQ100AVE",
        capacidade: "11,2 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // WAREHOUSE E WORKSHOP - Sistema 11: VRF 11 (Electrical Room)
  {
    numero: 11,
    nome: "VRF 11 - Warehouse E Workshop | Electrical Room",
    tipo: "VRF",
    local: "Warehouse E Workshop",
    equipamentos: [
      {
        code: "10SAK30AN001",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ5AVL",
        capacidade: "16,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK30AH001",
        description: "Evaporadora - Electrical Room",
        fabricante: "Daikin",
        modelo: "FXFQ125AVE",
        capacidade: "16,0 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // WAREHOUSE E WORKSHOP - Sistema 12: VRF 12 (Electrical Room)
  {
    numero: 12,
    nome: "VRF 12 - Warehouse E Workshop | Electrical Room",
    tipo: "VRF",
    local: "Warehouse E Workshop",
    equipamentos: [
      {
        code: "10SAK30AN002",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ5AVL",
        capacidade: "16,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK30AH002",
        description: "Evaporadora - Electrical Room",
        fabricante: "Daikin",
        modelo: "FXFQ125AVE",
        capacidade: "16,0 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // WAREHOUSE E WORKSHOP - Sistema 13: VRF 13 (Office)
  {
    numero: 13,
    nome: "VRF 13 - Warehouse E Workshop | Office",
    tipo: "VRF",
    local: "Warehouse E Workshop",
    equipamentos: [
      {
        code: "10SAK30AN003",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ3AVL",
        capacidade: "9,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK30AH003",
        description: "Evaporadora - Office",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        capacidade: "9,0 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // WAREHOUSE E WORKSHOP - Sistema 14: VRF 14 (Office)
  {
    numero: 14,
    nome: "VRF 14 - Warehouse E Workshop | Office",
    tipo: "VRF",
    local: "Warehouse E Workshop",
    equipamentos: [
      {
        code: "10SAK30AN004",
        description: "VRF (Unidade Condensadora)",
        fabricante: "Daikin",
        modelo: "RMXYQ3AVL",
        capacidade: "9,0 kW",
        tipo: "Condensadora"
      },
      {
        code: "10SAK30AH004",
        description: "Evaporadora - Office",
        fabricante: "Daikin",
        modelo: "FXAQ63PVE",
        capacidade: "9,0 kW",
        tipo: "Evaporadora"
      }
    ]
  },
  
  // DESAL - Sistema 15: Self Contained 1
  {
    numero: 15,
    nome: "Self Contained 1 - Desal",
    tipo: "Self Contained",
    local: "Desal (Sala de Painéis)",
    equipamentos: [
      {
        code: "10UBX01AH001",
        description: "Self Contained",
        fabricante: "TOSI",
        modelo: "TWME07_01",
        capacidade: "24,1 kW",
        tipo: "Self Contained"
      }
    ]
  },
  
  // DESAL - Sistema 16: Self Contained 2
  {
    numero: 16,
    nome: "Self Contained 2 - Desal",
    tipo: "Self Contained",
    local: "Desal (Sala de Painéis)",
    equipamentos: [
      {
        code: "10UBX01AH002",
        description: "Self Contained",
        fabricante: "TOSI",
        modelo: "TWME07_01",
        capacidade: "24,1 kW",
        tipo: "Self Contained"
      }
    ]
  },
  
  // DESAL - Sistema 17: Self Contained 3
  {
    numero: 17,
    nome: "Self Contained 3 - Desal",
    tipo: "Self Contained",
    local: "Desal (Sala de Painéis)",
    equipamentos: [
      {
        code: "10UBX01AH003",
        description: "Self Contained",
        fabricante: "TOSI",
        modelo: "TWME07_01",
        capacidade: "24,1 kW",
        tipo: "Self Contained"
      }
    ]
  },
  
  // LABORATÓRIO QUÍMICO - Sistema 18: Split System 1
  {
    numero: 18,
    nome: "Split System 1 - Laboratório Químico",
    tipo: "Split System",
    local: "Laboratório Químico",
    equipamentos: [
      {
        code: "10USA10AH001",
        description: "Split System",
        fabricante: "Daikin",
        modelo: "STK24P5VL",
        capacidade: "7,03 kW",
        tipo: "Split System"
      }
    ]
  },
  
  // LABORATÓRIO QUÍMICO - Sistema 19: Split System 2
  {
    numero: 19,
    nome: "Split System 2 - Laboratório Químico",
    tipo: "Split System",
    local: "Laboratório Químico",
    equipamentos: [
      {
        code: "10USA10AH002",
        description: "Split System",
        fabricante: "Daikin",
        modelo: "STK24P5VL",
        capacidade: "7,03 kW",
        tipo: "Split System"
      }
    ]
  },
  
  // LABORATÓRIO QUÍMICO - Sistema 20: Split System 3
  {
    numero: 20,
    nome: "Split System 3 - Laboratório Químico",
    tipo: "Split System",
    local: "Laboratório Químico",
    equipamentos: [
      {
        code: "10USA10AH003",
        description: "Split System",
        fabricante: "Daikin",
        modelo: "STK24P5VL",
        capacidade: "7,03 kW",
        tipo: "Split System"
      }
    ]
  },
  
  // PORTARIA - Sistema 21: Split System (Portaria)
  {
    numero: 21,
    nome: "Split System - Portaria",
    tipo: "Split System",
    local: "Portaria",
    equipamentos: [
      {
        code: "10SK40AN001",
        description: "Split System - Portaria",
        fabricante: "Daikin",
        modelo: "FTK18P5VL",
        capacidade: "4,97 kW",
        tipo: "Split System"
      }
    ]
  }
];

// Função auxiliar para obter sistemas por tipo
export const getSistemasByTipo = (tipo: SystemType): SystemData[] => {
  return siemensSystemsData.filter(sistema => sistema.tipo === tipo);
};

// Função auxiliar para obter todos os tipos de sistema
export const getTiposSistema = (): SystemType[] => {
  return [...new Set(siemensSystemsData.map(sistema => sistema.tipo))];
};

// Função auxiliar para obter total de equipamentos
export const getTotalEquipamentos = (): number => {
  return siemensSystemsData.reduce((total, sistema) => total + sistema.equipamentos.length, 0);
};

// Manter compatibilidade com estrutura anterior (para não quebrar código existente)
export const siemensEquipmentData: Record<string, Record<string, Equipment[]>> = {
  VRF: {
    'Prédio Administrativo': [
      ...siemensSystemsData.filter(s => s.local === 'Prédio Administrativo' && s.tipo === 'VRF')
        .flatMap(s => s.equipamentos),
    ],
    'Control Building': [
      ...siemensSystemsData.filter(s => s.local === 'Control Building' && s.tipo === 'VRF')
        .flatMap(s => s.equipamentos),
    ],
    'Warehouse E Workshop': [
      ...siemensSystemsData.filter(s => s.local === 'Warehouse E Workshop' && s.tipo === 'VRF')
        .flatMap(s => s.equipamentos),
    ],
  },
  'Self Contained': {
    'Desal (Sala de Painéis)': [
      ...siemensSystemsData.filter(s => s.local === 'Desal (Sala de Painéis)' && s.tipo === 'Self Contained')
        .flatMap(s => s.equipamentos),
    ],
  },
  'Split System': {
    'Laboratório Químico': [
      ...siemensSystemsData.filter(s => s.local === 'Laboratório Químico' && s.tipo === 'Split System')
        .flatMap(s => s.equipamentos),
    ],
    'Portaria': [
      ...siemensSystemsData.filter(s => s.local === 'Portaria' && s.tipo === 'Split System')
        .flatMap(s => s.equipamentos),
    ],
  },
};