
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Truck, 
  Ship, 
  Plane, 
  Package, 
  AlertTriangle, 
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const LogisticsDashboard = () => {
  const [activeShipments, setActiveShipments] = useState(1247);
  const [alerts, setAlerts] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShipments(prev => prev + Math.floor(Math.random() * 5) - 2);
      setAlerts(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const performanceData = [
    { name: 'Jan', deliveries: 4200, efficiency: 94, cost: 128000 },
    { name: 'Feb', deliveries: 4800, efficiency: 96, cost: 132000 },
    { name: 'Mar', deliveries: 5200, efficiency: 93, cost: 145000 },
    { name: 'Apr', deliveries: 5800, efficiency: 97, cost: 138000 },
    { name: 'May', deliveries: 6200, efficiency: 95, cost: 142000 },
    { name: 'Jun', deliveries: 6800, efficiency: 98, cost: 135000 },
  ];

  const modalData = [
    { name: 'Road', value: 65, color: '#06b6d4' },
    { name: 'Maritime', value: 25, color: '#10b981' },
    { name: 'Air', value: 10, color: '#f59e0b' },
  ];

  const corridorData = [
    { route: 'Santos-São Paulo', volume: 2400, efficiency: 98, delay: 2 },
    { route: 'Callao-Lima', volume: 1800, efficiency: 94, delay: 8 },
    { route: 'Cartagena-Bogotá', volume: 1600, efficiency: 96, delay: 4 },
    { route: 'Veracruz-CDMX', volume: 2200, efficiency: 92, delay: 12 },
    { route: 'Buenos Aires-Córdoba', volume: 1400, efficiency: 97, delay: 3 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 data-grid">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">PALANTIR LATAM</h1>
          <p className="text-muted-foreground">Logistics Intelligence Platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="px-3 py-1">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-ring"></div>
            Live Data Stream
          </Badge>
          <Button variant="outline" size="sm">
            <Globe className="w-4 h-4 mr-2" />
            Regional View
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glow-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{activeShipments.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{alerts}</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">96.8%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Efficiency</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$0.84</div>
            <p className="text-xs text-muted-foreground">Per km/kg delivered</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="operations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="corridors">Corridors</TabsTrigger>
          <TabsTrigger value="intelligence">Intelligence</TabsTrigger>
        </TabsList>

        <TabsContent value="operations" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="deliveries" 
                      stroke="#06b6d4" 
                      strokeWidth={3}
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-accent" />
                  Modal Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={modalData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {modalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-6 mt-4">
                  {modalData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-primary" />
                  Road Transport
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Active Vehicles</span>
                    <span className="font-bold">3,247</span>
                  </div>
                  <Progress value={87} className="h-2" />
                  <div className="text-sm text-muted-foreground">87% capacity utilization</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Ship className="w-5 h-5 mr-2 text-primary" />
                  Maritime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Port Operations</span>
                    <span className="font-bold">156</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <div className="text-sm text-muted-foreground">92% on-time performance</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 text-primary" />
                  Air Cargo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Daily Flights</span>
                    <span className="font-bold">89</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <div className="text-sm text-muted-foreground">94% cargo load factor</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="corridors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Latin America Trade Corridors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {corridorData.map((corridor, index) => (
                  <div key={index} className="border border-border rounded-lg p-4 hover:bg-card/50 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-primary">{corridor.route}</h3>
                      <Badge variant={corridor.delay > 10 ? "destructive" : corridor.delay > 5 ? "secondary" : "default"}>
                        {corridor.delay}h delay
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Volume: </span>
                        <span className="font-medium">{corridor.volume.toLocaleString()} TEU</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Efficiency: </span>
                        <span className="font-medium text-primary">{corridor.efficiency}%</span>
                      </div>
                    </div>
                    <Progress value={corridor.efficiency} className="mt-2 h-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cost Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="cost" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Predictive Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-accent">High-Priority Alerts</h4>
                    <div className="space-y-2">
                      <div className="flex items-center p-2 bg-destructive/10 rounded border border-destructive/20">
                        <AlertTriangle className="w-4 h-4 text-destructive mr-2" />
                        <span className="text-sm">Port congestion predicted in Callao - 48h</span>
                      </div>
                      <div className="flex items-center p-2 bg-accent/10 rounded border border-accent/20">
                        <TrendingUp className="w-4 h-4 text-accent mr-2" />
                        <span className="text-sm">Demand surge expected in São Paulo corridor</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Optimization Opportunities</h4>
                    <div className="space-y-2 text-sm">
                      <div>• Route optimization could save 15% on fuel costs</div>
                      <div>• Load consolidation potential: 23% capacity increase</div>
                      <div>• Modal shift to rail could reduce emissions by 32%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Regional Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Brazil</h4>
                  <div className="text-sm space-y-1">
                    <div>Active Routes: 342</div>
                    <div>Port Efficiency: 94%</div>
                    <div>Weather Impact: Low</div>
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Mexico</h4>
                  <div className="text-sm space-y-1">
                    <div>Active Routes: 278</div>
                    <div>Port Efficiency: 89%</div>
                    <div>Weather Impact: Medium</div>
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Argentina</h4>
                  <div className="text-sm space-y-1">
                    <div>Active Routes: 156</div>
                    <div>Port Efficiency: 96%</div>
                    <div>Weather Impact: Low</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LogisticsDashboard;
