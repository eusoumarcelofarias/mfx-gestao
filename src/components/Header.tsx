
import React, { useState, useEffect } from 'react';
import { Bell, ChevronDown, Search, Settings, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Atualizar hora a cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleNotifications = () => {
    toast({
      title: "Notificações",
      description: "Você não tem novas notificações.",
    });
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        scrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          
          <div className="flex flex-col">
            <h2 className="text-lg font-medium">Sistema Solar Financeiro</h2>
            <p className="text-xs text-muted-foreground hidden sm:block">
              {formatDate(currentTime)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-[180px] lg:max-w-[280px] hidden md:block animate-fade-in">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Pesquisar..."
              className="pl-9 py-2 text-sm rounded-full w-full bg-secondary border-none focus:ring-1 focus:ring-primary/40 transition-all"
            />
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNotifications}
            className="relative hover:bg-secondary/80 transition-all"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-secondary/80 transition-all"
          >
            <Settings className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 overflow-hidden rounded-full transition-all">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground hidden md:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 animate-slide-up">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
