
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Play, Pause, BarChart3 } from 'lucide-react';

const CampaignDashboard = () => {
  const campaigns = [
    {
      name: "Brazil Mobile Q2",
      status: "active",
      spend: "$12.4K",
      roas: "4.8",
      change: "+23%",
      trend: "up",
      priority: "high"
    },
    {
      name: "Mexico Video Series",
      status: "active", 
      spend: "$8.7K",
      roas: "3.2",
      change: "+12%",
      trend: "up",
      priority: "medium"
    },
    {
      name: "Argentina Retargeting",
      status: "paused",
      spend: "$5.1K", 
      roas: "2.1",
      change: "-5%",
      trend: "down",
      priority: "low"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <BarChart3 className="w-5 h-5 text-indigo-600" />
        <h3 className="font-semibold text-slate-900">Active Campaigns</h3>
      </div>

      {campaigns.map((campaign, index) => (
        <Card key={index} className="border-0 minimal-shadow hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900 text-sm">{campaign.name}</h4>
                <div className="flex items-center space-x-1">
                  {campaign.status === 'active' ? 
                    <Play className="w-3 h-3 text-green-600" /> : 
                    <Pause className="w-3 h-3 text-gray-500" />
                  }
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">ROAS</span>
                <span className="font-semibold text-slate-900">{campaign.roas}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Spend</span>
                <span className="font-medium text-slate-700">{campaign.spend}</span>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={`text-xs ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </Badge>
                <div className={`flex items-center space-x-1 ${
                  campaign.trend === 'up' ? 'text-green-600' : 'text-red-500'
                }`}>
                  {campaign.trend === 'up' ? 
                    <TrendingUp className="w-3 h-3" /> : 
                    <TrendingDown className="w-3 h-3" />
                  }
                  <span className="text-xs font-medium">{campaign.change}</span>
                </div>
              </div>

              <Badge className={`text-xs ${getPriorityColor(campaign.priority)}`}>
                {campaign.priority} priority
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CampaignDashboard;
