import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SinglePageNavbar } from "@/components/layout/single-page-navbar";
import { useAOS } from "@/hooks/use-aos";
import SinglePagePortfolio from "@/pages/single-page-portfolio";

function App() {
  useAOS();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <SinglePageNavbar />
            <main>
              <SinglePagePortfolio />
            </main>
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
