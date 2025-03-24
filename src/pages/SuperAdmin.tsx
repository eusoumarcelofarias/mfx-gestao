
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, CreditCard, Settings, Plus, BarChart3, Globe } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SuperAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState("empresas");
  const [isAddingCompany, setIsAddingCompany] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: '',
    plan: 'Starter',
    email: '',
  });

  // Check if user is superadmin, if not redirect
  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "superadmin") {
      window.location.href = "/dashboard";
    }
  }, []);

  // Mock data
  const mockCompanies = [
    { id: '1', name: 'Tech Solutions', plan: 'Enterprise', users: 12, status: 'active', since: '12/01/2023', revenue: 'R$ 1.450,00' },
    { id: '2', name: 'Marketing Pro', plan: 'Business', users: 5, status: 'active', since: '05/03/2023', revenue: 'R$ 850,00' },
    { id: '3', name: 'Design Studio', plan: 'Starter', users: 3, status: 'trial', since: '28/04/2023', revenue: 'R$ 0,00' },
    { id: '4', name: 'Finance Group', plan: 'Business', users: 8, status: 'active', since: '15/12/2022', revenue: 'R$ 950,00' },
    { id: '5', name: 'Health Services', plan: 'Enterprise', users: 20, status: 'inactive', since: '10/07/2022', revenue: 'R$ 2.800,00' },
  ];

  const mockUsers = [
    { id: '1', name: 'João Silva', email: 'joao@techsolutions.com', company: 'Tech Solutions', role: 'Admin', lastLogin: '2 horas atrás' },
    { id: '2', name: 'Maria Santos', email: 'maria@marketingpro.com', company: 'Marketing Pro', role: 'Admin', lastLogin: '5 horas atrás' },
    { id: '3', name: 'Carlos Lima', email: 'carlos@designstudio.com', company: 'Design Studio', role: 'Admin', lastLogin: '1 dia atrás' },
    { id: '4', name: 'Ana Ferreira', email: 'ana@financegroup.com', company: 'Finance Group', role: 'Admin', lastLogin: '3 dias atrás' },
    { id: '5', name: 'Pedro Oliveira', email: 'pedro@healthservices.com', company: 'Health Services', role: 'Admin', lastLogin: '1 semana atrás' },
  ];

  const mockPlans = [
    { id: '1', name: 'Starter', price: 'R$ 99,00', features: ['3 usuários', 'Recursos básicos', 'Suporte por email'], users: 3 },
    { id: '2', name: 'Business', price: 'R$ 199,00', features: ['10 usuários', 'Recursos avançados', 'Suporte prioritário'], users: 10 },
    { id: '3', name: 'Enterprise', price: 'R$ 399,00', features: ['Usuários ilimitados', 'Recursos customizados', 'Suporte 24/7'], users: 999 },
  ];

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'trial': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const handleAddCompany = () => {
    if (!newCompany.name || !newCompany.email) {
      toast({
        title: "Erro de validação",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would create a new company in the database
    toast({
      title: "Empresa adicionada",
      description: `${newCompany.name} foi adicionada com sucesso.`,
    });

    setIsAddingCompany(false);
    setNewCompany({ name: '', plan: 'Starter', email: '' });
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Painel Super Admin</h1>
        <Button onClick={() => setIsAddingCompany(true)}>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Empresa
        </Button>
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
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <p className="text-xs text-muted-foreground">
              +4% do último mês
            </p>
          </CardContent>
        </Card>
      </div>

      {isAddingCompany ? (
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Nova Empresa</CardTitle>
            <CardDescription>
              Preencha os detalhes da nova empresa para criar a conta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nome da Empresa *</Label>
                  <Input 
                    id="company-name" 
                    value={newCompany.name}
                    onChange={(e) => setNewCompany({...newCompany, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email de Contato *</Label>
                  <Input 
                    id="company-email" 
                    type="email"
                    value={newCompany.email}
                    onChange={(e) => setNewCompany({...newCompany, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-plan">Plano</Label>
                <select 
                  id="company-plan"
                  className="w-full px-3 py-2 border rounded-md"
                  value={newCompany.plan}
                  onChange={(e) => setNewCompany({...newCompany, plan: e.target.value})}
                >
                  <option value="Starter">Starter</option>
                  <option value="Business">Business</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setIsAddingCompany(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCompany}>
                  Adicionar Empresa
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
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
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Plano</TableHead>
                        <TableHead>Usuários</TableHead>
                        <TableHead>Desde</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Receita</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockCompanies.map((company) => (
                        <TableRow key={company.id}>
                          <TableCell className="font-medium">{company.name}</TableCell>
                          <TableCell>{company.plan}</TableCell>
                          <TableCell>{company.users}</TableCell>
                          <TableCell>{company.since}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(company.status)}`}>
                              {company.status === 'active' ? 'Ativo' : 
                               company.status === 'trial' ? 'Trial' : 'Inativo'}
                            </span>
                          </TableCell>
                          <TableCell>{company.revenue}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Gerenciar</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Empresa</TableHead>
                        <TableHead>Função</TableHead>
                        <TableHead>Último Login</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.company}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Gerenciar</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mockPlans.map((plan) => (
                    <Card key={plan.id} className="border-2 hover:border-primary transition-colors">
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription className="text-2xl font-bold">{plan.price}<span className="text-sm font-normal">/mês</span></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <span className="mr-2 text-green-500">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Editar Plano</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Pagamentos</CardTitle>
                <CardDescription>
                  Visualize todos os pagamentos recebidos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aqui você pode ver todos os pagamentos recebidos e gerenciar faturas.
                </p>
                <Button>
                  Ver Relatório Completo
                </Button>
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
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Domínio & URLs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="site-url">URL do Site</Label>
                      <Input id="site-url" defaultValue="https://app.suasaas.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="logo-url">URL do Logo</Label>
                      <Input id="logo-url" defaultValue="https://app.suasaas.com/logo.png" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Configurações de Email</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smtp-server">Servidor SMTP</Label>
                      <Input id="smtp-server" defaultValue="smtp.provider.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="smtp-port">Porta SMTP</Label>
                      <Input id="smtp-port" defaultValue="587" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Integração de Pagamento</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stripe-key">Chave Stripe</Label>
                      <Input id="stripe-key" type="password" defaultValue="sk_test_****************************************" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="webhook-url">URL de Webhook</Label>
                      <Input id="webhook-url" defaultValue="https://app.suasaas.com/api/webhooks/stripe" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Salvar Configurações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default SuperAdmin;
