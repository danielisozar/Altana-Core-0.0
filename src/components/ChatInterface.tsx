
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
        content: `Here's what my predictive models show for the next 7 days:\n\n**Santos-São Paulo Route:** 18% delivery time increase expected\n**Why:** Port worker negotiations scheduled + anticipated 40% cargo volume spike from soybean exports\n\n**Callao-Lima Corridor:** Optimal performance maintained\n**Why:** Weather patterns stable, no port congestion, and our AI routing has optimized 23 alternative paths\n\n**Mexico City Routes:** 2-day weather delays likely Thu-Fri\n**Why:** Satellite data shows storm system moving from Pacific, historically causes 67% delivery delays\n\nI recommend rerouting 2,400 TEU through Paita port immediately. This will save you $340K in delay costs.`,
        timestamp: new Date(),
        insights: {
          type: 'prediction',
          data: { confidence: 94, timeframe: '7 days' },
          reasoning: 'Based on 15 data sources including weather satellites, port APIs, and historical patterns'
        }
      };
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('optimization') || lowerMessage.includes('save')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `I've identified $284K in monthly savings opportunities:\n\n**Fuel Optimization: $127K savings (12% reduction)**\n**Why:** My analysis found 47 routes where you're using premium corridors during peak hours unnecessarily. Off-peak routing reduces fuel costs by 23%.\n\n**Route Consolidation: $89K savings**\n**Why:** 23 of your current routes have <60% capacity utilization. Consolidating these increases efficiency to 87% while maintaining delivery windows.\n\n**Modal Shift to Rail: $68K savings**\n**Why:** 15% of your São Paulo-Rio cargo can move to rail at 34% lower cost. Rail reliability is currently 96% vs truck's 89%.\n\nImplementing these changes takes 2 weeks. I can create the transition plan now.`,
        timestamp: new Date(),
        insights: {
          type: 'optimization',
          data: { savings: 284000, confidence: 91 },
          reasoning: 'Analysis of 180 days of operational data across 1,247 active routes'
        }
      };
    }
    
    if (lowerMessage.includes('alert') || lowerMessage.includes('problem') || lowerMessage.includes('issue')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Critical situation analysis - here's what needs immediate attention:\n\n🔴 **Callao Port Congestion: URGENT**\n**Impact:** 4-6 hour delays, affecting $2.3M in cargo\n**Why:** Docker strike negotiations broke down 2 hours ago. My port sensors show 67 ships queued.\n**Action:** Reroute to Paita immediately. I've already identified 12 available slots.\n\n🔴 **São Paulo Strike: 48H Impact**\n**Impact:** $890K daily throughput at risk\n**Why:** Labor union rejected wage proposal. Strike 89% likely to proceed.\n**Action:** Pre-position inventory at secondary hubs. I've mapped 6 alternative distribution points.\n\n🟡 **Mexico Fuel Surge: 7% Cost Increase**\n**Why:** Refinery maintenance + peso devaluation driving prices up\n**Action:** Lock fuel contracts now through our preferred suppliers.\n\nExecuting these countermeasures will minimize disruption to <2% of operations.`,
        timestamp: new Date(),
        insights: {
          type: 'alert',
          data: { criticalAlerts: 2, warnings: 1 },
          reasoning: 'Real-time monitoring of 847 data points across LatAm logistics network'
        }
      };
    }
    
    if (lowerMessage.includes('route') || lowerMessage.includes('path') || lowerMessage.includes('delivery')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Route optimization complete - here are your best options:\n\n**Option 1: Speed Priority (4.2h delivery)**\nSantos → BR-116 → São Paulo\n**Why:** Fastest but 15% higher fuel cost. Use for high-priority shipments only.\n\n**Option 2: Cost Priority (4.8h delivery)**\nSantos → SP-160 → BR-381 → São Paulo\n**Why:** 23% fuel savings, avoids toll stations, minimal traffic impact\n\n**Option 3: RECOMMENDED (4.5h delivery)**\nHybrid route avoiding BR-116 accident at km 45\n**Why:** Balances speed and cost. Real-time traffic data shows 15-minute savings vs normal routing.\n\nBased on current conditions, I'm routing your next 12 shipments via Option 3. This saves $2,340 today while maintaining delivery commitments.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { routeOptions: 3, timeSaved: '1.5h' },
          reasoning: 'Live traffic analysis from 340 sensors + weather and road condition APIs'
        }
      };
    }
    
    if (lowerMessage.includes('performance') || lowerMessage.includes('kpi') || lowerMessage.includes('metrics')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Your logistics performance is strong, but here's where we can excel:\n\n**Current Performance:**\n• On-time delivery: 96.8% (Industry avg: 89%)\n• Cost per km: $0.84 (15% below regional average)\n• Capacity utilization: 87% (Target: 90%)\n\n**Why you're outperforming:**\n• My predictive routing reduces delays by 34%\n• Dynamic load optimization increases efficiency\n• Real-time weather integration prevents 67% of weather delays\n\n**Opportunities to reach 99% excellence:**\n• Implement my micro-scheduling recommendations (+2.1% on-time)\n• Use predictive maintenance alerts (+1.8% uptime)\n• Optimize last-mile with AI clustering (+0.3% efficiency)\n\nThese improvements will position you in the top 1% of LatAm logistics operators.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { currentScore: 96.8, targetScore: 99 },
          reasoning: 'Benchmarked against 340 logistics operators across 12 LatAm countries'
        }
      };
    }
    
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I understand you're asking about "${userMessage}". As your LatAm logistics intelligence specialist, I can provide expert analysis on:\n\n**Predictive Analytics**\n• Delivery time forecasts with 94% accuracy\n• Demand prediction up to 30 days ahead\n• Risk assessment for routes and suppliers\n\n**Cost Intelligence**\n• Real-time optimization opportunities\n• Fuel and route cost analysis\n• ROI projections for logistics investments\n\n**Operational Excellence**\n• Live performance monitoring\n• Competitive benchmarking\n• Strategic recommendations\n\nWhat specific logistics challenge should I analyze for you? I have access to real-time data across all major LatAm trade corridors.`,
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
    "Show me the biggest cost savings opportunities", 
    "What critical alerts need attention now?",
    "Optimize my Brazil-Argentina routes"
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages - with padding at bottom for fixed input */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 pb-32">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
              }`}>
                {message.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`rounded-2xl p-4 ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card border border-border'
              }`}>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                {message.insights && (
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <div className="flex items-start space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {message.insights.type === 'prediction' && <TrendingUp className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'alert' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'optimization' && <Package className="w-3 h-3 mr-1" />}
                        {message.insights.type === 'analysis' && <MapPin className="w-3 h-3 mr-1" />}
                        {message.insights.type}
                      </Badge>
                      {message.insights.data?.confidence && (
                        <span className="text-xs text-muted-foreground">
                          {message.insights.data.confidence}% confidence
                        </span>
                      )}
                    </div>
                    {message.insights.reasoning && (
                      <div className="mt-2 flex items-start space-x-2">
                        <Lightbulb className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{message.insights.reasoning}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="text-xs text-muted-foreground mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-card border border-border rounded-2xl p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Input Area at Bottom */}
      <div className="fixed bottom-0 right-0 left-80 bg-background border-t border-border">
        {/* Suggested Questions - only show for first interaction */}
        {messages.length <= 1 && (
          <div className="px-6 py-4">
            <div className="text-sm text-muted-foreground mb-3">Ask me anything about your logistics:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-left justify-start h-auto py-2 px-3 text-xs"
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
              placeholder="Ask about predictions, optimizations, costs, routes, alerts..."
              className="flex-1 min-h-[60px] max-h-[120px] resize-none"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="self-end"
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
