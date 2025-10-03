import { SystemData } from './modecEquipment';

export const fpsoFradeSystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Ar-Condicionado – Acomodações",
    tipo: "Misto",
    local: "Acomodações",
    equipamentos: [
      { code: "AC-CH-01A", description: "Chiller ALPHA", fabricante: "Novenco", modelo: "QCM-ST637-ST-36FW-R407C-690/60-6-3", capacidade: "704,0 kW", numeroSerie: "H0911005" },
      { code: "AC-CH-01B", description: "Chiller BRAVO", fabricante: "Novenco", modelo: "QCM-ST637-ST-36FW-R407C-690/60-6-3", capacidade: "704,0 kW", numeroSerie: "H0911006" },
      { code: "AC-AHU-01A", description: "AHU ALPHA", fabricante: "Novenco", modelo: "ZCR-23/20R", capacidade: "704,0 kW", numeroSerie: "C0911001" },
      { code: "AC-AHU-01B", description: "AHU BRAVO", fabricante: "Novenco", modelo: "ZCR-23/20L", capacidade: "704,0 kW", numeroSerie: "C0911002" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Ar-Condicionado – E-House",
    tipo: "Self Contained",
    local: "E-House",
    equipamentos: [
      { code: "EH-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW", numeroSerie: "N/I" },
      { code: "EH-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 12.5-C", capacidade: "150,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Ar-Condicionado – Engine Control Room (ECR)",
    tipo: "Self Contained",
    local: "ECR",
    equipamentos: [
      { code: "ER-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
      { code: "ER-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Ar-Condicionado – Cozinha",
    tipo: "Self Contained",
    local: "Cozinha",
    equipamentos: [
        { code: "G-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "G-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Ar-Condicionado – Paiol de Tintas",
    tipo: "Self Contained",
    local: "Paiol de Tintas",
    equipamentos: [
        { code: "PR-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW", numeroSerie: "N/I" },
        { code: "PR-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 7.5-C", capacidade: "26,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Ar-Condicionado – Sala de Baterias",
    tipo: "Self Contained",
    local: "Sala de Baterias",
    equipamentos: [
        { code: "BR-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "BR-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Ar-Condicionado – Sala de Controle Central (CCR)",
    tipo: "Self Contained",
    local: "CCR",
    equipamentos: [
        { code: "CR-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "CR-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Ar-Condicionado – Laboratório",
    tipo: "Self Contained",
    local: "Laboratório",
    equipamentos: [
        { code: "L-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "L-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C Ex", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 9,
    nome: "Sistema de Ar-Condicionado – Oficina",
    tipo: "Self Contained",
    local: "Oficina",
    equipamentos: [
        { code: "W-HVAC-01A", description: "Self Contained ALPHA", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "W-HVAC-01B", description: "Self Contained BRAVO", fabricante: "Novenco", modelo: "HPL.S 10-C", capacidade: "35,0 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 10,
    nome: "Sistema de Refrigeração – Provisões",
    tipo: "Unidade Condensadora",
    local: "Provisões",
    equipamentos: [
        { code: "PC-CU-01A", description: "Unidade Condensadora ALPHA", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "PC-CU-01B", description: "Unidade Condensadora BRAVO", fabricante: "Heinen & Hopman", modelo: "HWC 125-C2-W-S", capacidade: "35,0 kW", numeroSerie: "N/I" },
        { code: "PC-AC-01", description: "Forçador de ar - Câmara de Carne", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW", numeroSerie: "N/I" },
        { code: "PC-AC-02", description: "Forçador de ar - Câmara de Laticínios", fabricante: "Helpman", modelo: "LVS-32-6", capacidade: "2,90 kW", numeroSerie: "N/I" },
        { code: "PC-AC-03", description: "Forçador de ar - Câmara de Vegetais", fabricante: "Helpman", modelo: "LKS-21-6", capacidade: "3,10 kW", numeroSerie: "N/I" },
    ],
  },
];

export const fpsoFradeEquipmentData = fpsoFradeSystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTotalEquipamentosFpsoFrade = (): number => {
  return fpsoFradeEquipmentData.length;
};