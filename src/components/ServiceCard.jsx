import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card className="hover-card-elevate h-full">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl text-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;