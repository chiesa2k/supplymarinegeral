import { useState, useEffect } from 'react'
import { supabase, Client, System, Equipment } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useSupabaseData = () => {
  const [clients, setClients] = useState<Client[]>([])
  const [systems, setSystems] = useState<System[]>([])
  const [equipments, setEquipments] = useState<Equipment[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Fetch all data
  const fetchData = async () => {
    try {
      setLoading(true)
      
      const [clientsRes, systemsRes, equipmentsRes] = await Promise.all([
        supabase.from('clients').select('*').order('name'),
        supabase.from('systems').select('*').order('numero'),
        supabase.from('equipments').select('*').order('code')
      ])

      if (clientsRes.error) throw clientsRes.error
      if (systemsRes.error) throw systemsRes.error
      if (equipmentsRes.error) throw equipmentsRes.error

      setClients(clientsRes.data || [])
      setSystems(systemsRes.data || [])
      setEquipments(equipmentsRes.data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Erro",
        description: "Erro ao carregar dados do banco",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  // CRUD for Clients
  const createClient = async (clientData: Omit<Client, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert([clientData])
        .select()
        .single()

      if (error) throw error

      setClients(prev => [...prev, data])
      toast({
        title: "Sucesso",
        description: "Cliente criado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error creating client:', error)
      toast({
        title: "Erro",
        description: "Erro ao criar cliente",
        variant: "destructive"
      })
      throw error
    }
  }

  const updateClient = async (id: string, updates: Partial<Client>) => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      setClients(prev => prev.map(client => client.id === id ? data : client))
      toast({
        title: "Sucesso",
        description: "Cliente atualizado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error updating client:', error)
      toast({
        title: "Erro",
        description: "Erro ao atualizar cliente",
        variant: "destructive"
      })
      throw error
    }
  }

  const deleteClient = async (id: string) => {
    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', id)

      if (error) throw error

      setClients(prev => prev.filter(client => client.id !== id))
      toast({
        title: "Sucesso",
        description: "Cliente removido com sucesso"
      })
    } catch (error) {
      console.error('Error deleting client:', error)
      toast({
        title: "Erro",
        description: "Erro ao remover cliente",
        variant: "destructive"
      })
      throw error
    }
  }

  // CRUD for Systems
  const createSystem = async (systemData: Omit<System, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('systems')
        .insert([systemData])
        .select()
        .single()

      if (error) throw error

      setSystems(prev => [...prev, data])
      toast({
        title: "Sucesso",
        description: "Sistema criado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error creating system:', error)
      toast({
        title: "Erro",
        description: "Erro ao criar sistema",
        variant: "destructive"
      })
      throw error
    }
  }

  const updateSystem = async (id: string, updates: Partial<System>) => {
    try {
      const { data, error } = await supabase
        .from('systems')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      setSystems(prev => prev.map(system => system.id === id ? data : system))
      toast({
        title: "Sucesso",
        description: "Sistema atualizado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error updating system:', error)
      toast({
        title: "Erro",
        description: "Erro ao atualizar sistema",
        variant: "destructive"
      })
      throw error
    }
  }

  const deleteSystem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('systems')
        .delete()
        .eq('id', id)

      if (error) throw error

      setSystems(prev => prev.filter(system => system.id !== id))
      toast({
        title: "Sucesso",
        description: "Sistema removido com sucesso"
      })
    } catch (error) {
      console.error('Error deleting system:', error)
      toast({
        title: "Erro",
        description: "Erro ao remover sistema",
        variant: "destructive"
      })
      throw error
    }
  }

  // CRUD for Equipment
  const createEquipment = async (equipmentData: Omit<Equipment, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('equipments')
        .insert([equipmentData])
        .select()
        .single()

      if (error) throw error

      setEquipments(prev => [...prev, data])
      toast({
        title: "Sucesso",
        description: "Equipamento criado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error creating equipment:', error)
      toast({
        title: "Erro",
        description: "Erro ao criar equipamento",
        variant: "destructive"
      })
      throw error
    }
  }

  const updateEquipment = async (id: string, updates: Partial<Equipment>) => {
    try {
      const { data, error } = await supabase
        .from('equipments')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      setEquipments(prev => prev.map(equipment => equipment.id === id ? data : equipment))
      toast({
        title: "Sucesso",
        description: "Equipamento atualizado com sucesso"
      })
      return data
    } catch (error) {
      console.error('Error updating equipment:', error)
      toast({
        title: "Erro",
        description: "Erro ao atualizar equipamento",
        variant: "destructive"
      })
      throw error
    }
  }

  const deleteEquipment = async (id: string) => {
    try {
      const { error } = await supabase
        .from('equipments')
        .delete()
        .eq('id', id)

      if (error) throw error

      setEquipments(prev => prev.filter(equipment => equipment.id !== id))
      toast({
        title: "Sucesso",
        description: "Equipamento removido com sucesso"
      })
    } catch (error) {
      console.error('Error deleting equipment:', error)
      toast({
        title: "Erro",
        description: "Erro ao remover equipamento",
        variant: "destructive"
      })
      throw error
    }
  }

  // Initialize data on mount
  useEffect(() => {
    fetchData()
  }, [])

  // Helper functions
  const getSystemsByClient = (clientId: string) => 
    systems.filter(system => system.client_id === clientId)

  const getEquipmentsBySystem = (systemId: string) => 
    equipments.filter(equipment => equipment.system_id === systemId)

  return {
    clients,
    systems,
    equipments,
    loading,
    fetchData,
    // Client CRUD
    createClient,
    updateClient,
    deleteClient,
    // System CRUD
    createSystem,
    updateSystem,
    deleteSystem,
    // Equipment CRUD
    createEquipment,
    updateEquipment,
    deleteEquipment,
    // Helpers
    getSystemsByClient,
    getEquipmentsBySystem
  }
}