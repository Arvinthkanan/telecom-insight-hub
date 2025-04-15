
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function ChartCard({ 
  title, 
  description, 
  children, 
  className,
  action
}: ChartCardProps) {
  return (
    <Card className={cn("bg-gradient-to-br from-card/50 to-card border-primary/10 shadow-lg backdrop-blur-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-muted-foreground/80">{description}</CardDescription>
          )}
        </div>
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        {children}
      </CardContent>
    </Card>
  );
}
