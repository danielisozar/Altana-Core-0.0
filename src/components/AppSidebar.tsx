
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
  Bot, 
  Home, 
  History, 
  Building2, 
  Settings, 
  FileText
} from 'lucide-react';
import DecisionSession from './DecisionSession';
import DecisionHistory from './DecisionHistory';
import BusinessProfile from './BusinessProfile';
import AppSettings from './AppSettings';

const AppSidebar = () => {
  const [activeView, setActiveView] = useState('home');

  const menuItems = [
    {
      id: 'home',
      title: 'New Decision',
      icon: Home,
      component: DecisionSession
    },
    {
      id: 'history',
      title: 'History',
      icon: History,
      component: DecisionHistory
    },
    {
      id: 'business',
      title: 'My Business',
      icon: Building2,
      component: BusinessProfile
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      component: AppSettings
    }
  ];

  const ActiveComponent = menuItems.find(item => item.id === activeView)?.component || DecisionSession;

  return (
    <Sidebar className="w-80">
      <SidebarHeader className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">CIS-1</h1>
              <p className="text-xs text-slate-500">Business Decision Copilot</p>
            </div>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
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
