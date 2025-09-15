import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Equipment, System } from '@/lib/supabase'

const equipmentSchema = z.object({
  system_id: z.string().min(1, 'Sistema é obrigatório'),
  code: z.string().min(1, 'Código/TAG é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  fabricante: z.string().optional(),
  modelo: z.string().optional(),
  capacidade: z.string().optional(),
  tipo: z.string().optional(),
  local: z.string().optional(),
  condensacao: z.string().optional(),
  numero_serie: z.string().optional(),
  valvula_solenoide: z.string().optional(),
  valvula_expansao: z.string().optional(),
  compressor: z.string().optional(),
  unidade_comp: z.string().optional(),
  refrigerante: z.string().optional(),
  alimentacao: z.string().optional(),
  ventilador: z.string().optional(),
  vazao_ventilador: z.string().optional(),
  filtro: z.string().optional(),
})

type EquipmentFormData = z.infer<typeof equipmentSchema>

interface EquipmentFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  equipment?: Equipment
  systems: System[]
  onSubmit: (data: EquipmentFormData) => Promise<void>
}

export function EquipmentForm({ open, onOpenChange, equipment, systems, onSubmit }: EquipmentFormProps) {
  const [loading, setLoading] = useState(false)

  const form = useForm<EquipmentFormData>({
    resolver: zodResolver(equipmentSchema),
    defaultValues: {
      system_id: equipment?.system_id || '',
      code: equipment?.code || '',
      description: equipment?.description || '',
      fabricante: equipment?.fabricante || '',
      modelo: equipment?.modelo || '',
      capacidade: equipment?.capacidade || '',
      tipo: equipment?.tipo || '',
      local: equipment?.local || '',
      condensacao: equipment?.condensacao || '',
      numero_serie: equipment?.numero_serie || '',
      valvula_solenoide: equipment?.valvula_solenoide || '',
      valvula_expansao: equipment?.valvula_expansao || '',
      compressor: equipment?.compressor || '',
      unidade_comp: equipment?.unidade_comp || '',
      refrigerante: equipment?.refrigerante || '',
      alimentacao: equipment?.alimentacao || '',
      ventilador: equipment?.ventilador || '',
      vazao_ventilador: equipment?.vazao_ventilador || '',
      filtro: equipment?.filtro || '',
    },
  })

  const handleSubmit = async (data: EquipmentFormData) => {
    try {
      setLoading(true)
      await onSubmit(data)
      form.reset()
      onOpenChange(false)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>
            {equipment ? 'Editar Equipamento' : 'Novo Equipamento'}
          </DialogTitle>
          <DialogDescription>
            {equipment ? 'Edite as informações do equipamento' : 'Adicione um novo equipamento'}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="system_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sistema</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um sistema" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {systems.map((system) => (
                          <SelectItem key={system.id} value={system.id}>
                            Sistema {system.numero} - {system.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>TAG/Código</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 77GB001A" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Self Contained" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição do equipamento" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fabricante"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fabricante</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Glory Bright" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="modelo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modelo</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: GAL76" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="capacidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Capacidade</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 104.50 kW" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="condensacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Condensação</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Ar, Água" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="numero_serie"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Série</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 4500089760" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="local"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Local</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Laboratório" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="refrigerante"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Refrigerante</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: R407C" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="alimentacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alimentação</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 440V-3F-60Hz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="compressor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compressor</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Copeland/ZR310KCE-TWD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="valvula_solenoide"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Válvula Solenoide</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Emerson/200RB 2T3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="valvula_expansao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Válvula de Expansão</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: TER22" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="ventilador"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ventilador</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Aeolus" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vazao_ventilador"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vazão do Ventilador</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 47,276 m³/hr" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="filtro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Filtro</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: G2" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="unidade_comp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unidade Comp.</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 02 Unidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Salvando...' : equipment ? 'Atualizar' : 'Criar'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}