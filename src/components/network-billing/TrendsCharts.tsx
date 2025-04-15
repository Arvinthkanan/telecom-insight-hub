
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

interface TrendsChartsProps {
  monthlyData: any[];
}

export function TrendsCharts({ monthlyData }: TrendsChartsProps) {
  return (
    <>
      <ChartCard 
        title="Monthly Network vs Billing Comparison" 
        description="Usage volume tracked in network vs charged in billing systems"
        action={
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
        }
      >
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="network" name="Network Usage" fill="#2563eb" />
              <Bar dataKey="billing" name="Billed Usage" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
      
      <div className="mt-6">
        <ChartCard 
          title="Discrepancy Trend" 
          description="Difference between network usage and billing records over time"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="difference" 
                  name="Discrepancy" 
                  stroke="#f43f5e" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </>
  );
}
