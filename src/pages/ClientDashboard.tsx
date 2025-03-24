
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, CreditCard, BarChart3, TrendingUp, Users, Package, ShoppingBag } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClientDashboard: React.FC = () => {
  // Mock data for client company dashboard
  const companyName = localStorage.getItem("userEmail")?.split('@')[0] || "Empresa";
  const stats = {
    revenue: "R$ 45.750,00",
    growth: "+12% mês",
    expenses: "R$ 23.456,00",
    expensesGrowth: "-3% mês",
    customers: "248",
    customerGrowth: "+5% mês",
    products: "36",
    orders: "154",
    orderGrowth: "+8% mês"
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard - {companyName}</h1>
        <Button>Gerar Relatório</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue}</div>
            <p className="text-xs text-muted-foreground">
              {stats.growth}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.expenses}</div>
            <p className="text-xs text-muted-foreground">
              {stats.expensesGrowth}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.customers}</div>
            <p className="text-xs text-muted-foreground">
              {stats.customerGrowth}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.orders}</div>
            <p className="text-xs text-muted-foreground">
              {stats.orderGrowth}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="vendas">Vendas</TabsTrigger>
          <TabsTrigger value="produtos">Produtos</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho da Empresa</CardTitle>
              <CardDescription>
                Visão geral dos indicadores de desempenho da sua empresa nos últimos 30 dias.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-96">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="mx-auto h-12 w-12" />
                  <p className="mt-2">Gráfico de desempenho será exibido aqui</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>
                  Os produtos com maior volume de vendas no período.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Produto {item}</span>
                      </div>
                      <span>{Math.floor(Math.random() * 100) + 10} unidades</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Clientes Principais</CardTitle>
                <CardDescription>
                  Os clientes que mais geraram receita no período.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Cliente {item}</span>
                      </div>
                      <span>R$ {Math.floor(Math.random() * 10000) + 1000},00</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="vendas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Vendas</CardTitle>
              <CardDescription>
                Detalhe das vendas por período e canal.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conteúdo detalhado de vendas será implementado aqui.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="produtos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Catálogo de Produtos</CardTitle>
              <CardDescription>
                Gerenciamento de produtos e estoque.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conteúdo detalhado de produtos será implementado aqui.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="financeiro" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatório Financeiro</CardTitle>
              <CardDescription>
                Resumo de todas as transações financeiras.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conteúdo detalhado financeiro será implementado aqui.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
