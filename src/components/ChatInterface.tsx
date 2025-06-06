
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, TrendingUp, AlertTriangle, Target, DollarSign, Lightbulb } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  insights?: {
    type: 'prediction' | 'alert' | 'optimization' | 'analysis';
    data?: any;
    reasoning?: string;
  };
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "I'm your LatAm Marketing Intelligence specialist. I have real-time access to campaign data across the region and can provide instant predictions, optimizations, and strategic insights. What marketing challenge can I solve for you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('predict') || lowerMessage.includes('forecast')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `NEXT 30 DAYS FORECAST - Critical marketing decisions needed now:

OPTION 1: Brazil Mobile-First Strategy (EXECUTE IMMEDIATELY) - 67% growth opportunity
My models show mobile conversion rates spiking 34% in São Paulo market. Competitors haven't caught this trend yet. You have a 2-week window to dominate before saturation.

OPTION 2: Mexico Video Creative Pivot (HIGH IMPACT) - 89% confidence boost
Video content performing 156% better than static ads in Mexico City. Creative fatigue hitting static campaigns hard. Shift 70% of creative budget to video production immediately.

OPTION 3: Argentina Retargeting Expansion (SAFE BET) - Reliable 23% ROAS improvement
Peso stabilization creating purchase confidence. Retargeting campaigns show 4.2x ROAS vs 2.8x acquisition campaigns. Double retargeting spend for guaranteed returns.

MY RECOMMENDATION: Execute Brazil mobile strategy TODAY. This is your golden window before competitors notice. Mexico video shift should follow within 48 hours. Argentina retargeting is your safety net.`,
        timestamp: new Date(),
        insights: {
          type: 'prediction',
          data: { confidence: 94, timeframe: '30 days' },
          reasoning: 'Based on 15 real-time data sources: social media APIs, conversion tracking, competitor monitoring, and 180-day performance analysis across LatAm markets'
        }
      };
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('optimization') || lowerMessage.includes('budget') || lowerMessage.includes('roas')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `$340K QUARTERLY SAVINGS IDENTIFIED - Here's your optimization roadmap:

OPTION 1: Off-Peak Campaign Scheduling (IMMEDIATE WINS) - $127K savings
47 campaigns running premium hours unnecessarily. CPCs drop 34% between 10PM-6AM in LatAm markets. Zero performance impact, pure profit optimization.

OPTION 2: Audience Consolidation Strategy (MEDIUM PRIORITY) - $148K monthly impact
23 overlapping audience segments competing against each other, inflating CPCs by 28%. My algorithms mapped perfect consolidation maintaining 94% reach efficiency.

OPTION 3: Cross-Platform Budget Reallocation (STRATEGIC MOVE) - $65K ongoing
Instagram outperforming Facebook by 67% in Brazil, TikTok crushing both in Mexico under-25 demographic. Reallocate 40% budget following performance data.

MY RECOMMENDATION: Start with Option 1 immediately - it's risk-free money. Implement Option 2 within 1 week. Option 3 needs 2-week testing but delivers permanent ROAS improvements. Total timeline: 3 weeks to full optimization.`,
        timestamp: new Date(),
        insights: {
          type: 'optimization',
          data: { savings: 340000, confidence: 91 },
          reasoning: 'Analysis of 90 days campaign data across 847 active campaigns, benchmarked against LatAm industry performance standards'
        }
      };
    }
    
    if (lowerMessage.includes('alert') || lowerMessage.includes('problem') || lowerMessage.includes('issue') || lowerMessage.includes('crisis')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `CRISIS RESPONSE ACTIVATED - 3 critical marketing situations demand immediate action:

OPTION 1: Facebook Algorithm Change Defense (ACT NOW) - $2.1M campaign exposure
Algorithm update detected 3 hours ago affecting reach by 43%. I've identified 12 winning creative patterns unaffected by changes. Implement new creative strategy within 6 hours before competitors adapt.

OPTION 2: Competitor Aggressive Bidding (48H RESPONSE WINDOW) - $890K monthly impact
Major competitor launched 67% budget increase targeting your core audiences. CPCs up 34% and climbing. Shift to longtail keywords and niche audiences I've pre-mapped for you.

OPTION 3: Currency Fluctuation Opportunity (PROFIT WINDOW) - Brazilian Real undervalued
Real devaluation + stable local purchasing power = arbitrage opportunity. Lock USD-based ad spend now for 15% effective cost reduction over next 90 days.

MY RECOMMENDATION: Execute ALL three simultaneously. Facebook creative refresh is non-negotiable. Competitor defense takes 4 hours setup. Currency lock needs 24 hours execution. This aggressive response limits campaign impact to under 5% while competitors face 20-30% performance drops.`,
        timestamp: new Date(),
        insights: {
          type: 'alert',
          data: { criticalAlerts: 2, warnings: 1 },
          reasoning: 'Real-time monitoring of 1,200+ data points: platform APIs, competitor tracking, currency markets, algorithm change detection systems'
        }
      };
    }
    
    if (lowerMessage.includes('campaign') || lowerMessage.includes('creative') || lowerMessage.includes('audience')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `CAMPAIGN OPTIMIZATION COMPLETE - 3 strategic directions analyzed:

OPTION 1: Creative Refresh Strategy (URGENT PRIORITY) - Address 67% performance decline
Current creative showing fatigue across all LatAm markets. CTR dropped 34% in 2 weeks. I've identified 8 winning creative angles based on top-performing competitor analysis.

OPTION 2: Audience Expansion Play (CALCULATED GROWTH) - 89% lookalike accuracy
Your best-converting customers cluster in 3 distinct behavioral patterns. Expand to similar audiences in Colombia and Chile for 156% scale opportunity with maintained ROAS.

OPTION 3: Retargeting Funnel Optimization (GUARANTEED WINS) - 4.7x ROAS potential
68% of website visitors never see retargeting ads due to inadequate funnel setup. Implement 7-stage retargeting sequence for automatic revenue increase.

MY RECOMMENDATION: Option 1 is critical - execute today to stop bleeding. Option 2 should follow within 1 week for growth. Option 3 is your foundation for sustainable performance. This sequence transforms you from reactive to predictive marketing.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { campaignHealth: 67, scalePotential: '156%' },
          reasoning: 'Deep analysis of 340 campaign metrics, creative performance tracking, audience behavior patterns across 12 LatAm markets'
        }
      };
    }
    
    if (lowerMessage.includes('performance') || lowerMessage.includes('kpi') || lowerMessage.includes('metrics') || lowerMessage.includes('results')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `PERFORMANCE ANALYSIS - You're outperforming 82% of LatAm marketing teams. Here's how to reach top 5%:

CURRENT STATUS: 3.4% CTR (Industry: 2.1%) | $2.80 CPC (18% below average) | 4.2 ROAS (Target: 5.0+)

OPTION 1: Predictive Budget Allocation (+0.8 ROAS points) - 2 weeks to deploy
AI-driven budget shifts based on real-time performance patterns. Automatically move spend from declining to ascending campaigns. Guaranteed ROAS improvement to 5.0+.

OPTION 2: Advanced Attribution Modeling (+0.4 ROAS visibility) - 1 month rollout
Multi-touch attribution reveals true campaign impact. Stop over-crediting last-click, start optimizing full customer journey. 23% of your budget is misallocated.

OPTION 3: Competitive Intelligence Integration (+0.3 ROAS edge) - 6 weeks implementation
Real-time competitor monitoring and automated counter-strategies. React to competitor moves within hours, not weeks.

MY RECOMMENDATION: Execute all three in sequence. Start with Option 1 immediately - biggest impact, fastest results. This progression takes you from top 18% to top 5% of LatAm marketing performance within 2 months. Your competition won't know what hit them.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { currentROAS: 4.2, targetROAS: 5.0 },
          reasoning: 'Benchmarked against 890 marketing teams across 12 LatAm countries, verified through industry performance databases and platform APIs'
        }
      };
    }
    
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I'm your LatAm marketing intelligence specialist with real-time access to campaign data across the region. I deliver instant predictions, optimizations, and strategic insights that keep your campaigns ahead of the competition.

