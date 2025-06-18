
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Settings, Key, Bell } from 'lucide-react';

const AppSettings = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="font-medium text-slate-900">Settings</h3>
        <p className="text-sm text-slate-500">Configure your CIS-1 experience</p>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Key className="w-4 h-4 mr-2" />
            API Keys
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label htmlFor="openai" className="text-sm">OpenAI API Key</Label>
            <Input id="openai" type="password" placeholder="sk-..." />
          </div>
          <Button size="sm">Save Keys</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm">Email notifications</Label>
            <input type="checkbox" className="rounded" />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm">Decision reminders</Label>
            <input type="checkbox" className="rounded" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-sm">Decision confidence threshold</Label>
            <select className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md mt-1">
              <option>70% - Balanced</option>
              <option>80% - Conservative</option>
              <option>60% - Aggressive</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppSettings;
