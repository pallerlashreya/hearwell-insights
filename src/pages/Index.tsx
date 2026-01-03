import { useState } from "react";
import Header from "@/components/Header";
import SurveyFilters from "@/components/SurveyFilters";
import ConditionCard from "@/components/ConditionCard";
import { toast } from "@/hooks/use-toast";
import hearingLossImg from "@/assets/hearing-loss.jpg";
import tinnitusImg from "@/assets/tinnitus.jpg";
import earInfectionImg from "@/assets/ear-infection.jpg";

const conditions = [
  {
    title: "Hearing Loss",
    description:
      "Partial or total inability to hear sounds clearly, often caused by prolonged headphone use or aging.",
    imageUrl: hearingLossImg,
    risk: "High" as const,
  },
  {
    title: "Tinnitus",
    description:
      "Ringing or buzzing sensation in the ears, common in people exposed to loud noises.",
    imageUrl: tinnitusImg,
    risk: "Medium" as const,
  },
  {
    title: "Ear Infection",
    description:
      "Inflammation of the middle ear causing pain, pressure, and temporary hearing difficulty.",
    imageUrl: earInfectionImg,
    risk: "Low" as const,
  },
];

const Index = () => {
  const [predictionResult, setPredictionResult] = useState<string | null>(null);

  const handlePredict = (filters: { age: string; missedSounds: string; hearingFomo: string; headphoneUsage: string; earDiscomfort: string; feelingLeftOut: string }) => {
    let riskScore = 0;

    // Age scoring (older = higher risk)
    if (filters.age === "45-54" || filters.age === "55-64") riskScore += 2;
    else if (filters.age === "35–44") riskScore += 1;

    // Missed sounds scoring
    if (filters.missedSounds?.includes("work or school meetings") || filters.missedSounds?.includes("family conversations")) riskScore += 2;
    else if (filters.missedSounds?.includes("public spaces") || filters.missedSounds?.includes("disconnected")) riskScore += 1;

    // Hearing FOMO scoring
    if (filters.hearingFomo === "Yes, often") riskScore += 2;
    else if (filters.hearingFomo === "Sometimes") riskScore += 1;

    // Headphone usage scoring
    if (filters.headphoneUsage === "More than 4 hours") riskScore += 2;
    else if (filters.headphoneUsage === "2-4 hours") riskScore += 1;

    // Ear discomfort scoring
    if (filters.earDiscomfort === "Yes") riskScore += 2;
    else if (filters.earDiscomfort === "Occasionally") riskScore += 1;

    // Feeling left out scoring
    if (filters.feelingLeftOut === "Yes, often") riskScore += 2;
    else if (filters.feelingLeftOut === "Sometimes") riskScore += 1;

    // Calculate risk based on score (High if score >= 4, otherwise Low)
    let risk: string;
    if (riskScore >= 4) {
      risk = "High";
    } else {
      risk = "Low";
    }

    setPredictionResult(risk);
    
    toast({
      title: "Prediction Complete",
      description: `Based on your inputs, the estimated hearing risk level is: ${risk}`,
      variant: risk === "High" ? "destructive" : "default",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8 space-y-8">
        {/* Survey Filters Section */}
        <SurveyFilters onPredict={handlePredict} />

        {/* Prediction Result with Health Suggestions */}
        {predictionResult && (
          <div className="animate-fade-in space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-r from-card via-card/80 to-card border border-border/50 text-center">
              <p className="text-sm text-muted-foreground mb-2">Prediction Result</p>
              <p className={`text-3xl font-bold ${
                predictionResult === "High" 
                  ? "text-destructive" 
                  : "text-success"
              }`}>
                {predictionResult} Risk
              </p>
            </div>

            {/* Health Suggestions */}
            <div className="p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">💡</span> Health Suggestions to Improve Your Hearing
              </h3>
              
              {predictionResult === "High" && (
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong className="text-foreground">Consult an audiologist immediately</strong> — Schedule a professional hearing test to assess your current condition.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong className="text-foreground">Limit headphone usage</strong> — Reduce daily headphone use to under 1 hour and keep volume below 60%.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong className="text-foreground">Use noise-canceling headphones</strong> — They help you hear clearly at lower volumes in noisy environments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong className="text-foreground">Take regular hearing breaks</strong> — Follow the 60/60 rule: 60% volume for no more than 60 minutes at a time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong className="text-foreground">Avoid loud environments</strong> — Use ear protection in concerts, construction sites, or loud venues.</span>
                  </li>
                </ul>
              )}

              {predictionResult === "Low" && (
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">•</span>
                    <span><strong className="text-foreground">Keep up the good habits!</strong> — Your current practices are helping maintain healthy hearing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">•</span>
                    <span><strong className="text-foreground">Stay mindful of volume levels</strong> — Continue keeping audio at safe levels (below 70 decibels).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">•</span>
                    <span><strong className="text-foreground">Annual hearing check-ups</strong> — Even with low risk, regular check-ups help catch any early changes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-1">•</span>
                    <span><strong className="text-foreground">Stay hydrated and eat well</strong> — Good nutrition supports overall ear health and circulation.</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Hearing Conditions Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-xl font-semibold text-foreground px-4">
              Hearing Defects & Associated Conditions
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <ConditionCard
                key={condition.title}
                {...condition}
                delay={index * 100}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Hearing Well-being Survey Dashboard — Protect your hearing health
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
