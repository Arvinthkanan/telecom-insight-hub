
import { useState } from "react";
import { Filter, Download } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
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

// Sample data
const monthlyData = [
  { month: "Jan 2023", totalCount: 15000000, exceptionCount: 3500000 },
  { month: "Feb 2023", totalCount: 14500000, exceptionCount: 3200000 },
  { month: "Mar 2023", totalCount: 16000000, exceptionCount: 3800000 },
  { month: "Apr 2023", totalCount: 15500000, exceptionCount: 3600000 },
  { month: "May 2023", totalCount: 16500000, exceptionCount: 4000000 },
  { month: "Jun 2023", totalCount: 15800000, exceptionCount: 3700000 },
];

const exceptionsData = [
  { category: "Unmatched", value: 7500000 },
  { category: "Total", value: 16000000 },
];

export default function MediationComparisonPage() {
  const [fromDate, setFromDate] = useState("2023-01-01");
  const [toDate, setToDate] = useState("2023-06-30");
  const [frequency, setFrequency] = useState("monthly");

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Mobile → Postpaid → Voice - RC Between Mediation & Billing for Voice
          </h1>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm">From Date:</label>
              <Input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-40"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm">To Date:</label>
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-40"
              />
            </div>
            
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="secondary">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            
            <Button>
              Go to KPI
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive flex items-center justify-between">
            <span className="text-destructive font-semibold">% Unmatched Count</span>
            <span className="text-2xl font-bold text-destructive">47.26%</span>
          </div>
          
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 flex items-center justify-between">
            <span className="text-green-600 font-semibold">% Repeated Count</span>
            <span className="text-2xl font-bold text-green-600">0.00%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Exceptions"
            className="min-h-[400px]"
          >
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={exceptionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#818cf8" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Total Count/Exception Count"
            className="min-h-[400px]"
          >
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
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
        </div>
      </div>
    </DashboardLayout>
  );
}
