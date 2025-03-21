
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CreditCard, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: 'TX_123456',
      name: 'Consultoria Estratégica',
      date: '15/07/2023',
      amount: 'R$ 3.450,00',
      status: 'Aprovado',
      statusColor: 'bg-emerald-500',
      icon: <DollarSign className="h-4 w-4" />,
      iconColor: 'bg-emerald-100 text-emerald-700',
      avatarFallback: 'JD',
    },
    {
      id: 'TX_123455',
      name: 'Plano de Marketing',
      date: '14/07/2023',
      amount: 'R$ 2.120,50',
      status: 'Processando',
      statusColor: 'bg-amber-500',
      icon: <CreditCard className="h-4 w-4" />,
      iconColor: 'bg-amber-100 text-amber-700',
      avatarFallback: 'MB',
    },
    {
      id: 'TX_123454',
      name: 'Treinamento de Equipe',
      date: '13/07/2023',
      amount: 'R$ 1.850,00',
      status: 'Aprovado',
      statusColor: 'bg-emerald-500',
      icon: <Users className="h-4 w-4" />,
      iconColor: 'bg-blue-100 text-blue-700',
      avatarFallback: 'CS',
    },
    {
      id: 'TX_123453',
      name: 'Licença de Software',
      date: '12/07/2023',
      amount: 'R$ 899,00',
      status: 'Aprovado',
      statusColor: 'bg-emerald-500',
      icon: <ShoppingCart className="h-4 w-4" />,
      iconColor: 'bg-violet-100 text-violet-700',
      avatarFallback: 'RT',
    },
    {
      id: 'TX_123452',
      name: 'Material de Escritório',
      date: '11/07/2023',
      amount: 'R$ 458,75',
      status: 'Rejeitado',
      statusColor: 'bg-rose-500',
      icon: <ShoppingCart className="h-4 w-4" />,
      iconColor: 'bg-rose-100 text-rose-700',
      avatarFallback: 'AA',
    },
  ];

  return (
    <Card className="hover:shadow-md transition-all duration-300 animate-fade-in">
      <CardHeader className="px-6 pt-6 pb-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Transações Recentes</CardTitle>
          <a href="#" className="text-sm text-primary font-medium hover:underline">Ver todas</a>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-3 hover:bg-secondary/50 rounded-lg transition-all cursor-pointer"
              style={{
                animationDelay: `${index * 100 + 300}ms`,
                opacity: 0,
                animation: 'fadeIn 0.5s forwards'
              }}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full",
                  transaction.iconColor
                )}>
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">{transaction.amount}</span>
                <Badge 
                  variant="outline" 
                  className="rounded-full px-2 py-0.5 text-xs font-normal flex items-center gap-1"
                >
                  <span 
                    className={cn(
                      "w-1.5 h-1.5 rounded-full", 
                      transaction.statusColor
                    )}
                  />
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
