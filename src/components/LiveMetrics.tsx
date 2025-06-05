
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Zap } from 'lucide-react';

const LiveMetrics = () => {
  const metrics = [
    {
      title: "Campaign ROAS",
      value: "4.2",
      change: "+12%",
      trend: "up",
      status: "excellent",
      confidence: 94
    },
    {
      title: "Cost Per Lead",
      value: "$23.40",
      change: "-8%", 
      trend: "down",
      status: "good",
      confidence: 87
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "+5%",
      trend: "up", 
      status: "good",
      confidence: 91
    },
    {
      title: "Monthly Spend",
      value: "$87.2K",
      change: "+18%",
      trend: "up",
      status: "monitor",
      confidence: 96
    },
    {
      title: "Active Campaigns",
      value: "23",
      change: "0",
      trend: "stable",
      status: "stable",
      confidence: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'monitor': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'stable': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Live Performance</h3>
        
        {metrics.map((metric, index) => (
          <Card key={index} className="border-0 minimal-shadow">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{metric.title}</span>
                  <Badge className={`text-xs ${getStatusColor(metric.status)}`}>
                    {metric.confidence}%
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-slate-900">
                    {metric.value}
                  </span>
                  {metric.trend !== 'stable' && (
                    <div className={`flex items-center space-x-1 ${
                      metric.trend === 'up' ? 'text-emerald-600' : 'text-red-500'
                    }`}>
                      {metric.trend === 'up' ? 
                        <TrendingUp className="w-3 h-3" /> : 
                        <TrendingDown className="w-3 h-3" />
                      }
                      <span className="text-xs font-medium">{metric.change}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Market Intelligence</h3>
        
        <Card className="border-0 minimal-shadow">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-slate-700">Opportunity Alert</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brazil Q2 e-commerce spending up 23%. Recommend 40% budget shift to BR market within 48h.
              </p>
              <Badge className="text-xs bg-amber-100 text-amber-800 border-amber-200">
                High Impact
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 minimal-shadow">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Trend Analysis</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mobile conversion rates in Mexico up 15% this quarter. Mobile-first campaigns showing 2.3x better performance.
              </p>
              <Badge className="text-xs bg-blue-100 text-blue-800 border-blue-200">
                Trending
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveMetrics;
