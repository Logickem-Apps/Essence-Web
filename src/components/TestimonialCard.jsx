import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full hover-card-elevate">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating
                  ? 'fill-primary text-primary'
                  : 'text-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4 italic">
          "{testimonial.review_text}"
        </p>
        <div className="border-t border-secondary/30 pt-4">
          <p className="font-semibold text-accent">{testimonial.customer_name}</p>
          {testimonial.tour_name && (
            <p className="text-sm text-primary font-medium">{testimonial.tour_name}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;