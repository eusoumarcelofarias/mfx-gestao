
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, CreditCard, Settings } from "lucide-react";
import { Button } from '@/components/ui/button';

const SuperAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState("empresas");

  // Mock data
  const mockCompanies = [
    { id: '1', name: 'Tech Solutions', plan: 'Enterprise', users: 12, status: 'active' },
    { id: '2', name: 'Marketing Pro', plan: 'Business', users: 5, status: 'active' },
    { id: '3', name: 'Design Studio', plan: 'Starter', users: 3, status: 'trial' },
    { id: '4', name: 'Finance Group', plan: 'Business', users: 8, status: 'active' },
    { id: '5', name: 'Health Services', plan: 'Enterprise', users: 20, status: 'inactive' },
  ];

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'trial': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Painel Super Admin</h1>
        <Button>Adicionar Empresa</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Empresas</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCompanies.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 empresas este mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">
              +8 usuários este mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 7.600</div>
            <p className="text-xs text-muted-foreground">
              +12% do último mês
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <p className="text-xs text-muted-foreground">
              +4% do último mês
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="empresas">Empresas</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="planos">Planos e Pagamentos</TabsTrigger>
          <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="empresas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Empresas</CardTitle>
              <CardDescription>
                Visualize e gerencie todas as empresas no sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left">Empresa</th>
                        <th className="py-3 px-4 text-left">Plano</th>
                        <th className="py-3 px-4 text-left">Usuários</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCompanies.map((company) => (
                        <tr key={company.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">{company.name}</td>
                          <td className="py-3 px-4">{company.plan}</td>
                          <td className="py-3 px-4">{company.users}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(company.status)}`}>
                              {company.status === 'active' ? 'Ativo' : 
                               company.status === 'trial' ? 'Trial' : 'Inativo'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">Gerenciar</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usuarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Usuários</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os usuários no sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementação do gerenciamento de usuários será adicionada em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="planos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planos e Pagamentos</CardTitle>
              <CardDescription>
                Configure planos de assinatura e visualize pagamentos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementação de planos e pagamentos será adicionada em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="configuracoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>
                Configure as opções globais do sistema.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implementação de configurações será adicionada em breve.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SuperAdmin;
