
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, TrendingUp, AlertTriangle, MapPin, Package } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  insights?: {
    type: 'prediction' | 'alert' | 'optimization' | 'analysis';
    data?: any;
  };
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your LatAm Logistics Intelligence Assistant. Ask me anything about your supply chain, predict delivery times, analyze routes, or get real-time insights about your operations.",
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
    
    // Simulate different types of responses based on keywords
    if (lowerMessage.includes('predict') || lowerMessage.includes('forecast')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Based on current traffic patterns and historical data, I predict:\n\n• Santos-São Paulo route: 18% increase in delivery time next week\n• Callao-Lima corridor: Optimal conditions, on-time delivery expected\n• Mexico City routes: Weather delays likely on Thursday-Friday\n\nWould you like me to suggest alternative routes or rescheduling options?`,
        timestamp: new Date(),
        insights: {
          type: 'prediction',
          data: { confidence: 94, timeframe: '7 days' }
        }
      };
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('optimization')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `I've analyzed your logistics costs for this month:\n\n• Fuel optimization could save $127K (12% reduction)\n• Route consolidation opportunities: 23 routes\n• Modal shift recommendations: 15% of cargo to rail\n• Peak hour avoidance could reduce costs by 8%\n\nImplementing these changes could reduce monthly logistics costs by $284K. Should I create an implementation plan?`,
        timestamp: new Date(),
        insights: {
          type: 'optimization',
          data: { savings: 284000, confidence: 89 }
        }
      };
    }
    
    if (lowerMessage.includes('alert') || lowerMessage.includes('problem') || lowerMessage.includes('issue')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Here are the current critical alerts:\n\n🔴 Port congestion in Callao: 4-6 hour delays expected\n🟡 Weather system affecting Bogotá routes: Minor delays\n🔴 Strike announced at São Paulo distribution center: 48h impact\n🟡 Fuel price spike in Mexico: 7% cost increase\n\nI recommend rerouting 40% of Callao shipments through Paita port. Would you like me to calculate the impact?`,
        timestamp: new Date(),
        insights: {
          type: 'alert',
          data: { criticalAlerts: 2, warnings: 2 }
        }
      };
    }
    
    if (lowerMessage.includes('route') || lowerMessage.includes('path')) {
      return {
        id: Date.now().toString(),
        type: 'bot',
        content: `Analyzing optimal routes for your shipments:\n\n• Fastest route: Santos → São Paulo via BR-116 (4.2h)\n• Most efficient: Santos → São Paulo via SP-160 + BR-381 (4.8h, 15% fuel savings)\n• Recommended: Hybrid route avoiding peak hours (4.5h, balanced)\n\nReal-time traffic shows BR-116 has an accident at km 45. I suggest the SP-160 route. Current ETA: 17:30.`,
        timestamp: new Date(),
        insights: {
          type: 'analysis',
          data: { routeOptions: 3, timeSaved: '1.5h' }
        }
      };
    }
    
    // Default response
    return {
      id: Date.now().toString(),
      type: 'bot',
      content: `I understand you're asking about "${userMessage}". I can help you with:\n\n• Predictive analytics for delivery times\n• Cost optimization strategies\n• Route planning and traffic analysis\n• Real-time alerts and issue resolution\n• Supply chain performance metrics\n• Regional market insights\n\nWhat specific aspect would you like me to analyze for you?`,
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

    // Simulate API delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Predict delivery times for next week",
    "Show me cost optimization opportunities",
    "What are the current route alerts?",
    "Analyze my Brazil-Argentina corridor performance"
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
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
                <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                {message.insights && (
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center space-x-2">
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

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="px-6 py-4 border-t border-border">
          <div className="text-sm text-muted-foreground mb-3">Try asking:</div>
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
      <div className="p-6 border-t border-border">
        <div className="flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about predictions, routes, costs, alerts..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isTyping}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
