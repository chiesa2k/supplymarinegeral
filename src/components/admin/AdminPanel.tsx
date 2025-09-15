import { useState } from 'react'
import { Plus, Edit, Trash2, Users, Settings, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useSupabaseData } from '@/hooks/useSupabaseData'
import { ClientForm } from '@/components/forms/ClientForm'
import { SystemForm } from '@/components/forms/SystemForm'
import { EquipmentForm } from '@/components/forms/EquipmentForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Client, System, Equipment } from '@/lib/supabase'

export function AdminPanel() {
  const {
    clients,
    systems,
    equipments,
    loading,
    createClient,
    updateClient,
    deleteClient,
    createSystem,
    updateSystem,
    deleteSystem,
    createEquipment,
    updateEquipment,
    deleteEquipment,
    getSystemsByClient,
    getEquipmentsBySystem
  } = useSupabaseData()

  // Form states
  const [clientForm, setClientForm] = useState({ open: false, client: null as Client | null })
  const [systemForm, setSystemForm] = useState({ open: false, system: null as System | null })
  const [equipmentForm, setEquipmentForm] = useState({ open: false, equipment: null as Equipment | null })

  // Delete confirmation states
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    type: '' as 'client' | 'system' | 'equipment',
    item: null as any,
    title: '',
    description: ''
  })

  const handleDeleteClient = (client: Client) => {
    const systemCount = getSystemsByClient(client.id).length
    setDeleteDialog({
      open: true,
      type: 'client',
      item: client,
      title: 'Remover Cliente',
      description: `Tem certeza que deseja remover o cliente "${client.name}"? ${systemCount > 0 ? `Isso também removerá ${systemCount} sistema(s) e todos os equipamentos relacionados.` : ''}`
    })
  }

  const handleDeleteSystem = (system: System) => {
    const equipmentCount = getEquipmentsBySystem(system.id).length
    setDeleteDialog({
      open: true,
      type: 'system',
      item: system,
      title: 'Remover Sistema',
      description: `Tem certeza que deseja remover o sistema "${system.nome}"? ${equipmentCount > 0 ? `Isso também removerá ${equipmentCount} equipamento(s) relacionado(s).` : ''}`
    })
  }

  const handleDeleteEquipment = (equipment: Equipment) => {
    setDeleteDialog({
      open: true,
      type: 'equipment',
      item: equipment,
      title: 'Remover Equipamento',
      description: `Tem certeza que deseja remover o equipamento "${equipment.description}" (${equipment.code})?`
    })
  }

  const confirmDelete = async () => {
    try {
      switch (deleteDialog.type) {
        case 'client':
          await deleteClient(deleteDialog.item.id)
          break
        case 'system':
          await deleteSystem(deleteDialog.item.id)
          break
        case 'equipment':
          await deleteEquipment(deleteDialog.item.id)
          break
      }
      setDeleteDialog({ open: false, type: '' as any, item: null, title: '', description: '' })
    } catch (error) {
      console.error('Error deleting:', error)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Carregando painel administrativo...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Painel Administrativo</h1>
        <p className="text-muted-foreground">Gerencie clientes, sistemas e equipamentos</p>
      </div>

      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="clients" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Clientes
          </TabsTrigger>
          <TabsTrigger value="systems" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Sistemas
          </TabsTrigger>
          <TabsTrigger value="equipments" className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            Equipamentos
          </TabsTrigger>
        </TabsList>

        {/* Clients Tab */}
        <TabsContent value="clients">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Clientes ({clients.length})</CardTitle>
              <Button onClick={() => setClientForm({ open: true, client: null })}>
                <Plus className="h-4 w-4 mr-2" />
                Novo Cliente
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {clients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{client.name}</h3>
                      {client.description && (
                        <p className="text-sm text-muted-foreground">{client.description}</p>
                      )}
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">
                          {getSystemsByClient(client.id).length} sistemas
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setClientForm({ open: true, client })}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteClient(client)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Systems Tab */}
        <TabsContent value="systems">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Sistemas ({systems.length})</CardTitle>
              <Button 
                onClick={() => setSystemForm({ open: true, system: null })}
                disabled={clients.length === 0}
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Sistema
              </Button>
            </CardHeader>
            <CardContent>
              {clients.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Adicione pelo menos um cliente para criar sistemas
                </p>
              ) : (
                <div className="grid gap-4">
                  {systems.map((system) => {
                    const client = clients.find(c => c.id === system.client_id)
                    return (
                      <div key={system.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">Sistema {system.numero} - {system.nome}</h3>
                          <p className="text-sm text-muted-foreground">
                            Cliente: {client?.name} | Tipo: {system.tipo} | Local: {system.local}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary">
                              {getEquipmentsBySystem(system.id).length} equipamentos
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSystemForm({ open: true, system })}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteSystem(system)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Equipments Tab */}
        <TabsContent value="equipments">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Equipamentos ({equipments.length})</CardTitle>
              <Button 
                onClick={() => setEquipmentForm({ open: true, equipment: null })}
                disabled={systems.length === 0}
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Equipamento
              </Button>
            </CardHeader>
            <CardContent>
              {systems.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Adicione pelo menos um sistema para criar equipamentos
                </p>
              ) : (
                <div className="grid gap-4">
                  {equipments.map((equipment) => {
                    const system = systems.find(s => s.id === equipment.system_id)
                    const client = clients.find(c => c.id === system?.client_id)
                    return (
                      <div key={equipment.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{equipment.description}</h3>
                          <p className="text-sm text-muted-foreground">
                            TAG: {equipment.code} | Sistema: {system?.nome} | Cliente: {client?.name}
                          </p>
                          <div className="flex gap-2 mt-2">
                            {equipment.fabricante && (
                              <Badge variant="outline">{equipment.fabricante}</Badge>
                            )}
                            {equipment.tipo && (
                              <Badge variant="secondary">{equipment.tipo}</Badge>
                            )}
                            {equipment.capacidade && (
                              <Badge variant="secondary">{equipment.capacidade}</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setEquipmentForm({ open: true, equipment })}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteEquipment(equipment)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Forms */}
      <ClientForm
        open={clientForm.open}
        onOpenChange={(open) => setClientForm({ open, client: null })}
        client={clientForm.client}
        onSubmit={async (data) => {
          if (clientForm.client) {
            await updateClient(clientForm.client.id, data)
          } else {
            await createClient(data as Omit<Client, 'id' | 'created_at' | 'updated_at'>)
          }
        }}
      />

      <SystemForm
        open={systemForm.open}
        onOpenChange={(open) => setSystemForm({ open, system: null })}
        system={systemForm.system}
        clients={clients}
        onSubmit={async (data) => {
          if (systemForm.system) {
            await updateSystem(systemForm.system.id, data)
          } else {
            await createSystem(data as Omit<System, 'id' | 'created_at' | 'updated_at'>)
          }
        }}
      />

      <EquipmentForm
        open={equipmentForm.open}
        onOpenChange={(open) => setEquipmentForm({ open, equipment: null })}
        equipment={equipmentForm.equipment}
        systems={systems}
        onSubmit={async (data) => {
          if (equipmentForm.equipment) {
            await updateEquipment(equipmentForm.equipment.id, data)
          } else {
            await createEquipment(data as Omit<Equipment, 'id' | 'created_at' | 'updated_at'>)
          }
        }}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialog.open} onOpenChange={(open) => 
        setDeleteDialog({ ...deleteDialog, open })
      }>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{deleteDialog.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteDialog.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>
              Remover
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}