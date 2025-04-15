
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ExceptionData {
  category: string;
  value: number;
}

interface ExceptionsChartProps {
  data: ExceptionData[];
}

export function ExceptionsChart({ data }: ExceptionsChartProps) {
  return (
    <ChartCard
      title="Exceptions"
      className="min-h-[400px]"
    >
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#818cf8" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
