
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, TrendingDown, Eye } from 'lucide-react';

const AudienceDashboard = () => {
  const audiences = [
    {
      name: "Young Professionals BR",
      size: "2.4M",
      engagement: "8.7%",
      change: "+23%",
      trend: "up",
      performance: "high"
    },
    {
      name: "E-commerce Shoppers MX",
      size: "1.8M", 
      engagement: "6.2%",
      change: "+15%",
      trend: "up",
      performance: "medium"
    },
    {
      name: "Tech Early Adopters AR",
      size: "950K",
      engagement: "4.1%", 
      change: "-5%",
      trend: "down",
      performance: "low"
    },
    {
      name: "Health & Wellness CL",
      size: "1.2M",
      engagement: "7.8%",
      change: "+18%", 
      trend: "up",
      performance: "high"
    }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-slate-900">Audience Segments</h3>
      </div>

      <Card className="border-0 minimal-shadow mb-4">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-slate-900">6.35M</div>
            <div className="text-sm text-slate-500">Total Reach</div>
            <div className="flex items-center justify-center space-x-1 text-blue-600">
              <Eye className="w-3 h-3" />
              <span className="text-xs font-medium">12 active segments</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {audiences.map((audience, index) => (
        <Card key={index} className="border-0 minimal-shadow hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900 text-sm">{audience.name}</h4>
                <Badge className={`text-xs ${getPerformanceColor(audience.performance)}`}>
                  {audience.performance}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Audience Size</span>
                <span className="font-semibold text-slate-900">{audience.size}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Engagement Rate</span>
                <span className="font-medium text-slate-700">{audience.engagement}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Growth</span>
                <div className={`flex items-center space-x-1 ${
                  audience.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {audience.trend === 'up' ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  <span className="text-xs font-medium">{audience.change}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AudienceDashboard;
