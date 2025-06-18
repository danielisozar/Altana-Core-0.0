
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const DecisionHistory = () => {
  const decisions = [
    {
      id: 1,
      question: "Should I increase Meta ads budget?",
      date: "2024-01-15",
      status: "implemented",
      outcome: "25% ROAS increase",
      confidence: 87
    },
    {
      id: 2,
      question: "Launch TikTok campaign?",
      date: "2024-01-12",
      status: "pending",
      outcome: null,
      confidence: 72
    },
    {
      id: 3,
      question: "Optimize landing page?",
      date: "2024-01-10",
      status: "implemented",
      outcome: "18% conversion boost",
      confidence: 91
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="font-medium text-slate-900">Decision History</h3>
        <p className="text-sm text-slate-500">Track your decisions and outcomes</p>
      </div>
      
      {decisions.map((decision) => (
        <Card key={decision.id} className="border-l-4 border-l-slate-200">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">{decision.question}</CardTitle>
              <Badge variant={decision.status === 'implemented' ? 'default' : 'secondary'}>
                {decision.status}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <Calendar className="w-3 h-3 mr-1" />
              {decision.date}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Confidence: {decision.confidence}%</span>
              {decision.outcome && (
                <span className="text-green-600 font-medium flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {decision.outcome}
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DecisionHistory;
