import { useState } from 'react';
import { useExcelData, ServiceRecord } from '@/hooks/useExcelData';
import { DashboardMetrics } from './DashboardMetrics';
import { NavigationBreadcrumb } from './NavigationBreadcrumb';
import { InteractiveCard } from './InteractiveCard';
import { ServiceDetail } from './ServiceDetail';
import { SystemDetail } from './SystemDetail';
import { SearchBar } from '@/components/ui/search-bar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Users, Ship, Wrench, FileText, Clock, MapPin, Anchor } from 'lucide-react';
import maritimeHero from '@/assets/maritime-hero.jpg';
import maritimeIcon from '@/assets/maritime-icon.png';
import { siemensEquipmentData, siemensSystemsData, getTiposSistema, getTotalEquipamentos, SystemData } from '@/data/siemensEquipment';
import { modecEquipmentData, modecSystemsData, getTiposSistemaModec, getTotalEquipamentosModec } from '@/data/modecEquipment';
type ViewLevel = 'overview' | 'cliente' | 'sistema' | 'sistemaDetail';

interface NavigationState {
  level: ViewLevel;
  selectedCliente?: string;
  selectedSistema?: string;
  selectedSystemData?: SystemData;
}

interface SearchState {
  unidades: string;
  sistemas: string;
  tiposEquipamento: string;
  locais: string;
  atendimentos: string;
}

