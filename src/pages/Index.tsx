
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FinancialSummary from '@/components/Dashboard/FinancialSummary';
import RecentTransactions from '@/components/Dashboard/RecentTransactions';
import FinancialChart from '@/components/Dashboard/FinancialChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CreditCard, DollarSign, Landmark, LayoutDashboard, PlusCircle, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  const quickActionButtons = [
    {
      label: 'Nova Venda',
      icon: <ShoppingCart className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    },
    {
      label: 'Nova Despesa',
      icon: <CreditCard className="h-5 w-5" />,
      color: 'bg-amber-100 text-amber-600 hover:bg-amber-200',
    },
    {
      label: 'Novo Cliente',
      icon: <User className="h-5 w-5" />,
      color: 'bg-violet-100 text-violet-600 hover:bg-violet-200',
    },
    {
      label: 'Nova Transferência',
      icon: <Landmark className="h-5 w-5" />,
      color: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, veja seu resumo financeiro</p>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          {quickActionButtons.map((button) => (
            <Button
              key={button.label}
              variant="ghost"
              className={cn(
                "flex gap-2 rounded-lg transition-all hover:scale-105",
                button.color
              )}
            >
              {button.icon}
              <span className="hidden md:inline">{button.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="resumo" className="space-y-6">
        <TabsList className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border">
          <TabsTrigger value="resumo" className="flex gap-1.5">
            <LayoutDashboard className="h-4 w-4" />
            <span>Resumo</span>
          </TabsTrigger>
          <TabsTrigger value="vendas" className="flex gap-1.5">
            <ShoppingCart className="h-4 w-4" />
            <span>Vendas</span>
          </TabsTrigger>
          <TabsTrigger value="financeiro" className="flex gap-1.5">
            <DollarSign className="h-4 w-4" />
            <span>Financeiro</span>
          </TabsTrigger>
          <TabsTrigger value="agenda" className="flex gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>Agenda</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="resumo" className="space-y-6">
          <FinancialSummary />
          
          <div className="grid gap-6 md:grid-cols-2">
            <FinancialChart />
            <RecentTransactions />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-all duration-300 animate-fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Clientes Recentes</CardTitle>
                <CardDescription>
                  10 novos clientes este mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-2 p-2 hover:bg-secondary/60 rounded-lg"
                      style={{
                        animationDelay: `${item * 100 + 500}ms`,
                        opacity: 0,
                        animation: 'fadeIn 0.5s forwards'
                      }}
                    >
                      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Cliente {item}</p>
                        <p className="text-xs text-muted-foreground">cliente{item}@exemplo.com</p>
                      </div>
                      <div className="text-sm font-medium">
                        R$ {(Math.random() * 5000).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-3 text-primary">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Ver todos os clientes
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 animate-fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contas a Receber</CardTitle>
                <CardDescription>
                  5 contas pendentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center justify-between p-2 hover:bg-secondary/60 rounded-lg"
                      style={{
                        animationDelay: `${item * 100 + 500}ms`,
                        opacity: 0,
                        animation: 'fadeIn 0.5s forwards'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Fatura #{1000 + item}</p>
                          <p className="text-xs text-muted-foreground">Vence em {item * 2} dias</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        R$ {(Math.random() * 2000 + 1000).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-3 text-primary">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Ver todas as contas
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 animate-fade-in md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Próximos Eventos</CardTitle>
                <CardDescription>
                  3 eventos agendados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-3 p-2 hover:bg-secondary/60 rounded-lg"
                      style={{
                        animationDelay: `${item * 100 + 500}ms`,
                        opacity: 0,
                        animation: 'fadeIn 0.5s forwards'
                      }}
                    >
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Reunião com Cliente {item}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(Date.now() + item * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')} às {10 + item}:00
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-3 text-primary">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Ver agenda completa
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="vendas">
          <div className="py-10 text-center">
            <h3 className="text-lg font-medium">Módulo de Vendas</h3>
            <p className="text-muted-foreground">Em construção...</p>
          </div>
        </TabsContent>
        
        <TabsContent value="financeiro">
          <div className="py-10 text-center">
            <h3 className="text-lg font-medium">Módulo Financeiro</h3>
            <p className="text-muted-foreground">Em construção...</p>
          </div>
        </TabsContent>
        
        <TabsContent value="agenda">
          <div className="py-10 text-center">
            <h3 className="text-lg font-medium">Agenda</h3>
            <p className="text-muted-foreground">Em construção...</p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Index;
