
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ServiceTypeChartProps {
  data: any[];
}

export function ServiceTypeChart({ data }: ServiceTypeChartProps) {
  return (
    <ChartCard 
      title="Discrepancies by Service Type" 
      description="Network vs billing differences across service categories"
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
  );
}