MY CORE CAPABILITIES:

PREDICTIVE ANALYTICS - 94% accuracy forecasting
Campaign performance predictions, audience behavior forecasting up to 30 days, comprehensive trend analysis across LatAm markets.

BUDGET INTELLIGENCE - Real-time optimization
Live opportunity identification, ROAS optimization, competitive spending analysis, currency arbitrage opportunities.

CREATIVE & AUDIENCE INSIGHTS - Performance monitoring
Real-time creative fatigue detection, audience saturation alerts, competitor creative analysis, viral content pattern recognition.

WHAT SPECIFIC MARKETING CHALLENGE SHOULD I SOLVE? I have access to real-time data across all major LatAm advertising platforms and can provide actionable recommendations within minutes.

Ask me about campaign predictions, budget optimization, creative strategy, audience expansion, or performance analysis - I'll give you 3 strategic options with clear recommendations every time.`,
      timestamp: new Date(),
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Predict campaign performance for next month",
    "Show me budget optimization opportunities", 
    "What marketing alerts need attention?",
    "Optimize my Brazil campaign strategy"
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-slate-50/50">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 pb-32">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-4`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
                  : 'bg-gradient-to-br from-slate-100 to-slate-200'
              }`}>
                {message.type === 'user' ? 
                  <User className="w-5 h-5 text-white" /> : 
                  <Bot className="w-5 h-5 text-slate-600" />
                }
              </div>
              <div className={`rounded-2xl p-5 ${
                message.type === 'user' 
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white' 
                  : 'bg-white minimal-shadow border border-slate-200/50'
              }`}>
                <div className={`text-sm leading-relaxed whitespace-pre-wrap ${
                  message.type === 'user' ? 'text-white' : 'text-slate-700'
                }`}>
                  {message.content}
                </div>
                {message.insights && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-start space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/20">
                        {message.insights.type === 'prediction' && <TrendingUp className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'alert' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'optimization' && <DollarSign className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'analysis' && <Target className="w-3 h-3 mr-1" />}
                        {message.insights.type}
                      </Badge>
                      {message.insights.data?.confidence && (
                        <span className="text-xs text-white/70">
                          {message.insights.data.confidence}% confidence
                        </span>
                      )}
                    </div>
                    {message.insights.reasoning && (
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="w-3 h-3 text-amber-300 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-white/80">{message.insights.reasoning}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className={`text-xs mt-3 ${
                  message.type === 'user' ? 'text-white/60' : 'text-slate-400'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <Bot className="w-5 h-5 text-slate-600" />
              </div>
              <div className="bg-white minimal-shadow border border-slate-200/50 rounded-2xl p-5">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 right-0 left-80 glass-effect border-t border-border/50">
        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div className="px-6 py-4">
            <div className="text-sm text-slate-500 mb-3 font-medium">Try asking:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto py-3 px-4 text-xs border-slate-200 hover:bg-slate-50 text-slate-600"
                  onClick={() => setInputValue(question)}
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-6">
          <div className="flex space-x-3">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about campaigns, ROAS, budgets, audiences..."
              className="flex-1 min-h-[50px] max-h-[120px] resize-none border-slate-200 bg-white/80 text-slate-700 placeholder:text-slate-400"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="self-end bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 border-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
