
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
  ChevronLeft,
  Building2
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
  
  // Get user role from localStorage
  const userRole = localStorage.getItem("userRole");
  const isSuperAdmin = userRole === "superadmin";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    toast({
      title: "Logout efetuado",
      description: "Você foi desconectado do sistema.",
    });
    // A página será recarregada e o usuário será redirecionado para o login pelo router
    window.location.href = '/login';
  };

  // Menu items for regular clients
  const clientMenuItems = [
    { 
      title: 'Dashboard', 
      url: '/dashboard',
      icon: LayoutDashboard,
      isActive: location.pathname === '/dashboard',
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
    }
  ];

  // Menu items for super admin
  const adminMenuItems = [
    { 
      title: 'Admin', 
      url: '/admin',
      icon: Building2,
      isActive: location.pathname.startsWith('/admin'),
    },
    { 
      title: 'Empresas', 
      url: '/admin?tab=empresas',
      icon: Building2,
      isActive: location.pathname.startsWith('/admin') && location.search.includes('tab=empresas'),
    },
    { 
      title: 'Usuários', 
      url: '/admin?tab=usuarios',
      icon: Users,
      isActive: location.pathname.startsWith('/admin') && location.search.includes('tab=usuarios'),
    },
    { 
      title: 'Planos', 
      url: '/admin?tab=planos',
      icon: CircleDollarSign,
      isActive: location.pathname.startsWith('/admin') && location.search.includes('tab=planos'),
    },
    { 
      title: 'Relatórios', 
      url: '/admin?tab=relatorios',
      icon: BarChart3,
      isActive: location.pathname.startsWith('/admin') && location.search.includes('tab=relatorios'),
    },
    { 
      title: 'Integrações', 
      url: '/admin?tab=integracoes',
      icon: Globe,
      isActive: location.pathname.startsWith('/admin') && location.search.includes('tab=integracoes'),
    }
  ];

  // Choose menu items based on user role
  const menuItems = isSuperAdmin ? adminMenuItems : clientMenuItems;

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
          <SidebarGroupLabel>{isSuperAdmin ? 'Administração' : 'Menu Principal'}</SidebarGroupLabel>
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
