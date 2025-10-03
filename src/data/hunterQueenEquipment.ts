import { SystemData } from './modecEquipment';

export const hunterQueenSystemsData: SystemData[] = [
  {
    numero: 1,
    nome: "Sistema de Ar Condicionado – Casario",
    tipo: "Misto",
    local: "Casario",
    equipamentos: [
      { code: "NI", description: "Rooftop Produção #1", fabricante: "DWD", modelo: "50-TM-025 | 50-TM-025", capacidade: "82,04 kW", numeroSerie: "251071-AC-1 | 251071-AC-1" },
      { code: "NI", description: "Rooftop Produção #2", fabricante: "DWD", modelo: "50-TM-025 | 50-TM-025", capacidade: "82,04 kW", numeroSerie: "251071-AC-1 | 251071-AC-2" },
      { code: "NI", description: "Self Contained Perfuração #1", fabricante: "Supply Marine", modelo: "SMESA015-ICHST-7C", capacidade: "54,79 kW", numeroSerie: "2020D282" },
      { code: "NI", description: "Split Perfuração #2", fabricante: "CARRIER", modelo: "40RM-016-B600GC", capacidade: "54,79 kW", numeroSerie: "3798F69939" },
    ],
  },
  {
    numero: 2,
    nome: "Sistema de Ar Condicionado – Acomodações (Piso Superior)",
    tipo: "Split System",
    local: "Acomodações",
    equipamentos: [
      { code: "NI", description: "Split (Hi-wall) Acomodação", fabricante: "NI", modelo: "NI", capacidade: "10,5 kW", numeroSerie: "NI" },
    ],
  },
  {
    numero: 3,
    nome: "Sistema de Ar Condicionado – VSD (Variable Speed Drive)",
    tipo: "Rooftop",
    local: "VSD",
    equipamentos: [
      { code: "NI", description: "Rooftop VSD #1", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2017" },
      { code: "NI", description: "Rooftop VSD #2", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2022" },
      { code: "NI", description: "Rooftop VSD #3", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2019" },
      { code: "NI", description: "Rooftop VSD #4", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2020" },
      { code: "NI", description: "Rooftop VSD #5", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2018" },
      { code: "NI", description: "Rooftop VSD #6", fabricante: "PHILIPDOYLE m.", modelo: "5200", capacidade: "216,6 kW", numeroSerie: "2021" },
    ],
  },
  {
    numero: 4,
    nome: "Sistema de Ar Condicionado – Sala de Controle (Produção)",
    tipo: "Rooftop",
    local: "Sala de Controle",
    equipamentos: [
      { code: "NI", description: "Rooftop Sala de Controle #1", fabricante: "DWD", modelo: "50-TM-014 | 50-TM-014", capacidade: "24,99 kW", numeroSerie: "251059-AC1 | 251059-AC1" },
      { code: "NI", description: "Rooftop Sala de Controle #2", fabricante: "DWD", modelo: "50-TM-014 | 50-TM-014", capacidade: "24,99 kW", numeroSerie: "251059-AC2 | 251059-AC2" },
    ],
  },
  {
    numero: 5,
    nome: "Sistema de Ar Condicionado – SCR (Silicon Controlled Rectifier)",
    tipo: "Split System",
    local: "SCR",
    equipamentos: [
      { code: "NI", description: "Split SCR #1", fabricante: "CARRIER", modelo: "40RM-012-8600HC | 38AR5012-C611", capacidade: "35,71 kW", numeroSerie: "2299F23407" },
      { code: "NI", description: "Split SCR #2", fabricante: "CARRIER", modelo: "40RM-012-8600HC | 38AR5012-C611", capacidade: "35,71 kW", numeroSerie: "2399F24950" },
      { code: "NI", description: "Split SCR #3", fabricante: "CARRIER", modelo: "40RM-012-8600HC | 38AR5012-C611", capacidade: "35,71 kW", numeroSerie: "NI" },
    ],
  },
  {
    numero: 6,
    nome: "Sistema de Ar Condicionado – LIR (Local Instrument Room)",
    tipo: "Misto",
    local: "LIR",
    equipamentos: [
      { code: "578-GB0031", description: "Fan Coil ALPHA", fabricante: "FlaktWoods", modelo: "GTLB-5-050-1711-10", capacidade: "6,4 kW", numeroSerie: "0200223782" },
      { code: "578-GB0032", description: "Fan Coil BRAVO", fabricante: "FlaktWoods", modelo: "GTJZ-42-050-081-11", capacidade: "6,4 kW", numeroSerie: "0200223782" },
      { code: "578-GB0041", description: "Split Cassete ALPHA", fabricante: "N/I", modelo: "N/I", capacidade: "17,86 kW", numeroSerie: "N/I" },
      { code: "578-GB0042", description: "Split Cassete BRAVO", fabricante: "N/I", modelo: "N/I", capacidade: "17,86 kW", numeroSerie: "N/I" },
    ],
  },
  {
    numero: 7,
    nome: "Sistema de Refrigeração – Provisões",
    tipo: "Misto",
    local: "Câmaras Frias",
    equipamentos: [
      { code: "MCU42-CK160912V", description: "Unidade Condensadora ALPHA & BRAVO", fabricante: "Bitzer", modelo: "4P.2Y", capacidade: "9,49 kW", numeroSerie: "2598272927" },
      { code: "NI", description: "Câmara de Congelados (Carne)", fabricante: "DANFOSS/LARKIN", modelo: "LCA644AA | HCZ018B40N", capacidade: "7,3 kW", numeroSerie: "D99D03790 | YH180174520" },
      { code: "NI", description: "Câmara Fria - Legumes", fabricante: "DANFOSS/LARKIN", modelo: "LCA644AA | HCZ018B40N", capacidade: "NI", numeroSerie: "D99D03790 | YH180174520" },
      { code: "NI", description: "Câmara Fria - Resfriados", fabricante: "DANFOSS/LARKIN", modelo: "LCA644AA | HCZ018B40N", capacidade: "NI", numeroSerie: "D99D03790 | YH180174520" },
      { code: "N/I", description: "Câmara Seca", fabricante: "Alfa Laval / Tecknotherm", modelo: "MLZX.16.7.1E.2C01R2 | CK160912", capacidade: "3,7 kW", numeroSerie: "81004090081.02962.19539" },
    ],
  },
  {
    numero: 8,
    nome: "Sistema de Climatização – Cozinha",
    tipo: "Split System",
    local: "Cozinha",
    equipamentos: [
      { code: "NI", description: "Split (Dutado)", fabricante: "RADCO", modelo: "FA4ANF042", capacidade: "12,30 kW", numeroSerie: "3298A25144" },
      { code: "NI", description: "Split (Hi-wall)", fabricante: "NI", modelo: "4ANT42 | 38CKC042610", capacidade: "12,30 kW", numeroSerie: "NI" },
    ],
  },
  {
    numero: 9,
    nome: "Sistemas de Climatização – Salas do MCC",
    tipo: "Split System",
    local: "Salas do MCC",
    equipamentos: [
      { code: "NI", description: "Split - Sala de Solda", fabricante: "YORK", modelo: "RAEA30FS-ADR", capacidade: "8,79 kW", numeroSerie: "AEA30FSA-DR | CK32K6M-PFV141" },
      { code: "NI", description: "Split - Sala de Sonda", fabricante: "YORK", modelo: "RAEA30FS-ADR", capacidade: "8,79 kW", numeroSerie: "125220851080800000" },
      { code: "NI", description: "Split - Sala de Bombas", fabricante: "YORK", modelo: "AEA30FSA-DR | CK32K6M-PFV141", capacidade: "8,79 kW", numeroSerie: "DCE-0001545 | DCE-0001545" },
      { code: "NI", description: "Split - Bomba de Lama", fabricante: "YORK", modelo: "RAEA30FS-ADR", capacidade: "8,79 kW", numeroSerie: "125201888081200000" },
    ],
  },
  {
    numero: 10,
    nome: "Sistemas Independentes (Salas Diversas)",
    tipo: "Misto",
    local: "Salas Diversas",
    equipamentos: [
        { code: "NI", description: "Split - Sala da Enfermaria", fabricante: "Springer Midea", modelo: "42MACA1255 | 38KCQ1255", capacidade: "3,51 kW", numeroSerie: "NI" },
        { code: "NI", description: "Split - Sala de Rádio", fabricante: "Springer Midea", modelo: "42MACA1855", capacidade: "5,27 kW", numeroSerie: "0819815005291" },
        { code: "NI", description: "Split - Sala de Academia", fabricante: "ELGIN", modelo: "HEFL12B2FB | HEFE12B2NB", capacidade: "8,79 kW", numeroSerie: "PTFL30B2LD | OUFE3030B2CB" },
        { code: "NI", description: "Split - Oficina (Piso Teto)", fabricante: "YORK", modelo: "42XQW3655 | 38CCU036515MS", capacidade: "10,54 kW", numeroSerie: "0121819099916 | 1221819661055" },
        { code: "NI", description: "Self Contained - Almoxarifado", fabricante: "DWD", modelo: "LPX364-9", capacidade: "NI", numeroSerie: "128046-AC-2 | 128046-AC-2" },
        { code: "NI", description: "Split - Tool Pusher", fabricante: "YORK", modelo: "YKS18FCA-G1", capacidade: "5,27 kW", numeroSerie: "Y181-01 002630-010030095" },
        { code: "NI", description: "Split - Sala AASJ", fabricante: "ELGIN", modelo: "SRQI-30000-2 | SRQI-30000-2", capacidade: "8,79 kW", numeroSerie: "198090464901 | 198090465000" },
        { code: "NI", description: "Split - Laboratório de Produção", fabricante: "YORK", modelo: "YJHFXC024BBACAFX", capacidade: "7,03 kW", numeroSerie: "1000026141110700000" },
        { code: "NI", description: "Split - Laboratório de Sonda", fabricante: "Springer Midea", modelo: "42MFQB12M5 | 38KQV12M5", capacidade: "3,51 kW", numeroSerie: "NI" },
        { code: "NI", description: "Rooftop - Doghouse / Solda", fabricante: "CARRIER", modelo: "50TM-004-601BA", capacidade: "10,25 kW", numeroSerie: "2906640279" },
    ],
  },
  {
    numero: 11,
    nome: "Sistema de Climatização – Guindastes e Cabines",
    tipo: "Misto",
    local: "Guindastes e Cabines",
    equipamentos: [
        { code: "N/I", description: "AC Janela - Guindaste #1", fabricante: "Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Guindaste #2", fabricante: "Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Guindaste #3", fabricante: "Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Cabine Ancoras #01", fabricante: "Coolstar", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Cabine Ancoras #02", fabricante: "Hazardgard | Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Cabine Ancoras #03", fabricante: "Hazardgard | Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "AC Janela - Cabine Ancoras #04", fabricante: "Hazardgard | Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "Split Hi-Wall - Paiol Subsea", fabricante: "Carrier", modelo: "40GVM009-3 | 38GVM430-3", capacidade: "2,63 kW", numeroSerie: "0314W53823 | 1114V54655" },
        { code: "N/I", description: "AC Janela - Paiol Subsea", fabricante: "Friedrich", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
        { code: "N/I", description: "Split Hi-Wall - Contêiner de Carga", fabricante: "N/I", modelo: "N/I", capacidade: "3,51 kW", numeroSerie: "N/I" },
    ],
  },
];

export const hunterQueenEquipmentData = hunterQueenSystemsData.flatMap(sistema =>
  sistema.equipamentos.map(equip => ({
    ...equip,
    sistema: sistema.numero,
    local: equip.local || sistema.local,
    description: equip.description || `${equip.tipo} - ${equip.local}`
  }))
);

export const getTotalEquipamentosHunterQueen = (): number => {
  return hunterQueenEquipmentData.length;
};