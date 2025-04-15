import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 p-4">
      <div className="flex items-center gap-2 mb-8">
        <BarChart2 size={24} className="text-primary" />
        <span className="text-xl font-bold">TelecomInsight</span>
      </div>
      
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary/30">404</h1>
        <h2 className="text-2xl font-bold mt-4 mb-2">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex justify-center">
          <Link to="/">
            <Button>
              <Home size={16} className="mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
