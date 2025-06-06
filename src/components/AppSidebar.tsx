
import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { 
  Activity, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  BarChart3,
  PieChart,
  LineChart,
  Zap
} from 'lucide-react';
import LiveMetrics from './LiveMetrics';
import CampaignDashboard from './CampaignDashboard';
import ROASDashboard from './ROASDashboard';
import AudienceDashboard from './AudienceDashboard';

const AppSidebar = () => {
  const [activeView, setActiveView] = useState('metrics');

  const menuItems = [
    {
      id: 'metrics',
      title: 'Live Metrics',
      icon: Activity,
      component: LiveMetrics
    },
    {
      id: 'campaigns',
      title: 'Campaign Performance',
      icon: BarChart3,
      component: CampaignDashboard
    },
    {
      id: 'roas',
      title: 'ROAS Analytics',
      icon: DollarSign,
      component: ROASDashboard
    },
    {
      id: 'audience',
      title: 'Audience Insights',
      icon: Users,
      component: AudienceDashboard
    }
  ];

  const ActiveComponent = menuItems.find(item => item.id === activeView)?.component || LiveMetrics;

  return (
    <Sidebar className="w-80">
      <SidebarHeader className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Analytics</h1>
              <p className="text-xs text-slate-500">LatAm Marketing Intelligence</p>
            </div>
          </div>
          <SidebarTrigger />
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
          <span className="text-xs text-slate-600 font-medium">Live Data</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Marketing Intelligence</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => setActiveView(item.id)}
                    isActive={activeView === item.id}
                    className="w-full"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <div className="p-4">
              <ActiveComponent />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
