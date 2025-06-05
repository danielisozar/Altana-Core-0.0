
interface MetricInput {
  roas?: number;
  cac?: number;
  cpc?: number;
  ctr?: number;
  spend?: number;
  impressions?: number;
  conversions?: number;
  quarterlyBudget?: number;
  monthlyGoal?: number;
  freeText?: string;
}

interface DecisionOutput {
  decision: string;
  justification: string;
  confidence: 'high' | 'medium' | 'low';
}

export const analyzeMetrics = (input: MetricInput): DecisionOutput => {
  const { roas, cac, cpc, ctr, spend, impressions, conversions, quarterlyBudget, monthlyGoal, freeText } = input;

  // ROAS-based decisions for marketing teams
  if (roas !== undefined) {
    if (roas >= 5) {
      return {
        decision: "Scale this campaign aggressively",
        justification: "Exceptional ROAS indicates strong campaign performance. Request additional budget allocation and expand to similar audience segments immediately.",
        confidence: 'high'
      };
    } else if (roas >= 3) {
      return {
        decision: "Increase budget by 30-50%",
        justification: "Strong ROAS performance with room for growth. Test expanded audience targeting while maintaining current creative strategy.",
        confidence: 'high'
      };
    } else if (roas >= 2) {
      return {
        decision: "Optimize creative and targeting",
        justification: "Moderate ROAS suggests campaign potential. A/B test new ad creative, refine audience segments, and improve landing page experience.",
        confidence: 'high'
      };
    } else {
      return {
        decision: "Pause and restructure campaign",
        justification: "Poor ROAS indicates fundamental campaign issues. Reassess audience targeting, messaging alignment, and competitive positioning before continuing spend.",
        confidence: 'high'
      };
    }
  }

  // CTR and CPC analysis for campaign optimization
  if (ctr !== undefined && cpc !== undefined) {
    if (ctr >= 2.5 && cpc <= 1.5) {
      return {
        decision: "Maximize reach with current creative",
        justification: "High engagement at low cost indicates strong creative resonance. Increase daily budgets and expand to lookalike audiences.",
        confidence: 'high'
      };
    } else if (ctr < 1.0) {
      return {
        decision: "Refresh creative assets immediately",
        justification: "Low click-through rate suggests ad fatigue or poor audience-message fit. Test new creative angles and update targeting parameters.",
        confidence: 'high'
      };
    } else if (cpc > 3.0) {
      return {
        decision: "Reduce competition through niche targeting",
        justification: "High cost-per-click indicates oversaturated audience. Narrow targeting to more specific demographics or interest groups.",
        confidence: 'medium'
      };
    }
  }

  // Budget allocation and goal analysis
  if (spend !== undefined && monthlyGoal !== undefined) {
    const spendRatio = spend / monthlyGoal;
    if (spendRatio > 0.5) {
      return {
        decision: "Reallocate budget to top performers",
        justification: "High spend-to-goal ratio requires immediate optimization. Pause underperforming campaigns and concentrate budget on proven channels.",
        confidence: 'medium'
      };
    } else if (spendRatio < 0.2) {
      return {
        decision: "Accelerate spend on validated campaigns",
        justification: "Conservative spend suggests missed opportunity. Increase budgets on campaigns with proven performance metrics.",
        confidence: 'medium'
      };
    }
  }

  // Conversion rate optimization
  if (conversions !== undefined && impressions !== undefined) {
    const conversionRate = (conversions / impressions) * 100;
    if (conversionRate < 1) {
      return {
        decision: "Focus on conversion funnel optimization",
        justification: "Low conversion rate indicates disconnect between ads and landing experience. Audit user journey and align messaging across touchpoints.",
        confidence: 'medium'
      };
    }
  }

  // Marketing team specific NLP analysis
  if (freeText) {
    const text = freeText.toLowerCase();
    
    if (text.includes('budget cut') || text.includes('reduce spend')) {
      return {
        decision: "Consolidate to highest-performing channels",
        justification: "During budget constraints, concentrate resources on proven channels with best ROI. Pause experimental campaigns and focus on core performance drivers.",
        confidence: 'high'
      };
    }
    
    if (text.includes('new product launch') || text.includes('product launch')) {
      return {
        decision: "Implement tiered awareness strategy",
        justification: "New product launches require broad reach followed by targeted conversion campaigns. Start with awareness building, then retarget engaged audiences with conversion-focused creative.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('competitors') || text.includes('competition')) {
      return {
        decision: "Differentiate through unique value proposition",
        justification: "Competitive pressure requires clear differentiation. Focus messaging on unique benefits and consider conquesting strategies for competitor audiences.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('seasonal') || text.includes('holiday')) {
      return {
        decision: "Prepare scaled seasonal campaigns",
        justification: "Seasonal opportunities require advance preparation and increased budget allocation. Plan creative variants and audience expansion 4-6 weeks ahead.",
        confidence: 'medium'
      };
    }
    
    if (text.includes('underperforming') || text.includes('declining')) {
      return {
        decision: "Conduct comprehensive campaign audit",
        justification: "Performance decline requires systematic analysis of creative fatigue, audience saturation, and competitive landscape changes. Test new approaches immediately.",
        confidence: 'high'
      };
    }
  }

  // Default guidance for marketing teams
  return {
    decision: "Define your primary campaign objective",
    justification: "Effective marketing strategy requires clear KPI focus. Specify whether you're optimizing for awareness, engagement, leads, or conversions to get targeted guidance.",
    confidence: 'low'
  };
};
