import { Ear } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Ear className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Hearing Well-being
              </h1>
              <p className="text-xs text-muted-foreground">
                Survey & Risk Assessment
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Secure Assessment
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
