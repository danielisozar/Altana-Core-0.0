
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const DecisionSession = () => {
  const [question, setQuestion] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  
  const [formData, setFormData] = useState({
    revenue: '',
    kpi: 'ROAS',
    goal: 'Growth',
    channels: [],
    market: 'mexico',
    timeline: '1-week'
  });

  const handleInitialSubmit = () => {
    if (question.trim()) {
      setShowForm(true);
    }
  };

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setRecommendations([
        {
          title: "Increase Meta Ads Budget by 30%",
          rationale: "Current ROAS of 4.2x indicates strong performance with room for scaling. Mexico market shows 25% growth potential based on competitor analysis.",
          risk: "Low",
          confidence: 87
        },
        {
          title: "Launch TikTok Campaign for 18-25 Audience",
          rationale: "Untapped channel with 40% lower CAC than Meta. Perfect for growth goal with high engagement rates in LatAm.",
          risk: "Medium",
          confidence: 72
        },
        {
          title: "Optimize Landing Page Conversion",
          rationale: "Current 2.1% conversion rate is below industry average. Simple A/B test could improve ROI by 15-25%.",
          risk: "Low",
          confidence: 91
        }
      ]);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'Low': return 'text-green-600 bg-green-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'High': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRiskIcon = (risk) => {
    switch(risk) {
      case 'Low': return CheckCircle;
      case 'Medium': return AlertTriangle;
      case 'High': return AlertTriangle;
      default: return CheckCircle;
    }
  };

  if (recommendations) {
    return (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">HAL's Recommendations</h3>
          <p className="text-sm text-slate-600">Based on your business context and goals</p>
        </div>
        
        {recommendations.map((rec, index) => {
          const RiskIcon = getRiskIcon(rec.risk);
          return (
            <Card key={index} className="border-l-4 border-l-indigo-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">{rec.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(rec.risk)}`}>
                      <RiskIcon className="w-3 h-3 inline mr-1" />
                      {rec.risk} Risk
                    </span>
                    <span className="text-sm font-medium text-indigo-600">{rec.confidence}%</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{rec.rationale}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Ask Follow-up</Button>
                  <Button size="sm" variant="outline">Mark as Implemented</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
        
        <div className="pt-4 border-t">
          <Button 
            onClick={() => {
              setRecommendations(null);
              setShowForm(false);
              setQuestion('');
            }}
            variant="outline" 
            className="w-full"
          >
            Start New Decision
          </Button>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        <div className="text-center">
          <h3 className="font-medium text-slate-900">Consulting HAL...</h3>
          <p className="text-sm text-slate-500 mt-1">Analyzing your business context</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!showForm ? (
        <div className="space-y-4">
          <div>
            <Label htmlFor="question" className="text-sm font-medium">What are you trying to decide today?</Label>
            <Textarea
              id="question"
              placeholder="e.g., Should I increase budget in Meta ads this week?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="mt-2 min-h-[100px]"
            />
          </div>
          <Button onClick={handleInitialSubmit} className="w-full" disabled={!question.trim()}>
            Continue
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-sm text-slate-700 font-medium">Your Question:</p>
            <p className="text-sm text-slate-600 mt-1">{question}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="revenue" className="text-sm">Revenue (last 4 weeks)</Label>
              <Input
                id="revenue"
                placeholder="$50,000"
                value={formData.revenue}
                onChange={(e) => setFormData({...formData, revenue: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="kpi" className="text-sm">Main KPI</Label>
              <select 
                id="kpi"
                className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md"
                value={formData.kpi}
                onChange={(e) => setFormData({...formData, kpi: e.target.value})}
              >
                <option value="ROAS">ROAS</option>
                <option value="CAC">CAC</option>
                <option value="LTV">LTV</option>
                <option value="Conversion Rate">Conversion Rate</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="goal" className="text-sm">Goal</Label>
              <select 
                id="goal"
                className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md"
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
              >
                <option value="Growth">Growth</option>
                <option value="Profit">Profit</option>
                <option value="Efficiency">Efficiency</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timeline" className="text-sm">Timeline</Label>
              <select 
                id="timeline"
                className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md"
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              >
                <option value="urgent">Urgent</option>
                <option value="1-week">1 Week</option>
                <option value="1-month">1 Month</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
          </div>
          
          <Button onClick={handleAnalysis} className="w-full">
            <TrendingUp className="w-4 h-4 mr-2" />
            Run Decision Analysis
          </Button>
        </div>
      )}
    </div>
  );
};

export default DecisionSession;
