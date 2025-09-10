import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { SystemData } from '@/data/siemensEquipment';
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