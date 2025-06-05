
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { analyzeMetrics } from '@/utils/amschelEngine';
import { AmschelResponse } from './AmschelResponse';

interface AmschelCoreProps {}

export const AmschelCore: React.FC<AmschelCoreProps> = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const parseInput = (text: string) => {
    const lowerText = text.toLowerCase();
    const metrics: any = {};

    // Extract ROAS
    const roasMatch = text.match(/roas[:\s]*(\d+\.?\d*)/i);
    if (roasMatch) metrics.roas = parseFloat(roasMatch[1]);

    // Extract CAC
    const cacMatch = text.match(/cac[:\s]*\$?(\d+\.?\d*)/i);
    if (cacMatch) metrics.cac = parseFloat(cacMatch[1]);

    // Extract spend
    const spendMatch = text.match(/spend[:\s]*\$?(\d+\.?\d*)/i);
    if (spendMatch) metrics.spend = parseFloat(spendMatch[1]);

    // Extract monthly goal
    const goalMatch = text.match(/goal[:\s]*\$?(\d+\.?\d*)/i);
    if (goalMatch) metrics.monthlyGoal = parseFloat(goalMatch[1]);

    // If no structured metrics found, treat as free text
    if (Object.keys(metrics).length === 0) {
      metrics.freeText = text;
    }

    return metrics;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsProcessing(true);
    
    // Simulate brief processing time for better UX
    setTimeout(() => {
      const parsedMetrics = parseInput(input);
      const result = analyzeMetrics(parsedMetrics);
      setResponse(result);
      setIsProcessing(false);
    }, 800);
  };

  const handleNewQuery = () => {
    setInput('');
    setResponse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {!response ? (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light text-slate-900 tracking-tight">
                Amschel Core
              </h1>
              <p className="text-lg text-slate-600 font-light">
                Operational intelligence for founders
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ROAS: 3.2, CAC: $45, spend: $10k, goal: $50k — or describe your situation"
                  className="h-14 text-lg px-6 pr-14 border-0 bg-white shadow-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 transition-all duration-200"
                  disabled={isProcessing}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isProcessing}
                  className="absolute right-2 top-2 h-10 w-10 bg-slate-900 hover:bg-slate-800 transition-colors duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {isProcessing && (
                <div className="flex items-center justify-center space-x-2 text-slate-600">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse delay-200"></div>
                </div>
              )}
            </form>

            <div className="text-xs text-slate-400 space-y-2">
              <p>Examples: "ROAS 2.1, need to scale" • "CAC $120, monthly goal $100k" • "Launching new product next month"</p>
            </div>
          </div>
        ) : (
          <AmschelResponse
            decision={response.decision}
            justification={response.justification}
            confidence={response.confidence}
            onNewQuery={handleNewQuery}
          />
        )}
      </div>
    </div>
  );
};
