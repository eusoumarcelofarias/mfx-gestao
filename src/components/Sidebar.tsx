
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  BarChart3, 
  CircleDollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  Bell, 
  Globe, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { 
      icon: <LayoutDashboard size={20} />, 
      label: 'Dashboard', 
      path: '/',
      active: location.pathname === '/' 
    },
    { 
      icon: <CircleDollarSign size={20} />, 
      label: 'Financeiro', 
      path: '/financeiro',
      active: location.pathname.startsWith('/financeiro') 
    },
    { 
      icon: <ShoppingCart size={20} />, 
      label: 'Vendas', 
      path: '/vendas',
      active: location.pathname.startsWith('/vendas') 
    },
    { 
      icon: <Users size={20} />, 
      label: 'Clientes', 
      path: '/clientes',
      active: location.pathname.startsWith('/clientes') 
    },
    { 
      icon: <Package size={20} />, 
      label: 'Produtos', 
      path: '/produtos',
      active: location.pathname.startsWith('/produtos') 
    },
    { 
      icon: <BarChart3 size={20} />, 
      label: 'Relatórios', 
      path: '/relatorios',
      active: location.pathname.startsWith('/relatorios') 
    },
    { 
      icon: <Bell size={20} />, 
      label: 'Notificações', 
      path: '/notificacoes',
      active: location.pathname.startsWith('/notificacoes') 
    },
    { 
      icon: <Globe size={20} />, 
      label: 'Webhooks', 
      path: '/webhooks',
      active: location.pathname.startsWith('/webhooks') 
    }
  ];

  const settingsItems = [
    { 
      icon: <Settings size={20} />, 
      label: 'Configurações', 
      path: '/configuracoes',
      active: location.pathname.startsWith('/configuracoes') 
    },
    { 
      icon: <LogOut size={20} />, 
      label: 'Sair', 
      path: '/logout',
      active: false 
    }
  ];

  const renderMenuItem = (item: { icon: JSX.Element; label: string; path: string; active: boolean }) => {
    const { icon, label, path, active } = item;
    
    const menuItemContent = (
      <Link 
        to={path} 
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
          active 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-secondary text-foreground hover:text-foreground",
          !isOpen && "justify-center py-2 px-3"
        )}
      >
        <span>{icon}</span>
        {isOpen && <span className="animate-fade-in">{label}</span>}
      </Link>
    );
    
    if (!isOpen) {
      return (
        <TooltipProvider key={path}>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              {menuItemContent}
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-primary text-primary-foreground">
              {label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    
    return menuItemContent;
  };
  
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-50 h-full bg-white shadow-sm transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-16",
        isMobile && !isOpen && "-translate-x-full"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {isOpen && (
          <h2 className="text-lg font-semibold animate-fade-in">
            SSF
          </h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("ml-auto", isOpen && isMobile ? "rotate-180" : "")}
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </Button>
      </div>
      <div className="px-3 py-4 flex flex-col h-[calc(100vh-64px)] justify-between">
        <div className="space-y-3">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div key={item.path}>
                {renderMenuItem(item)}
              </div>
            ))}
          </nav>
        </div>
        <div className="space-y-3">
          <nav className="flex flex-col gap-1">
            {settingsItems.map((item) => (
              <div key={item.path}>
                {renderMenuItem(item)}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
