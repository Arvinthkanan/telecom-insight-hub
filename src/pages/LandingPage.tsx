
import { ArrowRight, BarChart2, Globe, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <div className="flex items-center gap-2">
            <BarChart2 size={24} className="text-primary" />
            <span className="text-xl font-bold">TelecomInsight</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container max-w-5xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unified Telecom Analytics Dashboard
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Compare and analyze telecom data with our comprehensive dashboard solution
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="font-semibold">
                Explore Demo
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="font-semibold">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Dashboard Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our analytics platform provides a comprehensive set of tools to monitor and optimize your telecom operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-10 w-10 text-primary" />,
                title: "Network vs Billing Analysis",
                description: "Compare network data with billing records to identify inconsistencies and revenue leakage."
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Multi-Service Monitoring",
                description: "Track Voice, SMS, and Data usage across business and consumer segments."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Alarm Management",
                description: "Receive real-time alerts and notifications for critical system events."
              },
              {
                icon: <Lock className="h-10 w-10 text-primary" />,
                title: "User Role Management",
                description: "Control access with role-based permissions for admins, viewers, and analysts."
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Case Management",
                description: "Track and resolve issues with our integrated case management system."
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-primary" />,
                title: "Interactive Analytics",
                description: "Explore data with interactive charts, filters, and drill-down capabilities."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your telecom analytics?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join thousands of telecom professionals who use our platform to optimize operations and increase revenue
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="font-semibold text-primary">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <BarChart2 size={20} className="text-primary" />
              <span className="font-bold">TelecomInsight</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 TelecomInsight. All rights reserved.
            </div>
            <nav className="flex gap-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
