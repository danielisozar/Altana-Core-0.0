
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Zap, Bot } from 'lucide-react';
import ChatInterface from './ChatInterface';
import LiveMetrics from './LiveMetrics';

const LogisticsDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar with Live Metrics */}
        <div className="w-80 border-r border-border bg-card/50 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-primary mb-1">PALANTIR LATAM</h1>
              <p className="text-sm text-muted-foreground">Predictive Logistics Intelligence</p>
              <Badge variant="outline" className="mt-2 px-2 py-1 text-xs">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-ring"></div>
                AI Assistant Active
              </Badge>
            </div>
            <LiveMetrics />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b border-border bg-card/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold">Logistics AI Assistant</h2>
                  <p className="text-sm text-muted-foreground">
                    Ask me anything about your LatAm logistics operations
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Regional View
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 bg-background">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsDashboard;
