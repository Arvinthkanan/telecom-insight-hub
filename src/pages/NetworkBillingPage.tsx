
import { useState } from "react";
import { Download, Filter, RefreshCw } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  AreaChart,
  Area,
} from "recharts";

// Sample data
const networkBillingMonthly = [
  { name: "Jan", network: 4000, billing: 3800, difference: 200 },
  { name: "Feb", network: 4200, billing: 4000, difference: 200 },
  { name: "Mar", network: 5000, billing: 4600, difference: 400 },
  { name: "Apr", network: 4800, billing: 4500, difference: 300 },
  { name: "May", network: 5500, billing: 5200, difference: 300 },
  { name: "Jun", network: 6000, billing: 5800, difference: 200 },
  { name: "Jul", network: 5800, billing: 5500, difference: 300 },
  { name: "Aug", network: 6200, billing: 5900, difference: 300 },
  { name: "Sep", network: 6500, billing: 6200, difference: 300 },
  { name: "Oct", network: 6300, billing: 6000, difference: 300 },
  { name: "Nov", network: 6700, billing: 6400, difference: 300 },
  { name: "Dec", network: 7000, billing: 6700, difference: 300 },
];

const serviceTypeData = [
  { name: "Voice", network: 2500, billing: 2400, difference: 100 },
  { name: "SMS", network: 1500, billing: 1450, difference: 50 },
  { name: "Data", network: 8500, billing: 8200, difference: 300 },
  { name: "VAS", network: 1200, billing: 1150, difference: 50 },
];

const discrepanciesByRegion = [
  { name: "North", value: 300 },
  { name: "South", value: 450 },
  { name: "East", value: 250 },
  { name: "West", value: 380 },
  { name: "Central", value: 220 },
];

const tableData = [
  { id: 1, account: "ACC-12345", networkUsage: "1,245 MB", billedUsage: "1,200 MB", difference: "45 MB", percentage: "3.75%" },
  { id: 2, account: "ACC-67890", networkUsage: "850 Mins", billedUsage: "830 Mins", difference: "20 Mins", percentage: "2.41%" },
  { id: 3, account: "ACC-24680", networkUsage: "3,500 MB", billedUsage: "3,350 MB", difference: "150 MB", percentage: "4.48%" },
  { id: 4, account: "ACC-13579", networkUsage: "450 SMS", billedUsage: "445 SMS", difference: "5 SMS", percentage: "1.12%" },
  { id: 5, account: "ACC-97531", networkUsage: "2,100 MB", billedUsage: "2,020 MB", difference: "80 MB", percentage: "3.96%" },
];

export default function NetworkBillingPage() {
  const [timeRange, setTimeRange] = useState("12m");
  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    setLoading(true);
    // Simulate data refresh
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Network vs Billing Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Compare network usage data with billing records to identify discrepancies
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" onClick={refreshData} disabled={loading}>
            <RefreshCw size={16} className={`mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-1">Total Network Usage</h3>
          <div className="text-3xl font-bold">65.2 TB</div>
          <div className="text-sm text-muted-foreground mt-1">Across all services</div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-1">Total Billed Usage</h3>
          <div className="text-3xl font-bold">62.1 TB</div>
          <div className="text-sm text-muted-foreground mt-1">From billing records</div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-1">Discrepancy</h3>
          <div className="text-3xl font-bold text-destructive">3.1 TB (4.8%)</div>
          <div className="text-sm text-muted-foreground mt-1">Potential revenue leakage</div>
        </div>
      </div>

      <Tabs defaultValue="trends" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="services">By Service</TabsTrigger>
          <TabsTrigger value="regions">By Region</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends">
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
                <BarChart data={networkBillingMonthly}>
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
                  <LineChart data={networkBillingMonthly}>
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
        </TabsContent>
        
        <TabsContent value="services">
          <ChartCard 
            title="Discrepancies by Service Type" 
            description="Network vs billing differences across service categories"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceTypeData}>
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
        </TabsContent>
        
        <TabsContent value="regions">
          <ChartCard 
            title="Discrepancies by Region" 
            description="Distribution of billing discrepancies across geographic regions"
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={discrepanciesByRegion}>
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
        </TabsContent>
      </Tabs>

      <ChartCard 
        title="Top Discrepancy Accounts" 
        description="Accounts with the highest discrepancies between network and billing"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-medium">Account ID</th>
                <th className="py-3 px-4 text-left font-medium">Network Usage</th>
                <th className="py-3 px-4 text-left font-medium">Billed Usage</th>
                <th className="py-3 px-4 text-left font-medium">Difference</th>
                <th className="py-3 px-4 text-left font-medium">% Diff</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium">{row.account}</td>
                  <td className="py-3 px-4">{row.networkUsage}</td>
                  <td className="py-3 px-4">{row.billedUsage}</td>
                  <td className="py-3 px-4 text-destructive">{row.difference}</td>
                  <td className="py-3 px-4">{row.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing 5 of 145 accounts
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </div>
      </ChartCard>
    </DashboardLayout>
  );
}
