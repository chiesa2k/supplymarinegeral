import { supabase } from '@/lib/supabase'
import { siemensSystemsData } from '@/data/siemensEquipment'
import { modecSystemsData } from '@/data/modecEquipment'

export const migrateExistingData = async () => {
  try {
    console.log('Starting data migration...')

    // First, get or create clients
    const { data: existingClients } = await supabase
      .from('clients')
      .select('*')

    let siemensClient = existingClients?.find(c => c.name === 'Siemens')
    let modecClient = existingClients?.find(c => c.name === 'Modec')

    if (!siemensClient) {
      const { data } = await supabase
        .from('clients')
        .insert([{
          name: 'Siemens',
          description: 'Cliente Siemens - Sistemas industriais'
        }])
        .select()
        .single()
      siemensClient = data
    }

    if (!modecClient) {
      const { data } = await supabase
        .from('clients')
        .insert([{
          name: 'Modec',
          description: 'FPSO Bacalhau - Plataforma marítima'
        }])
        .select()
        .single()
      modecClient = data
    }

    console.log('Clients created/found:', { siemensClient, modecClient })

    // Migrate Siemens systems
    for (const systemData of siemensSystemsData) {
      const { data: existingSystem } = await supabase
        .from('systems')
        .select('*')
        .eq('client_id', siemensClient.id)
        .eq('numero', systemData.numero)
        .single()

      let system = existingSystem
      if (!system) {
        const { data } = await supabase
          .from('systems')
          .insert([{
            client_id: siemensClient.id,
            numero: systemData.numero,
            nome: systemData.nome,
            tipo: systemData.tipo,
            local: systemData.local
          }])
          .select()
          .single()
        system = data
      }

      // Migrate equipment for this system
      for (const equipment of systemData.equipamentos) {
        const { data: existingEquipment } = await supabase
          .from('equipments')
          .select('*')
          .eq('code', equipment.code)
          .single()

        if (!existingEquipment) {
          await supabase
            .from('equipments')
            .insert([{
              system_id: system.id,
              code: equipment.code,
              description: equipment.description,
              fabricante: equipment.fabricante,
              modelo: equipment.modelo,
              capacidade: equipment.capacidade,
              tipo: equipment.tipo,
              local: equipment.local,
              condensacao: equipment.condensacao,
              numero_serie: equipment.numeroSerie,
              valvula_solenoide: equipment.valvulaSolenoide,
              valvula_expansao: equipment.valvulaExpansao,
              compressor: equipment.compressor,
              unidade_comp: equipment.unidadeComp,
              refrigerante: equipment.refrigerante,
              alimentacao: equipment.alimentacao,
              ventilador: equipment.ventilador,
              vazao_ventilador: equipment.vazaoVentilador,
              filtro: equipment.filtro
            }])
        }
      }
    }

    // Migrate Modec systems
    for (const systemData of modecSystemsData) {
      const { data: existingSystem } = await supabase
        .from('systems')
        .select('*')
        .eq('client_id', modecClient.id)
        .eq('numero', systemData.numero)
        .single()

      let system = existingSystem
      if (!system) {
        const { data } = await supabase
          .from('systems')
          .insert([{
            client_id: modecClient.id,
            numero: systemData.numero,
            nome: systemData.nome,
            tipo: systemData.tipo,
            local: systemData.local
          }])
          .select()
          .single()
        system = data
      }

      // Migrate equipment for this system
      for (const equipment of systemData.equipamentos) {
        const { data: existingEquipment } = await supabase
          .from('equipments')
          .select('*')
          .eq('code', equipment.code)
          .single()

        if (!existingEquipment) {
          await supabase
            .from('equipments')
            .insert([{
              system_id: system.id,
              code: equipment.code,
              description: equipment.description,
              fabricante: equipment.fabricante,
              modelo: equipment.modelo,
              capacidade: equipment.capacidade,
              tipo: equipment.tipo,
              local: equipment.local,
              condensacao: equipment.condensacao,
              numero_serie: equipment.numeroSerie,
              valvula_solenoide: equipment.valvulaSolenoide,
              valvula_expansao: equipment.valvulaExpansao,
              compressor: equipment.compressor,
              unidade_comp: equipment.unidadeComp,
              refrigerante: equipment.refrigerante,
              alimentacao: equipment.alimentacao,
              ventilador: equipment.ventilador,
              vazao_ventilador: equipment.vazaoVentilador,
              filtro: equipment.filtro
            }])
        }
      }
    }

    console.log('Data migration completed successfully!')
    return { success: true }
  } catch (error) {
    console.error('Error during migration:', error)
    return { success: false, error }
  }
}