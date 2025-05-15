
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeRain from "../components/CodeRain";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hacker-dark relative overflow-hidden">
      <CodeRain speed={1.5} />
      <div className="relative z-10 text-center p-8">
        <h1 className="text-7xl font-orbitron font-bold text-hacker-green mb-4 animate-text-flicker">
          404
        </h1>
        <div className="font-roboto-mono mb-8 inline-block p-2 bg-hacker-dark border border-hacker-green/30">
          <span className="terminal-text text-gray-300">
            Error: Access Denied. Target not found.
          </span>
        </div>
        <p className="text-xl text-gray-400 mb-8 max-w-md">
          The page you are trying to access does not exist or has been relocated.
        </p>
        <Button 
          className="bg-hacker-green hover:bg-hacker-green/80 text-black font-orbitron" 
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Main System
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
