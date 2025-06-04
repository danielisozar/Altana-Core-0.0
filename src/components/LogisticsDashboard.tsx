
import React from 'react';
import { Bot, Activity } from 'lucide-react';
import ChatInterface from './ChatInterface';
import LiveMetrics from './LiveMetrics';

const LogisticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex h-screen">
        {/* Sidebar with Live Metrics */}
        <div className="w-80 glass-effect border-r border-border/50 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-slate-900">Analytics</h1>
              </div>
              <p className="text-sm text-slate-500 mb-3">LatAm Logistics Intelligence</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                <span className="text-xs text-slate-600 font-medium">Live Data</span>
              </div>
            </div>
            <LiveMetrics />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Minimal Header */}
          <div className="glass-effect border-b border-border/50 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900">AI Assistant</h2>
                <p className="text-sm text-slate-500">
                  Ask me anything about your logistics operations
                </p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
