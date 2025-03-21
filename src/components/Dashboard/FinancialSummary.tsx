
import React from 'react';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const FinancialSummary: React.FC = () => {
  const summaryData = [
    {
      title: 'Receitas',
      value: 'R$ 48.352,79',
      change: '+12,5%',
      changeType: 'positive',
      icon: <ArrowUpIcon className="h-4 w-4 text-emerald-500" />,
      background: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconBackground: 'bg-emerald-100'
    },
    {
      title: 'Despesas',
      value: 'R$ 23.485,32',
      change: '+4,3%',
      changeType: 'negative',
      icon: <ArrowDownIcon className="h-4 w-4 text-rose-500" />,
      background: 'bg-gradient-to-br from-rose-50 to-rose-100',
      iconBackground: 'bg-rose-100'
    },
    {
      title: 'Lucro',
      value: 'R$ 24.867,47',
      change: '+18,2%',
      changeType: 'positive',
      icon: <ArrowRightIcon className="h-4 w-4 text-blue-500" />,
      background: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconBackground: 'bg-blue-100'
    },
    {
      title: 'Vendas',
      value: '357',
      change: '+8,7%',
      changeType: 'positive',
      icon: <ArrowUpIcon className="h-4 w-4 text-violet-500" />,
      background: 'bg-gradient-to-br from-violet-50 to-violet-100',
      iconBackground: 'bg-violet-100'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item, index) => (
        <Card 
          key={item.title}
          className={cn(
            "overflow-hidden border hover:shadow-md transition-all duration-300 card-transition",
          )}
          style={{
            animationDelay: `${index * 100}ms`,
            opacity: 0,
            animation: 'fadeIn 0.5s forwards'
          }}
        >
          <div className={cn("absolute inset-0 opacity-30", item.background)}></div>
          <CardHeader className="p-4 pb-0 flex justify-between items-start relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <div className={cn("p-1.5 rounded-full", item.iconBackground)}>
              {item.icon}
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-2 relative z-10">
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="flex items-center mt-1">
              {item.changeType === 'positive' ? (
                <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-rose-500 mr-1" />
              )}
              <p className={cn(
                "text-xs font-medium",
                item.changeType === 'positive' ? "text-emerald-500" : "text-rose-500"
              )}>
                {item.change} comparado ao mês anterior
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FinancialSummary;
