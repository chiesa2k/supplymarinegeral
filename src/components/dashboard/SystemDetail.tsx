import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SystemData } from '@/data/siemensEquipment';
import { Equipment } from '@/data/modecEquipment';
import { Wrench, MapPin, Factory, Zap, Hash } from 'lucide-react';

interface SystemDetailProps {
  system: SystemData;
}

export const SystemDetail = ({ system }: SystemDetailProps) => {
  return (
    <div className="space-y-6">
      {/* Header do Sistema */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 mb-2">
                <Wrench className="h-6 w-6 text-primary" />
                Sistema {system.numero}
              </CardTitle>
              <h2 className="text-2xl font-bold text-foreground">{system.nome}</h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{system.local}</span>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              {system.tipo}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Equipamentos do Sistema */}
      <Card className="shadow-card border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-primary" />
            Equipamentos ({system.equipamentos.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {system.equipamentos.map((equipamento, index) => (
              <div key={equipamento.code} className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{equipamento.code}</h4>
                      <p className="text-muted-foreground">{equipamento.description}</p>
                    </div>
                    {equipamento.tipo && (
                      <Badge variant="outline">
                        {equipamento.tipo}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {equipamento.fabricante && (
                      <div className="flex items-center gap-2">
                        <Factory className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Fabricante</p>
                          <p className="font-medium">{equipamento.fabricante}</p>
                        </div>
                      </div>
                    )}
                    
                    {equipamento.modelo && (
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Modelo</p>
                          <p className="font-medium">{equipamento.modelo}</p>
                        </div>
                      </div>
                    )}
                    
                    {equipamento.capacidade && (
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Capacidade</p>
                          <p className="font-medium">{equipamento.capacidade}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Detalhes Técnicos Expandidos */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {equipamento.condensacao && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Condensação</p>
                        <p className="font-medium text-sm">{equipamento.condensacao}</p>
                      </div>
                    )}
                    
                    {equipamento.numeroSerie && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Nº Série</p>
                        <p className="font-medium text-sm">{equipamento.numeroSerie}</p>
                      </div>
                    )}
                    
                    {equipamento.refrigerante && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Refrigerante</p>
                        <p className="font-medium text-sm">{equipamento.refrigerante}</p>
                      </div>
                    )}
                    
                    {equipamento.alimentacao && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Alimentação</p>
                        <p className="font-medium text-sm">{equipamento.alimentacao}</p>
                      </div>
                    )}
                    
                    {equipamento.compressor && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Compressor</p>
                        <p className="font-medium text-sm">{equipamento.compressor}</p>
                      </div>
                    )}
                    
                    {equipamento.valvulaSolenoide && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Válvula Solenoide</p>
                        <p className="font-medium text-sm">{equipamento.valvulaSolenoide}</p>
                      </div>
                    )}
                    
                    {equipamento.valvulaExpansao && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Válvula de Expansão</p>
                        <p className="font-medium text-sm">{equipamento.valvulaExpansao}</p>
                      </div>
                    )}
                    
                    {equipamento.ventilador && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Ventilador</p>
                        <p className="font-medium text-sm">{equipamento.ventilador}</p>
                      </div>
                    )}
                    
                    {equipamento.vazaoVentilador && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Vazão Ventilador</p>
                        <p className="font-medium text-sm">{equipamento.vazaoVentilador}</p>
                      </div>
                    )}
                    
                    {equipamento.filtro && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Filtro</p>
                        <p className="font-medium text-sm">{equipamento.filtro}</p>
                      </div>
                    )}
                    
                    {equipamento.unidadeComp && (
                      <div className="bg-background/80 rounded-md p-3 border">
                        <p className="text-xs text-muted-foreground mb-1">Unidade Comp.</p>
                        <p className="font-medium text-sm">{equipamento.unidadeComp}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {index < system.equipamentos.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};