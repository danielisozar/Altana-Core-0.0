
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, TrendingUp, AlertTriangle, MapPin, Package, Lightbulb } from 'lucide-react';

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
      content: "I'm your LatAm Logistics Intelligence specialist. I have real-time access to supply chain data across the region and can provide instant predictions, optimizations, and strategic insights. What logistics challenge can I solve for you today?",
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
        content: `NEXT 7 DAYS FORECAST - Critical decisions needed now:

OPTION 1: Santos-São Paulo (AVOID) - 18% delays incoming
Port worker negotiations + 40% cargo spike = guaranteed bottlenecks. My models show 67% probability of 4+ hour delays.

OPTION 2: Callao-Lima (OPTIMAL CHOICE) - Perfect storm of efficiency
Zero congestion, stable weather patterns, 23 optimized backup routes ready. This is your golden window.

OPTION 3: Paita Alternative (SMART HEDGE) - Insurance play
2,400 TEU capacity available immediately. Costs 8% more but saves you $340K in delay penalties.

MY RECOMMENDATION: Execute Paita reroute TODAY. Santos will cost you more than the premium you'll pay for Paita. Weather data confirms this is the right move - act within 6 hours for best positioning.`,
        timestamp: new Date(),
        insights: {
          type: 'prediction',
          data: { confidence: 94, timeframe: '7 days' },
          reasoning: 'Based on 15 real-time data sources: weather satellites, port APIs, labor negotiations tracker, and 180-day historical analysis'
        }
      };
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('optimization') || lowerMessage.includes('save')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `$284K MONTHLY SAVINGS IDENTIFIED - Here's your action plan:

OPTION 1: Off-Peak Routing (EXECUTE FIRST) - $127K immediate impact
47 routes running premium hours unnecessarily. Shifting to off-peak saves 23% on fuel costs. Zero service disruption, pure profit.

OPTION 2: Route Consolidation (MEDIUM PRIORITY) - $89K monthly
23 routes under 60% capacity. My algorithms have mapped the perfect consolidation strategy to hit 87% efficiency while maintaining delivery windows.

OPTION 3: Rail Integration (LONG-TERM WIN) - $68K ongoing
São Paulo-Rio cargo shifts to rail at 34% lower cost. Rail reliability actually beats trucks right now: 96% vs 89%.

MY RECOMMENDATION: Start with Option 1 immediately - it's risk-free money. Implement Option 2 within 2 weeks. Option 3 needs 6-week transition but delivers permanent savings. Total implementation timeline: 8 weeks to full optimization.`,
        timestamp: new Date(),
        insights: {
          type: 'optimization',
          data: { savings: 284000, confidence: 91 },
          reasoning: 'Analysis of 180 days operational data across 1,247 active routes, verified against industry benchmarks'
        }
      };
    }
    
    if (lowerMessage.includes('alert') || lowerMessage.includes('problem') || lowerMessage.includes('issue')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `CRISIS RESPONSE ACTIVATED - 3 critical situations demand immediate action:

OPTION 1: Callao Emergency Reroute (DO THIS NOW) - $2.3M cargo at risk
Docker strike confirmed 2 hours ago. 67 ships queued, 4-6 hour delays spreading. I've secured 12 Paita slots - claim them in the next hour before competitors move.

OPTION 2: São Paulo Strike Defense (48H WINDOW) - $890K daily exposure
89% probability strike proceeds tomorrow. Pre-position inventory at 6 secondary hubs I've mapped. This buys you 72 hours to negotiate or reroute.

OPTION 3: Mexico Fuel Lock (PROFIT OPPORTUNITY) - 7% cost increase coming
Peso devaluation + refinery maintenance = fuel spike inevitable. Lock contracts now through our preferred suppliers before market catches up.

MY RECOMMENDATION: Execute ALL three simultaneously. Callao reroute is non-negotiable. São Paulo prep takes 4 hours. Mexico fuel locks need 24 hours. This aggressive response limits total impact to under 2% of operations while competitors face 15-20% disruption.`,
        timestamp: new Date(),
        insights: {
          type: 'alert',
          data: { criticalAlerts: 2, warnings: 1 },
          reasoning: 'Real-time monitoring of 847 data points: port sensors, labor negotiations, currency markets, weather systems'
        }
      };
    }
    
    if (lowerMessage.includes('route') || lowerMessage.includes('path') || lowerMessage.includes('delivery')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `ROUTE OPTIMIZATION COMPLETE - 3 strategic options analyzed:

OPTION 1: Speed Priority (4.2h) - Use for premium clients only
Santos → BR-116 → São Paulo. Fastest route but 15% fuel premium. Reserve this for high-margin, time-critical shipments.

OPTION 2: Cost Priority (4.8h) - Maximum efficiency play  
Santos → SP-160 → BR-381 → São Paulo. 23% fuel savings, zero tolls, predictable timing. Perfect for bulk standard deliveries.

OPTION 3: Hybrid Smart Route (4.5h) - THE WINNER
Dynamic routing avoiding BR-116 accident at km 45. Balances speed and cost while adapting to real-time conditions. This is your new standard.

MY RECOMMENDATION: Implement Option 3 as default for all operations. I'm already routing your next 12 shipments this way, saving $2,340 today. Options 1 and 2 become tactical choices for specific client needs. This strategy positions you 15% ahead of competition in both cost and reliability.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { routeOptions: 3, timeSaved: '1.5h' },
          reasoning: 'Live analysis from 340 traffic sensors, weather APIs, road condition monitors, and fuel price tracking'
        }
      };
    }
    
    if (lowerMessage.includes('performance') || lowerMessage.includes('kpi') || lowerMessage.includes('metrics')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `PERFORMANCE ANALYSIS - You're outperforming 89% of LatAm operators. Here's how to dominate the top 1%:

CURRENT STATUS: 96.8% on-time delivery (Industry: 89%) | $0.84/km cost (15% below average) | 87% capacity utilization

OPTION 1: Micro-Scheduling Implementation (+2.1% performance) - 2 weeks to deploy
Predictive scheduling adjustments based on traffic patterns, weather, and historical data. Guaranteed improvement to 99% on-time delivery.

OPTION 2: Predictive Maintenance Program (+1.8% uptime) - 4 weeks full rollout
AI-driven maintenance alerts prevent 92% of breakdown delays. ROI payback in 3 months through reduced emergency repairs.

OPTION 3: Last-Mile AI Clustering (+0.3% efficiency) - 6 weeks implementation
Route optimization for final delivery segments. Smaller impact but completes your competitive moat.

MY RECOMMENDATION: Execute all three in sequence. Start with Option 1 immediately - it delivers the biggest impact fastest. This progression takes you from top 11% to top 1% of LatAm logistics operators within 3 months. Your clients will notice the difference before your competitors understand what happened.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { currentScore: 96.8, targetScore: 99 },
          reasoning: 'Benchmarked against 340 logistics operators across 12 LatAm countries, verified through industry performance databases'
        }
      };
    }
    
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I'm your LatAm logistics intelligence specialist with real-time access to supply chain data across the region. I deliver instant predictions, optimizations, and strategic insights that keep you ahead of the competition.

MY CORE CAPABILITIES:

PREDICTIVE ANALYTICS - 94% accuracy forecasting
Delivery time predictions, demand forecasting up to 30 days, comprehensive risk assessment for routes and suppliers.

COST INTELLIGENCE - Real-time optimization
Live opportunity identification, fuel and route cost analysis, ROI projections for logistics investments.

OPERATIONAL EXCELLENCE - Performance monitoring
Live performance tracking, competitive benchmarking, strategic recommendations.

WHAT SPECIFIC CHALLENGE SHOULD I SOLVE? I have access to real-time data across all major LatAm trade corridors and can provide actionable recommendations within minutes.

Ask me about predictions, cost optimization, route planning, or performance analysis - I'll give you 3 strategic options with clear recommendations every time.`,
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
    "Predict delivery delays for next week",
    "Show me cost optimization opportunities", 
    "What alerts need attention now?",
    "Optimize my Brazil routes"
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
                        {message.insights.type === 'optimization' && <Package className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'analysis' && <MapPin className="w-3 h-3 mr-1" />}
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
              placeholder="Ask about predictions, costs, routes..."
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
