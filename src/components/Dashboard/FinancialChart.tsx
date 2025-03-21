
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FinancialChart: React.FC = () => {
  const [periodFilter, setPeriodFilter] = useState<'week' | 'month' | 'year'>('month');
  const [chartType, setChartType] = useState<'area' | 'bar'>('area');

  const monthlyData = [
    { name: 'Jan', receitas: 24500, despesas: 18200 },
    { name: 'Fev', receitas: 30000, despesas: 19800 },
    { name: 'Mar', receitas: 28000, despesas: 21200 },
    { name: 'Abr', receitas: 32000, despesas: 20500 },
    { name: 'Mai', receitas: 35500, despesas: 19800 },
    { name: 'Jun', receitas: 42000, despesas: 22500 },
    { name: 'Jul', receitas: 48352, despesas: 23485 }
  ];

  const weeklyData = [
    { name: 'Seg', receitas: 8520, despesas: 4200 },
    { name: 'Ter', receitas: 9120, despesas: 4850 },
    { name: 'Qua', receitas: 7890, despesas: 3950 },
    { name: 'Qui', receitas: 8950, despesas: 5120 },
    { name: 'Sex', receitas: 10200, despesas: 4800 },
    { name: 'Sáb', receitas: 3200, despesas: 1200 },
    { name: 'Dom', receitas: 1800, despesas: 650 }
  ];

  const yearlyData = [
    { name: '2018', receitas: 185000, despesas: 142000 },
    { name: '2019', receitas: 234000, despesas: 189000 },
    { name: '2020', receitas: 251000, despesas: 195000 },
    { name: '2021', receitas: 290000, despesas: 210000 },
    { name: '2022', receitas: 385000, despesas: 245000 },
    { name: '2023', receitas: 425000, despesas: 280000 }
  ];

  const getDataByPeriod = () => {
    switch (periodFilter) {
      case 'week':
        return weeklyData;
      case 'year':
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const formatCurrency = (value: number) => {
    return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const chartData = getDataByPeriod();

  return (
    <Card className="hover:shadow-md transition-all duration-300 animate-fade-in">
      <CardHeader className="px-6 pt-6 pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <CardTitle className="text-xl">Visão Financeira</CardTitle>
          
          <div className="flex space-x-2 flex-wrap gap-2">
            <div className="bg-secondary rounded-lg p-1 flex">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setPeriodFilter('week')} 
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  periodFilter === 'week' ? "bg-white shadow-sm" : "hover:bg-white/50"
                )}
              >
                Semana
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setPeriodFilter('month')} 
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  periodFilter === 'month' ? "bg-white shadow-sm" : "hover:bg-white/50"
                )}
              >
                Mês
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setPeriodFilter('year')} 
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  periodFilter === 'year' ? "bg-white shadow-sm" : "hover:bg-white/50"
                )}
              >
                Ano
              </Button>
            </div>
            
            <div className="bg-secondary rounded-lg p-1 flex">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setChartType('area')} 
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  chartType === 'area' ? "bg-white shadow-sm" : "hover:bg-white/50"
                )}
              >
                Área
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setChartType('bar')} 
                className={cn(
                  "px-3 py-1 text-xs rounded-md",
                  chartType === 'bar' ? "bg-white shadow-sm" : "hover:bg-white/50"
                )}
              >
                Barras
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-6">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'area' ? (
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorReceitas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis 
                  tickFormatter={(value) => `R$${value / 1000}k`} 
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value)]}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ paddingTop: 15 }} />
                <Area
                  type="monotone"
                  dataKey="receitas"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorReceitas)"
                  name="Receitas"
                  animationDuration={1000}
                />
                <Area
                  type="monotone"
                  dataKey="despesas"
                  stroke="#ef4444"
                  fillOpacity={1}
                  fill="url(#colorDespesas)"
                  name="Despesas"
                  animationDuration={1000}
                />
              </AreaChart>
            ) : (
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis 
                  tickFormatter={(value) => `R$${value / 1000}k`} 
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value)]}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ paddingTop: 15 }} />
                <Bar 
                  dataKey="receitas" 
                  name="Receitas" 
                  fill="#3b82f6" 
                  animationDuration={1000}
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="despesas" 
                  name="Despesas" 
                  fill="#ef4444" 
                  animationDuration={1000}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialChart;
