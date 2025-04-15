
import { BarChart3, Download, Phone, Settings, SignalHigh, Wallet } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

// Sample data for charts
const networkBillingData = [
  { name: 'Jan', network: 4000, billing: 3800, amt: 4500 },
  { name: 'Feb', network: 4200, billing: 4000, amt: 4500 },
  { name: 'Mar', network: 5000, billing: 4600, amt: 5500 },
  { name: 'Apr', network: 4800, billing: 4500, amt: 5000 },
  { name: 'May', network: 5500, billing: 5200, amt: 6000 },
  { name: 'Jun', network: 6000, billing: 5800, amt: 6500 },
];

const usageData = [
  { name: 'Jan', voice: 1400, sms: 800, data: 4000 },
  { name: 'Feb', voice: 1300, sms: 700, data: 4200 },
  { name: 'Mar', voice: 1200, sms: 900, data: 4500 },
  { name: 'Apr', voice: 1400, sms: 1000, data: 4800 },
  { name: 'May', voice: 1500, sms: 1100, data: 5000 },
  { name: 'Jun', voice: 1300, sms: 900, data: 5200 },
];

const alarmData = [
  { name: 'Critical', value: 12, color: '#f43f5e' },
  { name: 'Major', value: 28, color: '#f97316' },
  { name: 'Minor', value: 45, color: '#facc15' },
  { name: 'Warning', value: 60, color: '#2563eb' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to the TelecomInsight dashboard. Here's your network status at a glance.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Active Connections" 
          value="1.38M" 
          icon={<SignalHigh size={24} />}
          trend={{ value: 8.2, positive: true }}
        />
        <StatCard 
          title="Data Usage" 
          value="28.6 TB" 
          icon={<BarChart3 size={24} />}
          trend={{ value: 12.5, positive: true }}
        />
        <StatCard 
          title="Voice Traffic" 
          value="5.2M mins" 
          icon={<Phone size={24} />}
          trend={{ value: 3.7, positive: false }}
        />
        <StatCard 
          title="Revenue" 
          value="$14.3M" 
          icon={<Wallet size={24} />}
          trend={{ value: 4.1, positive: true }}
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard 
          title="Network vs Billing" 
          description="Comparison of network data and billing records"
          action={
            <Button variant="outline" size="sm">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          }
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={networkBillingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="network" name="Network" fill="#2563eb" />
                <Bar dataKey="billing" name="Billing" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard 
          title="Voice / SMS / Data Usage" 
          description="Monthly trend across services"
          action={
            <Button variant="outline" size="sm">
              <Settings size={16} className="mr-2" />
              Filter
            </Button>
          }
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="voice" name="Voice" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="sms" name="SMS" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="data" name="Data" stroke="#f97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Alarm Distribution" description="Current alarm status by severity">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={alarmData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {alarmData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard 
          title="Recent Alarms" 
          description="Latest system notifications"
          className="col-span-1 lg:col-span-2"
        >
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {[
              { id: 1, title: "Network Outage", severity: "Critical", time: "2 minutes ago", location: "Cell Tower #A245" },
              { id: 2, title: "Billing Error", severity: "Major", time: "10 minutes ago", location: "Billing System" },
              { id: 3, title: "Signal Degradation", severity: "Minor", time: "25 minutes ago", location: "Sector 12B" },
              { id: 4, title: "Database Slowdown", severity: "Warning", time: "1 hour ago", location: "Primary CRM" },
              { id: 5, title: "API Timeout", severity: "Warning", time: "3 hours ago", location: "Integration Service" }
            ].map(alarm => (
              <div key={alarm.id} className="p-3 border border-border rounded-md hover:bg-muted/50 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{alarm.title}</h4>
                    <p className="text-sm text-muted-foreground">{alarm.location}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      alarm.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      alarm.severity === 'Major' ? 'bg-orange-100 text-orange-700' :
                      alarm.severity === 'Minor' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {alarm.severity}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">{alarm.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full">View All Alarms</Button>
          </div>
        </ChartCard>
      </div>
    </DashboardLayout>
  );
}
