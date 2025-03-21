
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  BarChart3, 
  Bell, 
  Globe, 
  Settings, 
  LogOut,
  ChevronLeft
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar
} from '@/components/ui/sidebar';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const AppSidebar = () => {
  const location = useLocation();
  const { toggleSidebar, state } = useSidebar();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logout efetuado",
      description: "Você foi desconectado do sistema.",
    });
    // A página será recarregada e o usuário será redirecionado para o login pelo router
    window.location.href = '/login';
  };

  const menuItems = [
    { 
      title: 'Dashboard', 
      url: '/',
      icon: LayoutDashboard,
      isActive: location.pathname === '/',
    },
    { 
      title: 'Financeiro', 
      url: '/financeiro',
      icon: CircleDollarSign, 
      isActive: location.pathname.startsWith('/financeiro'),
    },
    { 
      title: 'Vendas', 
      url: '/vendas',
      icon: ShoppingCart,
      isActive: location.pathname.startsWith('/vendas'),
    },
    { 
      title: 'Clientes', 
      url: '/clientes',
      icon: Users,
      isActive: location.pathname.startsWith('/clientes'),
    },
    { 
      title: 'Produtos', 
      url: '/produtos',
      icon: Package,
      isActive: location.pathname.startsWith('/produtos'),
    },
    { 
      title: 'Relatórios', 
      url: '/relatorios',
      icon: BarChart3,
      isActive: location.pathname.startsWith('/relatorios'),
    },
    { 
      title: 'Notificações', 
      url: '/notificacoes',
      icon: Bell,
      isActive: location.pathname.startsWith('/notificacoes'),
    },
    { 
      title: 'Webhooks', 
      url: '/webhooks',
      icon: Globe,
      isActive: location.pathname.startsWith('/webhooks'),
    }
  ];

  const settingsItems = [
    { 
      title: 'Configurações', 
      url: '/configuracoes',
      icon: Settings,
      isActive: location.pathname.startsWith('/configuracoes'),
    },
    { 
      title: 'Sair', 
      url: '#',
      icon: LogOut,
      onClick: handleLogout,
      isActive: false,
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex h-16 items-center border-b px-4">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-lg font-semibold">SSF</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="h-8 w-8"
            aria-label={state === "expanded" ? "Minimizar menu" : "Expandir menu"}
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${state === "collapsed" ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={item.isActive}
                    tooltip={item.title}
                    asChild
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    isActive={item.isActive}
                    tooltip={item.title}
                    asChild
                  >
                    {item.onClick ? (
                      <button onClick={item.onClick} className="w-full flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </button>
                    ) : (
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
