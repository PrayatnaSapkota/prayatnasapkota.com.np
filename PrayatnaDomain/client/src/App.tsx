import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect, useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AntiScreenshotOverlay() {
  return <div className="anti-screenshot-overlay"></div>;
}

function ScreenCaptureWarning({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`screen-capture-warning ${isVisible ? 'visible' : ''}`}>
      ⚠️ SCREENSHOT DETECTED ⚠️
      <br />
      These images are copyright protected.
      <br />
      Unauthorized copying is prohibited.
    </div>
  );
}

function ContentProtection() {
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Prevent keyboard shortcuts for copying (Ctrl+C, Command+C)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect common screenshot shortcuts
      const isScreenshotAttempt = 
        (e.key === 'PrintScreen') || 
        (e.ctrlKey && e.shiftKey && e.key === '4') ||
        (e.ctrlKey && e.shiftKey && e.key === '5') ||
        (e.metaKey && e.shiftKey && e.key === '3') ||
        (e.metaKey && e.shiftKey && e.key === '4') ||
        (e.metaKey && e.shiftKey && e.key === '5');
      
      if (isScreenshotAttempt) {
        showScreenshotWarning();
      }
      
      // Prevent common copying shortcuts
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'c' || e.key === 'C' || 
         e.key === 's' || e.key === 'S' || 
         e.key === 'u' || e.key === 'U' || 
         e.key === 'p' || e.key === 'P')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Function to detect and handle screenshot attempts
    const showScreenshotWarning = () => {
      setIsCapturing(true);
      
      // Mark all protected image containers
      const protectedContainers = document.querySelectorAll('.protected-image-container');
      protectedContainers.forEach(container => {
        container.classList.add('capturing');
      });
      
      // Hide warning after 2 seconds
      setTimeout(() => {
        setIsCapturing(false);
        protectedContainers.forEach(container => {
          container.classList.remove('capturing');
        });
      }, 2000);
    };

    // Try to detect fullscreen and print events which might be for screenshots
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        showScreenshotWarning();
      }
    };

    const handleBeforePrint = () => {
      showScreenshotWarning();
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeprint', handleBeforePrint);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);

  return (
    <>
      <AntiScreenshotOverlay />
      <ScreenCaptureWarning isVisible={isCapturing} />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContentProtection />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
