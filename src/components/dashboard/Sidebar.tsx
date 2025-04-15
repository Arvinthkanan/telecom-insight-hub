
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Home,
  Menu,
  Network,
  Phone,
  Settings,
  FileText,
  Bell,
  Users,
  Briefcase,
  PieChart,
  FileCog,
  FileStack,
  CalendarClock,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

type SidebarItem = {
  title: string;
  icon: React.ElementType;
  path: string;
};

const sidebarItems: SidebarItem[] = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Dashboard", icon: BarChart3, path: "/dashboard" },
  { title: "Network vs Billing", icon: Network, path: "/network-billing" },
  { title: "Mediation vs Billing", icon: FileStack, path: "/mediation-billing" },
  { title: "B2B Analysis", icon: Briefcase, path: "/b2b-analysis" },
  { title: "B2C Analysis", icon: PieChart, path: "/b2c-analysis" },
  { title: "Fixed Line", icon: FileText, path: "/fixed-line" },
  { title: "Voice / SMS / Data", icon: Phone, path: "/voice-sms-data" },
  { title: "CRM Insights", icon: Users, path: "/crm-insights" },
  { title: "Alarm Management", icon: Bell, path: "/alarm-management" },
  { title: "User Management", icon: Users, path: "/user-management" },
  { title: "Case Management", icon: FileCog, path: "/case-management" },
  { title: "Upcoming Features", icon: CalendarClock, path: "/upcoming-features" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

interface SidebarProps {
  onToggleCollapse?: (collapsed: boolean) => void;
}

export function Sidebar({ onToggleCollapse }: SidebarProps = {}) {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    if (onToggleCollapse) {
      onToggleCollapse(newCollapsed);
    }
  };

  return (
    <div
      className={cn(
        "h-screen bg-sidebar fixed left-0 top-0 z-30 transition-all duration-300 shadow-md flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="text-xl font-bold text-primary">
            TelecomInsight
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleCollapse}
          className="text-sidebar-foreground hover:bg-sidebar-accent ml-auto"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center p-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent group transition-colors",
                  "hover:text-primary"
                )}
              >
                <item.icon size={20} className="shrink-0" />
                {!collapsed && (
                  <span className="ml-3">{item.title}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        {!collapsed && (
          <div className="text-xs text-sidebar-foreground/60">
            © 2025 TelecomInsight
          </div>
        )}
      </div>
    </div>
  );
}
