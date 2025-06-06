
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, Target } from 'lucide-react';

const ROASDashboard = () => {
  const roasData = [
    {
      market: "Brazil",
      roas: "4.8",
      target: "4.5",
      change: "+15%",
      trend: "up",
      status: "exceeding"
    },
    {
      market: "Mexico", 
      roas: "3.2",
      target: "3.5",
      change: "-8%",
      trend: "down", 
      status: "below"
    },
    {
      market: "Argentina",
      roas: "2.9",
      target: "3.0",
      change: "+5%",
      trend: "up",
      status: "approaching"
    },
    {
      market: "Chile",
      roas: "3.7",
      target: "3.5", 
      change: "+12%",
      trend: "up",
      status: "exceeding"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exceeding': return 'bg-green-100 text-green-800';
      case 'approaching': return 'bg-yellow-100 text-yellow-800';
      case 'below': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <DollarSign className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-slate-900">ROAS by Market</h3>
      </div>

      <Card className="border-0 minimal-shadow mb-4">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-slate-900">3.9</div>
            <div className="text-sm text-slate-500">Average ROAS</div>
            <div className="flex items-center justify-center space-x-1 text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs font-medium">+11% vs last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {roasData.map((market, index) => (
        <Card key={index} className="border-0 minimal-shadow hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900">{market.market}</h4>
                <Badge className={`text-xs ${getStatusColor(market.status)}`}>
                  {market.status}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Current ROAS</span>
                <span className="text-xl font-semibold text-slate-900">{market.roas}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Target className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500">Target: {market.target}</span>
                </div>
                <div className={`flex items-center space-x-1 ${
                  market.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {market.trend === 'up' ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  <span className="text-xs font-medium">{market.change}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ROASDashboard;
