
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  FileText, 
  CreditCard, 
  Landmark, 
  CircleDollarSign,
  Wallet,
  Receipt,
  PlusCircle
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FinancialChart from '@/components/Dashboard/FinancialChart';

const Financeiro = () => {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState<'receitas' | 'despesas' | 'fluxoCaixa' | 'contasReceber' | 'contasPagar'>('receitas');
  
  // Dados de exemplo para transações
  const receitas = [
    { id: 1, descricao: 'Venda de Produto X', data: '10/07/2023', categoria: 'Vendas', valor: 'R$ 2.500,00', status: 'Recebido' },
    { id: 2, descricao: 'Consultoria Empresa Y', data: '05/07/2023', categoria: 'Serviços', valor: 'R$ 3.800,00', status: 'Recebido' },
    { id: 3, descricao: 'Venda de Produto Z', data: '15/07/2023', categoria: 'Vendas', valor: 'R$ 1.200,00', status: 'Pendente' },
    { id: 4, descricao: 'Assinatura Premium', data: '20/07/2023', categoria: 'Assinaturas', valor: 'R$ 4.200,00', status: 'Pendente' },
    { id: 5, descricao: 'Consultoria Empresa W', data: '25/07/2023', categoria: 'Serviços', valor: 'R$ 2.800,00', status: 'Recebido' },
  ];
  
  const despesas = [
    { id: 1, descricao: 'Aluguel Escritório', data: '05/07/2023', categoria: 'Instalações', valor: 'R$ 3.500,00', status: 'Pago' },
    { id: 2, descricao: 'Salários', data: '10/07/2023', categoria: 'Pessoal', valor: 'R$ 12.000,00', status: 'Pago' },
    { id: 3, descricao: 'Software SaaS', data: '15/07/2023', categoria: 'Tecnologia', valor: 'R$ 800,00', status: 'Pendente' },
    { id: 4, descricao: 'Marketing Digital', data: '20/07/2023', categoria: 'Marketing', valor: 'R$ 1.500,00', status: 'Pendente' },
    { id: 5, descricao: 'Conta de Energia', data: '25/07/2023', categoria: 'Utilidades', valor: 'R$ 450,00', status: 'Pago' },
  ];
  
  const contasReceber = [
    { id: 1, cliente: 'Empresa A', descricao: 'Fatura #1001', emissao: '01/07/2023', vencimento: '15/07/2023', valor: 'R$ 5.800,00', status: 'Em aberto' },
    { id: 2, cliente: 'Empresa B', descricao: 'Fatura #1002', emissao: '05/07/2023', vencimento: '20/07/2023', valor: 'R$ 3.200,00', status: 'Em aberto' },
    { id: 3, cliente: 'Empresa C', descricao: 'Fatura #1003', emissao: '10/07/2023', vencimento: '25/07/2023', valor: 'R$ 2.100,00', status: 'Atrasado' },
    { id: 4, cliente: 'Empresa D', descricao: 'Fatura #1004', emissao: '15/07/2023', vencimento: '30/07/2023', valor: 'R$ 7.500,00', status: 'Em aberto' },
  ];
  
  const contasPagar = [
    { id: 1, fornecedor: 'Fornecedor X', descricao: 'Fatura #2001', emissao: '02/07/2023', vencimento: '16/07/2023', valor: 'R$ 2.300,00', status: 'Em aberto' },
    { id: 2, fornecedor: 'Fornecedor Y', descricao: 'Fatura #2002', emissao: '07/07/2023', vencimento: '21/07/2023', valor: 'R$ 1.800,00', status: 'Pago' },
    { id: 3, fornecedor: 'Fornecedor Z', descricao: 'Fatura #2003', emissao: '12/07/2023', vencimento: '26/07/2023', valor: 'R$ 4.500,00', status: 'Em aberto' },
    { id: 4, fornecedor: 'Fornecedor W', descricao: 'Fatura #2004', emissao: '17/07/2023', vencimento: '31/07/2023', valor: 'R$ 950,00', status: 'Atrasado' },
  ];
  
  // Cards de resumo
  const resumoCards = [
    { 
      title: 'Receitas do Mês',
      value: 'R$ 32.500,00',
      change: '+15,3%',
      changeType: 'positive',
      icon: <TrendingUp className="h-4 w-4 text-emerald-500" />,
      background: 'bg-emerald-50',
      color: 'text-emerald-700',
      iconBg: 'bg-emerald-100'
    },
    { 
      title: 'Despesas do Mês',
      value: 'R$ 18.250,00',
      change: '-3,5%',
      changeType: 'negative',
      icon: <TrendingDown className="h-4 w-4 text-rose-500" />,
      background: 'bg-rose-50',
      color: 'text-rose-700',
      iconBg: 'bg-rose-100'
    },
    { 
      title: 'Saldo em Caixa',
      value: 'R$ 54.325,80',
      change: '+7,2%',
      changeType: 'positive',
      icon: <Wallet className="h-4 w-4 text-blue-500" />,
      background: 'bg-blue-50',
      color: 'text-blue-700',
      iconBg: 'bg-blue-100'
    },
    { 
      title: 'Contas a Receber',
      value: 'R$ 18.600,00',
      change: '',
      changeType: 'neutral',
      icon: <Receipt className="h-4 w-4 text-amber-500" />,
      background: 'bg-amber-50',
      color: 'text-amber-700',
      iconBg: 'bg-amber-100'
    },
  ];

  // Ações rápidas
  const quickActions = [
    { icon: <CreditCard size={18} />, label: 'Nova Despesa', color: 'bg-rose-100 text-rose-700' },
    { icon: <CircleDollarSign size={18} />, label: 'Nova Receita', color: 'bg-emerald-100 text-emerald-700' },
    { icon: <Landmark size={18} />, label: 'Transferência', color: 'bg-blue-100 text-blue-700' },
    { icon: <FileText size={18} />, label: 'Relatório', color: 'bg-violet-100 text-violet-700' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Financeiro</h1>
          <p className="text-muted-foreground">Gerencie receitas, despesas e fluxo de caixa</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`flex items-center gap-2 ${action.color} rounded-lg hover:opacity-80`}
            >
              {action.icon}
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {resumoCards.map((card, index) => (
          <Card key={index} className={`border hover:shadow-md transition-all ${card.background} overflow-hidden`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <div className={`p-1.5 rounded-full ${card.iconBg}`}>
                  {card.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              {card.change && (
                <div className="flex items-center mt-1">
                  {card.changeType === 'positive' ? 
                    <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 text-rose-500 mr-1" />
                  }
                  <p className={`text-xs font-medium ${
                    card.changeType === 'positive' ? 'text-emerald-500' : 'text-rose-500'
                  }`}>
                    {card.change} comparado ao mês anterior
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-background border">
          <TabsTrigger value="receitas" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Receitas</span>
          </TabsTrigger>
          <TabsTrigger value="despesas" className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            <span>Despesas</span>
          </TabsTrigger>
          <TabsTrigger value="fluxoCaixa" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>Fluxo de Caixa</span>
          </TabsTrigger>
          <TabsTrigger value="contasReceber" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>A Receber</span>
          </TabsTrigger>
          <TabsTrigger value="contasPagar" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>A Pagar</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="receitas">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex justify-between items-center">
                <CardTitle>Receitas</CardTitle>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nova Receita
                </Button>
              </div>
              <CardDescription>
                Gerencie todas as entradas financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="filtro-data">Data</Label>
                    <Input id="filtro-data" type="month" placeholder="Selecione o mês" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-categoria">Categoria</Label>
                    <select id="filtro-categoria" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todas as categorias</option>
                      <option value="vendas">Vendas</option>
                      <option value="servicos">Serviços</option>
                      <option value="assinaturas">Assinaturas</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-status">Status</Label>
                    <select id="filtro-status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todos os status</option>
                      <option value="recebido">Recebido</option>
                      <option value="pendente">Pendente</option>
                    </select>
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {receitas.map((receita) => (
                    <TableRow key={receita.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{receita.descricao}</TableCell>
                      <TableCell>{receita.data}</TableCell>
                      <TableCell>{receita.categoria}</TableCell>
                      <TableCell className="text-right font-semibold">{receita.valor}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          receita.status === 'Recebido' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {receita.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="despesas">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex justify-between items-center">
                <CardTitle>Despesas</CardTitle>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nova Despesa
                </Button>
              </div>
              <CardDescription>
                Gerencie todas as saídas financeiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="filtro-data-despesa">Data</Label>
                    <Input id="filtro-data-despesa" type="month" placeholder="Selecione o mês" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-categoria-despesa">Categoria</Label>
                    <select id="filtro-categoria-despesa" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todas as categorias</option>
                      <option value="instalacoes">Instalações</option>
                      <option value="pessoal">Pessoal</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="marketing">Marketing</option>
                      <option value="utilidades">Utilidades</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-status-despesa">Status</Label>
                    <select id="filtro-status-despesa" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todos os status</option>
                      <option value="pago">Pago</option>
                      <option value="pendente">Pendente</option>
                    </select>
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {despesas.map((despesa) => (
                    <TableRow key={despesa.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{despesa.descricao}</TableCell>
                      <TableCell>{despesa.data}</TableCell>
                      <TableCell>{despesa.categoria}</TableCell>
                      <TableCell className="text-right font-semibold">{despesa.valor}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          despesa.status === 'Pago' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {despesa.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fluxoCaixa">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex justify-between items-center">
                <CardTitle>Fluxo de Caixa</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </div>
              <CardDescription>
                Visualize o fluxo de entrada e saída de recursos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-80">
                <FinancialChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contasReceber">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex justify-between items-center">
                <CardTitle>Contas a Receber</CardTitle>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nova Conta
                </Button>
              </div>
              <CardDescription>
                Gerencie faturas e pagamentos pendentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="filtro-vencimento">Vencimento</Label>
                    <Input id="filtro-vencimento" type="month" placeholder="Selecione o mês" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-cliente">Cliente</Label>
                    <Input id="filtro-cliente" type="text" placeholder="Filtrar por cliente" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-status-receber">Status</Label>
                    <select id="filtro-status-receber" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todos os status</option>
                      <option value="em-aberto">Em aberto</option>
                      <option value="atrasado">Atrasado</option>
                      <option value="pago">Pago</option>
                    </select>
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Emissão</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contasReceber.map((conta) => (
                    <TableRow key={conta.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{conta.cliente}</TableCell>
                      <TableCell>{conta.descricao}</TableCell>
                      <TableCell>{conta.emissao}</TableCell>
                      <TableCell>{conta.vencimento}</TableCell>
                      <TableCell className="text-right font-semibold">{conta.valor}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          conta.status === 'Em aberto' 
                            ? 'bg-blue-100 text-blue-700' 
                            : conta.status === 'Atrasado'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {conta.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contasPagar">
          <Card>
            <CardHeader className="pb-1">
              <div className="flex justify-between items-center">
                <CardTitle>Contas a Pagar</CardTitle>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nova Conta
                </Button>
              </div>
              <CardDescription>
                Gerencie pagamentos a fornecedores e parceiros
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                  <div className="space-y-2">
                    <Label htmlFor="filtro-vencimento-pagar">Vencimento</Label>
                    <Input id="filtro-vencimento-pagar" type="month" placeholder="Selecione o mês" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-fornecedor">Fornecedor</Label>
                    <Input id="filtro-fornecedor" type="text" placeholder="Filtrar por fornecedor" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filtro-status-pagar">Status</Label>
                    <select id="filtro-status-pagar" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium">
                      <option value="">Todos os status</option>
                      <option value="em-aberto">Em aberto</option>
                      <option value="atrasado">Atrasado</option>
                      <option value="pago">Pago</option>
                    </select>
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Emissão</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contasPagar.map((conta) => (
                    <TableRow key={conta.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{conta.fornecedor}</TableCell>
                      <TableCell>{conta.descricao}</TableCell>
                      <TableCell>{conta.emissao}</TableCell>
                      <TableCell>{conta.vencimento}</TableCell>
                      <TableCell className="text-right font-semibold">{conta.valor}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          conta.status === 'Em aberto' 
                            ? 'bg-blue-100 text-blue-700' 
                            : conta.status === 'Atrasado'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {conta.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Financeiro;
