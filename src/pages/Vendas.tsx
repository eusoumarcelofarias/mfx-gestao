
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, PlusCircle, Package, BarChart3, ShoppingCart, Users } from "lucide-react";

const Vendas = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Venda
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total de Vendas (Mês)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 24.598,00</div>
            <p className="text-xs text-muted-foreground mt-1">+12% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Número de Pedidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground mt-1">+5% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 193,68</div>
            <p className="text-xs text-muted-foreground mt-1">+7% em relação ao mês anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground mt-1">+0.5% em relação ao mês anterior</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pedidos" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
          <TabsTrigger value="produtos">Produtos</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pedidos" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
            <div className="flex gap-2 flex-1">
              <Input placeholder="Buscar pedidos..." className="max-w-sm" />
              <Button variant="outline">Buscar</Button>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="todos">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os Status</SelectItem>
                  <SelectItem value="concluido">Concluído</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="recentes">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recentes">Mais Recentes</SelectItem>
                  <SelectItem value="antigos">Mais Antigos</SelectItem>
                  <SelectItem value="valor-maior">Maior Valor</SelectItem>
                  <SelectItem value="valor-menor">Menor Valor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium">Pedido</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Cliente</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Valor</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <tr key={i} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">#PED-{1000 + i}</td>
                        <td className="p-4 align-middle">Cliente {i + 1}</td>
                        <td className="p-4 align-middle">{`${10 + i}/05/2023`}</td>
                        <td className="p-4 align-middle">R$ {(Math.random() * 1000).toFixed(2)}</td>
                        <td className="p-4 align-middle">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            i % 3 === 0 ? "bg-green-100 text-green-800" : 
                            i % 3 === 1 ? "bg-yellow-100 text-yellow-800" : 
                            "bg-red-100 text-red-800"
                          }`}>
                            {i % 3 === 0 ? "Concluído" : i % 3 === 1 ? "Pendente" : "Cancelado"}
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Ver</Button>
                            <Button variant="ghost" size="sm">Editar</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between py-4">
              <p className="text-sm text-muted-foreground">Mostrando 5 de 100 resultados</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Anterior</Button>
                <Button variant="outline" size="sm">Próximo</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="produtos" className="space-y-4">
          <div className="flex items-center p-8 text-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Package className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Gerenciamento de Produtos</h3>
              <p className="text-muted-foreground">Gerencie seu catálogo, estoque e preços.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clientes" className="space-y-4">
          <div className="flex items-center p-8 text-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <Users className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Base de Clientes</h3>
              <p className="text-muted-foreground">Gerencie seus clientes e histórico de compras.</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="relatorios" className="space-y-4">
          <div className="flex items-center p-8 text-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="h-10 w-10 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Relatórios de Vendas</h3>
              <p className="text-muted-foreground">Analise o desempenho das suas vendas.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Vendas;
