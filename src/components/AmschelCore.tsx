
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

    // Extract marketing metrics
    const roasMatch = text.match(/roas[:\s]*(\d+\.?\d*)/i);
    if (roasMatch) metrics.roas = parseFloat(roasMatch[1]);

    const cacMatch = text.match(/cac[:\s]*\$?(\d+\.?\d*)/i);
    if (cacMatch) metrics.cac = parseFloat(cacMatch[1]);

    const cpcMatch = text.match(/cpc[:\s]*\$?(\d+\.?\d*)/i);
    if (cpcMatch) metrics.cpc = parseFloat(cpcMatch[1]);

    const ctrMatch = text.match(/ctr[:\s]*(\d+\.?\d*)%?/i);
    if (ctrMatch) metrics.ctr = parseFloat(ctrMatch[1]);

    const spendMatch = text.match(/spend[:\s]*\$?(\d+\.?\d*k?)/i);
    if (spendMatch) {
      let spend = parseFloat(spendMatch[1]);
      if (spendMatch[1].includes('k')) spend *= 1000;
      metrics.spend = spend;
    }

    const impressionsMatch = text.match(/impressions?[:\s]*(\d+\.?\d*k?)/i);
    if (impressionsMatch) {
      let impressions = parseFloat(impressionsMatch[1]);
      if (impressionsMatch[1].includes('k')) impressions *= 1000;
      metrics.impressions = impressions;
    }

    const conversionsMatch = text.match(/conversions?[:\s]*(\d+\.?\d*)/i);
    if (conversionsMatch) metrics.conversions = parseFloat(conversionsMatch[1]);

    const goalMatch = text.match(/(?:goal|target)[:\s]*\$?(\d+\.?\d*k?)/i);
    if (goalMatch) {
      let goal = parseFloat(goalMatch[1]);
      if (goalMatch[1].includes('k')) goal *= 1000;
      metrics.monthlyGoal = goal;
    }

    const budgetMatch = text.match(/budget[:\s]*\$?(\d+\.?\d*k?)/i);
    if (budgetMatch) {
      let budget = parseFloat(budgetMatch[1]);
      if (budgetMatch[1].includes('k')) budget *= 1000;
      metrics.quarterlyBudget = budget;
    }

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
    }, 600);
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
                Marketing intelligence for teams
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ROAS: 3.1, CPC: $2.50, CTR: 1.8% — or describe your campaign situation"
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
              <p>Examples: "CTR 0.8%, CPC $4.20, need to optimize" • "Campaign ROAS 2.1, budget $50k" • "New product launch next quarter"</p>
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
