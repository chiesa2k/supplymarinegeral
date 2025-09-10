import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Wrench } from "lucide-react";

interface MetricsProps {
  totalSistemas: number;
  totalEquipamentos: number;
}

export const DashboardMetrics = ({ totalSistemas, totalEquipamentos }: MetricsProps) => {
  const metrics = [
    {
      title: "Sistemas",
      value: totalSistemas.toLocaleString(),
      icon: Wrench,
      description: "Sistemas disponíveis",
      gradient: "bg-gradient-wave"
    },
    {
      title: "Equipamentos",
      value: totalEquipamentos.toLocaleString(),
      icon: Anchor,
      description: "Equipamentos cadastrados",
      gradient: "bg-gradient-ocean"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.title} className="relative overflow-hidden shadow-card hover:shadow-interactive transition-all duration-300 border-0">
            <div className={`absolute inset-0 opacity-10 ${metric.gradient}`} />
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary" />
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};