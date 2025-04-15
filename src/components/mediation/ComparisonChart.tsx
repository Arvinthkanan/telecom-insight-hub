
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

interface ComparisonData {
  month: string;
  totalCount: number;
  exceptionCount: number;
}

interface ComparisonChartProps {
  data: ComparisonData[];
}

export function ComparisonChart({ data }: ComparisonChartProps) {
  return (
    <ChartCard
      title="Total Count/Exception Count"
      className="min-h-[400px]"
    >
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalCount" name="Total Count" fill="#818cf8" />
          <Bar dataKey="exceptionCount" name="Exception Count" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
