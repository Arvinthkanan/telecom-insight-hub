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
import { TrendsCharts } from "@/components/network-billing/TrendsCharts";
import { ServiceTypeChart } from "@/components/network-billing/ServiceTypeChart";
import { RegionalChart } from "@/components/network-billing/RegionalChart";

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Network vs Billing Analysis
          </h1>
          <p className="text-muted-foreground mt-1">
            Compare network usage data with billing records to identify discrepancies
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[140px] bg-secondary/10 border-secondary/20">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            variant="outline" 
            onClick={refreshData} 
            disabled={loading}
            className="bg-secondary/10 border-secondary/20 hover:bg-secondary/20"
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          
          <Button 
            variant="outline"
            className="bg-secondary/10 border-secondary/20 hover:bg-secondary/20"
          >
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-medium mb-1 text-blue-600">Total Network Usage</h3>
          <div className="text-3xl font-bold text-blue-700">65.2 TB</div>
          <div className="text-sm text-blue-600/80 mt-1">Across all services</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-medium mb-1 text-purple-600">Total Billed Usage</h3>
          <div className="text-3xl font-bold text-purple-700">62.1 TB</div>
          <div className="text-sm text-purple-600/80 mt-1">From billing records</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-medium mb-1 text-red-600">Discrepancy</h3>
          <div className="text-3xl font-bold text-red-700">3.1 TB (4.8%)</div>
          <div className="text-sm text-red-600/80 mt-1">Potential revenue leakage</div>
        </div>
      </div>

      <Tabs defaultValue="trends" className="mb-8">
        <TabsList className="mb-6 bg-secondary/10 border border-secondary/20">
          <TabsTrigger value="trends" className="data-[state=active]:bg-secondary/20">Trends</TabsTrigger>
          <TabsTrigger value="services" className="data-[state=active]:bg-secondary/20">By Service</TabsTrigger>
          <TabsTrigger value="regions" className="data-[state=active]:bg-secondary/20">By Region</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends">
          <TrendsCharts monthlyData={networkBillingMonthly} />
        </TabsContent>
        
        <TabsContent value="services">
          <ServiceTypeChart data={serviceTypeData} />
        </TabsContent>
        
        <TabsContent value="regions">
          <RegionalChart data={discrepanciesByRegion} />
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