export const MaritimeDashboard = () => {
  const {
    data,
    loading,
    error,
    getClientes,
    getUnidadesByCliente,
    getSistemasByUnidade,
    getTiposEquipamentoBySistema,
    getLocaisByTipoEquipamento,
    getAtendimentosByLocal,
    getAtendimentosByTipoEquipamento,
    getTotalHorasByCliente,
    getServiceStats
  } = useExcelData();

  const [navigation, setNavigation] = useState<NavigationState>({
    level: 'overview'
  });

  const [searchTerms, setSearchTerms] = useState<SearchState>({
    unidades: '',
    sistemas: '',
    tiposEquipamento: '',
    locais: '',
    atendimentos: ''
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-wave relative overflow-hidden">
        {/* Background hero image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${maritimeHero})` }}
        />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-interactive">
            <img src={maritimeIcon} alt="Maritime" className="w-16 h-16 mx-auto mb-4 animate-float" />
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">Carregando dados dos serviços marítimos...</p>
            <p className="text-sm text-muted-foreground mt-2">Processando informações das embarcações</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-wave">
        <Card className="p-8 max-w-md shadow-card border-0">
          <CardContent className="text-center">
            <img src={maritimeIcon} alt="Maritime" className="w-16 h-16 mx-auto mb-4" />
            <p className="text-destructive mb-4">{error}</p>
            <p className="text-muted-foreground">O dashboard carregará com dados de exemplo.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Calcular métricas totais
  const totalSistemasSiemens = siemensSystemsData.length;
  const totalEquipamentosSiemens = getTotalEquipamentos();
  const totalSistemasModec = modecSystemsData.length;
  const totalEquipamentosModec = getTotalEquipamentosModec();
  
  const totalSistemas = totalSistemasSiemens + totalSistemasModec;
  const totalEquipamentos = totalEquipamentosSiemens + totalEquipamentosModec;

  const getBreadcrumbItems = () => {
    const items = [];
    
    if (navigation.selectedCliente) {
      items.push({
        label: navigation.selectedCliente,
        onClick: () => handleNavigationChange({ level: 'cliente', selectedCliente: navigation.selectedCliente })
      });
    }
    
    if (navigation.selectedSistema) {
      items.push({
        label: navigation.selectedSistema
      });
    }

    return items;
  };

  const resetNavigation = () => {
    setNavigation({ level: 'overview' });
    setSearchTerms({ unidades: '', sistemas: '', tiposEquipamento: '', locais: '', atendimentos: '' });
  };

  const handleNavigationChange = (newNavigation: NavigationState) => {
    setNavigation(newNavigation);
    // Clear relevant search terms when navigating
    if (newNavigation.level === 'cliente') {
      setSearchTerms(prev => ({ ...prev, sistemas: '', tiposEquipamento: '', locais: '', atendimentos: '' }));
    }
  };

  const renderOverview = () => {
    return (
      <div className="space-y-6">
        <DashboardMetrics totalSistemas={totalSistemas} totalEquipamentos={totalEquipamentos} />
        
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Clientes (2)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InteractiveCard
                  key="Siemens"
                  title="Siemens"
                  icon={<Users className="h-5 w-5" />}
                  badge={`${totalSistemasSiemens} sistemas`}
                  onClick={() => handleNavigationChange({ level: 'cliente', selectedCliente: 'Siemens' })}
                  metrics={[
                    { label: 'Sistemas', value: totalSistemasSiemens },
                    { label: 'Equipamentos', value: totalEquipamentosSiemens }
                  ]}
                  gradient="bg-gradient-ocean"
                />
                <InteractiveCard
                  key="Modec"
                  title="Modec"
                  subtitle="FPSO Bacalhau"
                  icon={<Ship className="h-5 w-5" />}
                  badge={`${totalSistemasModec} sistemas`}
                  onClick={() => handleNavigationChange({ level: 'cliente', selectedCliente: 'Modec' })}
                  metrics={[
                    { label: 'Sistemas', value: totalSistemasModec },
                    { label: 'Equipamentos', value: totalEquipamentosModec }
                  ]}
                  gradient="bg-gradient-wave"
                />
              </div>
            </CardContent>
          </Card>
      </div>
    );
  };

  const renderCliente = () => {
    if (!navigation.selectedCliente) return null;

    let filteredSistemas;
    let totalSistemasCliente;
    let clienteTitle;

    if (navigation.selectedCliente === 'Siemens') {
      filteredSistemas = siemensSystemsData.filter((sistema) =>
        sistema.nome.toLowerCase().includes(searchTerms.sistemas.toLowerCase()) ||
        sistema.tipo.toLowerCase().includes(searchTerms.sistemas.toLowerCase())
      );
      totalSistemasCliente = siemensSystemsData.length;
      clienteTitle = "Sistemas - Siemens";
    } else if (navigation.selectedCliente === 'Modec') {
      filteredSistemas = modecSystemsData.filter((sistema) =>
        sistema.nome.toLowerCase().includes(searchTerms.sistemas.toLowerCase()) ||
        sistema.tipo.toLowerCase().includes(searchTerms.sistemas.toLowerCase())
      );
      totalSistemasCliente = modecSystemsData.length;
      clienteTitle = "Sistemas - Modec (FPSO Bacalhau)";
    } else {
      return null;
    }

    return (
      <Card className="shadow-card border-0">
        <CardHeader className="space-y-4">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            {clienteTitle} ({filteredSistemas.length}/{totalSistemasCliente})
          </CardTitle>
          <SearchBar
            placeholder="Pesquisar por sistema..."
            value={searchTerms.sistemas}
            onChange={(value) => setSearchTerms((prev) => ({ ...prev, sistemas: value }))}
          />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSistemas.map((sistema) => (
              <InteractiveCard
                key={`${navigation.selectedCliente}-${sistema.numero}`}
                title={`Sistema ${sistema.numero}`}
                subtitle={sistema.nome}
                icon={navigation.selectedCliente === 'Modec' ? <Anchor className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}
                badge={sistema.tipo}
                onClick={() =>
                  handleNavigationChange({
                    level: 'sistemaDetail',
                    selectedCliente: navigation.selectedCliente,
                    selectedSistema: sistema.nome,
                    selectedSystemData: sistema,
                  })
                }
                metrics={[
                  { label: 'Local', value: sistema.local },
                  { label: 'Equipamentos', value: sistema.equipamentos.length },
                ]}
                gradient={navigation.selectedCliente === 'Modec' ? "bg-gradient-ocean" : "bg-gradient-wave"}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderSystemDetail = () => {
    if (!navigation.selectedSystemData) return null;
    
    return <SystemDetail system={navigation.selectedSystemData} />;
  };

  const renderContent = () => {
    switch (navigation.level) {
      case 'overview':
        return renderOverview();
      case 'cliente':
        return renderCliente();
      case 'sistemaDetail':
        return renderSystemDetail();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-wave relative">
      {/* Hero background */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${maritimeHero})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <img src="/assets/supply-marine-hvac-logo.png" alt="Supply Marine" className="h-20 max-w-full object-contain" />
            </div>
          </div>
          
          <NavigationBreadcrumb
            items={getBreadcrumbItems()}
            onReset={resetNavigation}
          />
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  );
};