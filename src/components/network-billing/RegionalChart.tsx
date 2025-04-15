
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface RegionalChartProps {
  data: any[];
}

export function RegionalChart({ data }: RegionalChartProps) {
  return (
    <ChartCard 
      title="Discrepancies by Region" 
      description="Distribution of billing discrepancies across geographic regions"
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="value" 
              name="Discrepancy Value" 
              fill="#8b5cf6" 
              stroke="#8b5cf6" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
