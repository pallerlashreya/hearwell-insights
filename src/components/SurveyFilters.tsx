import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Activity, Headphones, Clock, AlertCircle, Users, Ear } from "lucide-react";

interface SurveyFiltersProps {
  onPredict: (filters: {
    age: string;
    missedSounds: string;
    hearingFomo: string;
    headphoneUsage: string;
    earDiscomfort: string;
    feelingLeftOut: string;
  }) => void;
}

const SurveyFilters = ({ onPredict }: SurveyFiltersProps) => {
  const [filters, setFilters] = useState({
    age: "",
    missedSounds: "",
    hearingFomo: "",
    headphoneUsage: "",
    earDiscomfort: "",
    feelingLeftOut: "",
  });

  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handlePredict = () => {
    onPredict(filters);
  };

  const isComplete = Object.values(filters).every((v) => v !== "");

  return (
    <section className="glass-card rounded-2xl p-6 space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-border/50">
        <div className="p-2 rounded-lg bg-primary/10">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Hearing Health Survey
          </h2>
          <p className="text-sm text-muted-foreground">
            Answer these questions to assess your hearing risk level
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Age Group */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Users className="h-4 w-4 text-muted-foreground" />
            Age Group
          </label>
          <Select onValueChange={(v) => handleChange("age", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select age range" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="18-24">18-24 years</SelectItem>
              <SelectItem value="25-34">25-34 years</SelectItem>
              <SelectItem value="35–44">35-44 years</SelectItem>
              <SelectItem value="45-54">45-54 years</SelectItem>
              <SelectItem value="55-64">55-64 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Missed Sounds */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Ear className="h-4 w-4 text-muted-foreground" />
            Missed Sounds
          </label>
          <Select onValueChange={(v) => handleChange("missedSounds", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Where do you miss sounds?" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="none">No difficulties</SelectItem>
              <SelectItem value="public spaces">In public spaces</SelectItem>
              <SelectItem value="family conversations">Family conversations</SelectItem>
              <SelectItem value="work or school meetings">Work/school meetings</SelectItem>
              <SelectItem value="disconnected">Often feel disconnected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hearing FOMO */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
            Fear of Missing Out
          </label>
          <Select onValueChange={(v) => handleChange("hearingFomo", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Worry about missing sounds?" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="Never">Never</SelectItem>
              <SelectItem value="Rarely">Rarely</SelectItem>
              <SelectItem value="Sometimes">Sometimes</SelectItem>
              <SelectItem value="Yes, often">Yes, often</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Headphone Usage */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Headphones className="h-4 w-4 text-muted-foreground" />
            Daily Headphone Use
          </label>
          <Select onValueChange={(v) => handleChange("headphoneUsage", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Hours per day" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="Less than 1 hour">Less than 1 hour</SelectItem>
              <SelectItem value="1-2 hours">1-2 hours</SelectItem>
              <SelectItem value="2-4 hours">2-4 hours</SelectItem>
              <SelectItem value="More than 4 hours">More than 4 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Ear Discomfort */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Clock className="h-4 w-4 text-muted-foreground" />
            Ear Discomfort
          </label>
          <Select onValueChange={(v) => handleChange("earDiscomfort", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Experience discomfort?" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="No">No</SelectItem>
              <SelectItem value="Occasionally">Occasionally</SelectItem>
              <SelectItem value="Yes">Yes, frequently</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Feeling Left Out */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Users className="h-4 w-4 text-muted-foreground" />
            Feeling Left Out
          </label>
          <Select onValueChange={(v) => handleChange("feelingLeftOut", v)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Feel excluded in conversations?" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="No">No, never</SelectItem>
              <SelectItem value="Sometimes">Sometimes</SelectItem>
              <SelectItem value="Yes, often">Yes, often</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={handlePredict}
          disabled={!isComplete}
          size="lg"
          className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Activity className="mr-2 h-4 w-4" />
          Get Risk Assessment
        </Button>
      </div>
    </section>
  );
};

export default SurveyFilters;
