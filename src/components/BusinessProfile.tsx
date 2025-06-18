
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Users } from 'lucide-react';

const BusinessProfile = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="font-medium text-slate-900">Business Profile</h3>
        <p className="text-sm text-slate-500">Connect your data for better decisions</p>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Building2 className="w-4 h-4 mr-2" />
            Company Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label htmlFor="company" className="text-sm">Company Name</Label>
            <Input id="company" placeholder="Your Company" />
          </div>
          <div>
            <Label htmlFor="industry" className="text-sm">Industry</Label>
            <select className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md">
              <option>E-commerce</option>
              <option>SaaS</option>
              <option>Services</option>
              <option>Other</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Market Focus
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-sm">Primary Markets</Label>
            <div className="space-y-2 mt-2">
              {['Mexico', 'Colombia', 'Argentina', 'Chile', 'Peru'].map((country) => (
                <label key={country} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{country}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Data Connections
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            Connect Stripe
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Connect Google Ads
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Connect Meta Ads
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessProfile;
