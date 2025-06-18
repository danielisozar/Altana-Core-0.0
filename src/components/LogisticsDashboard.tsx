
import React from 'react';
import { Bot, Activity } from 'lucide-react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import ChatInterface from './ChatInterface';

const CIS1Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex w-full">
        <AppSidebar />
        
        {/* Main Decision Area */}
        <div className="flex-1 flex flex-col">
          {/* Minimal Header */}
          <div className="glass-effect border-b border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">Ask HAL</h2>
                <p className="text-sm text-slate-500">
                  What are you trying to decide today?
                </p>
              </div>
            </div>
          </div>

          {/* Decision Interface */}
          <div className="flex-1">
            <ChatInterface />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CIS1Dashboard;
