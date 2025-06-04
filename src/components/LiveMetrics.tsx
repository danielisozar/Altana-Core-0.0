
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Truck, 
  Ship, 
  Plane, 
  Package, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  DollarSign,
  MapPin
} from 'lucide-react';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeShipments: 1247,
    onTimeDelivery: 96.8,
    costPerKm: 0.84,
    criticalAlerts: 8,
    efficiency: 94
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeShipments: prev.activeShipments + Math.floor(Math.random() * 10) - 5,
        onTimeDelivery: Math.max(90, Math.min(100, prev.onTimeDelivery + (Math.random() - 0.5) * 0.5)),
        costPerKm: Math.max(0.7, Math.min(1.2, prev.costPerKm + (Math.random() - 0.5) * 0.02)),
        criticalAlerts: Math.max(0, prev.criticalAlerts + Math.floor(Math.random() * 3) - 1),
        efficiency: Math.max(85, Math.min(99, prev.efficiency + (Math.random() - 0.5) * 2))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Port congestion in Callao', time: '2 min ago' },
    { id: 2, type: 'info', message: 'Weather delay in Bogotá', time: '15 min ago' },
    { id: 3, type: 'critical', message: 'Route optimization available', time: '23 min ago' },
  ];

  const topRoutes = [
    { route: 'Santos-São Paulo', volume: '2,400 TEU', efficiency: 98, status: 'optimal' },
    { route: 'Callao-Lima', volume: '1,800 TEU', efficiency: 85, status: 'congested' },
    { route: 'Veracruz-CDMX', volume: '2,200 TEU', efficiency: 92, status: 'normal' },
  ];

  return (
    <div className="space-y-6">
      {/* Live KPIs */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-ring"></div>
          Live Metrics
        </h3>
        
        <div className="grid gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Active Shipments</div>
                  <div className="text-xl font-bold text-primary">{metrics.activeShipments.toLocaleString()}</div>
                </div>
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">On-Time Delivery</div>
                  <div className="text-xl font-bold text-primary">{metrics.onTimeDelivery.toFixed(1)}%</div>
                </div>
              </div>
            </div>
            <Progress value={metrics.onTimeDelivery} className="mt-2 h-1" />
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Cost/Km</div>
                  <div className="text-xl font-bold text-primary">${metrics.costPerKm.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Critical Alerts</div>
                  <div className="text-xl font-bold text-accent">{metrics.criticalAlerts}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Alerts</h3>
        <div className="space-y-2">
          {recentAlerts.map((alert) => (
            <Card key={alert.id} className="p-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                  alert.type === 'critical' ? 'text-destructive' : 
                  alert.type === 'warning' ? 'text-accent' : 'text-primary'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{alert.message}</div>
                  <div className="text-xs text-muted-foreground">{alert.time}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Top Routes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Top Routes</h3>
        <div className="space-y-3">
          {topRoutes.map((route, index) => (
            <Card key={index} className="p-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">{route.route}</div>
                  <Badge variant={
                    route.status === 'optimal' ? 'default' : 
                    route.status === 'congested' ? 'destructive' : 'secondary'
                  } className="text-xs">
                    {route.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{route.volume}</span>
                  <span>{route.efficiency}% efficiency</span>
                </div>
                <Progress value={route.efficiency} className="h-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMetrics;
