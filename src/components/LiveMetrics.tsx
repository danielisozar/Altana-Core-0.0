
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp,
  Clock,
  DollarSign
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
    { id: 1, type: 'warning', message: 'Port congestion in Callao', time: '2m' },
    { id: 2, type: 'info', message: 'Weather delay in Bogotá', time: '15m' },
    { id: 3, type: 'critical', message: 'Route optimization ready', time: '23m' },
  ];

  const topRoutes = [
    { route: 'Santos-São Paulo', volume: '2,400', efficiency: 98, status: 'optimal' },
    { route: 'Callao-Lima', volume: '1,800', efficiency: 85, status: 'congested' },
    { route: 'Veracruz-CDMX', volume: '2,200', efficiency: 92, status: 'normal' },
  ];

  return (
    <div className="space-y-6">
      {/* Live KPIs */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide">Live Metrics</h3>
        
        <div className="space-y-3">
          <Card className="p-4 border-0 minimal-shadow bg-white/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Active Shipments</div>
                  <div className="text-lg font-semibold text-slate-900">{metrics.activeShipments.toLocaleString()}</div>
                </div>
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
          </Card>

          <Card className="p-4 border-0 minimal-shadow bg-white/60">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">On-Time Delivery</div>
                    <div className="text-lg font-semibold text-slate-900">{metrics.onTimeDelivery.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
              <Progress value={metrics.onTimeDelivery} className="h-1 bg-slate-100" />
            </div>
          </Card>

          <Card className="p-4 border-0 minimal-shadow bg-white/60">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Cost/Km</div>
                <div className="text-lg font-semibold text-slate-900">${metrics.costPerKm.toFixed(2)}</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-0 minimal-shadow bg-white/60">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Critical Alerts</div>
                <div className="text-lg font-semibold text-slate-900">{metrics.criticalAlerts}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide">Recent Activity</h3>
        <div className="space-y-2">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="p-3 bg-white/40 rounded-xl border border-slate-200/50">
              <div className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'critical' ? 'bg-red-500' : 
                  alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-700">{alert.message}</div>
                  <div className="text-xs text-slate-500">{alert.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Routes */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-700 uppercase tracking-wide">Top Routes</h3>
        <div className="space-y-2">
          {topRoutes.map((route, index) => (
            <div key={index} className="p-3 bg-white/40 rounded-xl border border-slate-200/50">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-800">{route.route}</div>
                  <Badge variant={
                    route.status === 'optimal' ? 'default' : 
                    route.status === 'congested' ? 'destructive' : 'secondary'
                  } className="text-xs px-2 py-0.5">
                    {route.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{route.volume} TEU</span>
                  <span>{route.efficiency}%</span>
                </div>
                <Progress value={route.efficiency} className="h-1 bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveMetrics;
