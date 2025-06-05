
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';

interface AmschelResponseProps {
  decision: string;
  justification: string;
  confidence: 'high' | 'medium' | 'low';
  onNewQuery: () => void;
}

export const AmschelResponse: React.FC<AmschelResponseProps> = ({
  decision,
  justification,
  confidence,
  onNewQuery
}) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedback = (positive: boolean) => {
    setFeedbackGiven(true);
    // Here you could send feedback to analytics
    console.log(`Feedback: ${positive ? 'positive' : 'negative'}`);
  };

  const getConfidenceIndicator = () => {
    switch (confidence) {
      case 'high':
        return <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>;
      case 'medium':
        return <div className="w-2 h-2 bg-amber-500 rounded-full"></div>;
      case 'low':
        return <div className="w-2 h-2 bg-slate-400 rounded-full"></div>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onNewQuery}
          className="text-slate-600 hover:text-slate-900 p-0 h-auto font-normal"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          New query
        </Button>
        <div className="flex items-center space-x-2">
          {getConfidenceIndicator()}
          <span className="text-xs text-slate-500 uppercase tracking-wide">
            {confidence} confidence
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-slate-900 leading-tight">
            {decision}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {justification}
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <p className="text-slate-600 font-light">
              Did this help your decision?
            </p>
            
            {!feedbackGiven ? (
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeedback(true)}
                  className="border-slate-200 hover:bg-slate-50"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeedback(false)}
                  className="border-slate-200 hover:bg-slate-50"
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <span className="text-sm text-slate-500">Thank you for your feedback</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
