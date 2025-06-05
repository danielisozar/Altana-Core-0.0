
interface MetricInput {
  roas?: number;
  cac?: number;
  spend?: number;
  monthlyGoal?: number;
  freeText?: string;
}

interface DecisionOutput {
  decision: string;
  justification: string;
  confidence: 'high' | 'medium' | 'low';
}

export const analyzeMetrics = (input: MetricInput): DecisionOutput => {
  const { roas, cac, spend, monthlyGoal, freeText } = input;

  // Rule-based analysis for structured metrics
  if (roas !== undefined) {
    if (roas >= 4) {
      return {
        decision: "Scale aggressively",
        justification: "Exceptional ROAS indicates strong product-market fit. Increase budget by 50-100% while maintaining current targeting.",
        confidence: 'high'
      };
    } else if (roas >= 2.5) {
      return {
        decision: "Scale conservatively",
        justification: "Healthy ROAS with room for optimization. Increase budget by 20-30% and test new audiences.",
        confidence: 'high'
      };
    } else if (roas >= 1.5) {
      return {
        decision: "Optimize before scaling",
        justification: "ROAS below threshold. Focus on creative refresh, audience refinement, and landing page improvements.",
        confidence: 'high'
      };
    } else {
      return {
        decision: "Pause and pivot",
        justification: "Poor ROAS indicates fundamental issues. Reassess product positioning, pricing, or target market.",
        confidence: 'high'
      };
    }
  }

  if (cac !== undefined && monthlyGoal !== undefined) {
    const maxAffordableCac = monthlyGoal * 0.3;
    if (cac <= maxAffordableCac) {
      return {
        decision: "Accelerate acquisition",
        justification: "CAC is within sustainable range. Increase acquisition efforts to capture market share efficiently.",
        confidence: 'high'
      };
    } else {
      return {
        decision: "Reduce acquisition costs",
        justification: "CAC exceeds sustainable levels. Focus on organic growth, referrals, and conversion optimization.",
        confidence: 'high'
      };
    }
  }

  if (spend !== undefined && monthlyGoal !== undefined) {
    const spendRatio = spend / monthlyGoal;
    if (spendRatio > 0.4) {
      return {
        decision: "Optimize unit economics",
        justification: "High spend-to-goal ratio suggests inefficient capital allocation. Review channel performance and reallocate budget.",
        confidence: 'medium'
      };
    }
  }

  // NLP-based analysis for free text
  if (freeText) {
    const text = freeText.toLowerCase();
    
    if (text.includes('scaling') || text.includes('growth')) {
      return {
        decision: "Focus on operational foundations",
        justification: "Before scaling, ensure systems, processes, and team capacity can handle 3x current volume without quality degradation.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('struggling') || text.includes('declining') || text.includes('falling')) {
      return {
        decision: "Diagnose core issues",
        justification: "Declining performance requires immediate analysis of customer feedback, competitive positioning, and operational efficiency.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('launch') || text.includes('new product')) {
      return {
        decision: "Validate before investing",
        justification: "Test with minimal viable audience first. Confirm demand signals before committing significant resources.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('competition') || text.includes('competitor')) {
      return {
        decision: "Differentiate through execution",
        justification: "Competition validates market demand. Focus on superior customer experience and operational excellence over feature parity.",
        confidence: 'medium'
      };
    }
  }

  // Default response for unclear inputs
  return {
    decision: "Clarify your strategic objective",
    justification: "Effective decisions require specific context. Define your primary constraint: growth, profitability, or market position.",
    confidence: 'low'
  };
};
