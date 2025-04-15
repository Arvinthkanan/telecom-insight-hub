import { useEffect, useState } from "react";
import { parseCSV } from "@/lib/csvParser";
import { TrendsCharts } from "@/components/network-billing/TrendsCharts";
import { ServiceTypeChart } from "@/components/network-billing/ServiceTypeChart";
import { RegionalChart } from "@/components/network-billing/RegionalChart";

export default function NetworkBillingPage() {
  const [networkBillingMonthly, setNetworkBillingMonthly] = useState([]);
  const [serviceTypeData, setServiceTypeData] = useState([]);
  const [discrepanciesByRegion, setDiscrepanciesByRegion] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const networkBillingData = await parseCSV("/src/KRA4-Billing-100rows.csv");
        const serviceTypeData = await parseCSV("/src/KRA4-CRM-100rows.csv");

        // Transform data as needed for charts
        setNetworkBillingMonthly(networkBillingData.map((row) => ({
          name: row.Month,
          network: parseFloat(row.NetworkUsage),
          billing: parseFloat(row.BillingUsage),
          difference: parseFloat(row.Difference),
        })));

        setServiceTypeData(serviceTypeData.map((row) => ({
          name: row.ServiceType,
          network: parseFloat(row.NetworkUsage),
          billing: parseFloat(row.BillingUsage),
          difference: parseFloat(row.Difference),
        })));

        // Example for discrepancies by region
        setDiscrepanciesByRegion([
          { name: "North", value: 300 },
          { name: "South", value: 450 },
          { name: "East", value: 250 },
          { name: "West", value: 380 },
          { name: "Central", value: 220 },
        ]);
      } catch (error) {
        console.error("Error loading CSV data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendsCharts monthlyData={networkBillingMonthly} />
        <ServiceTypeChart data={serviceTypeData} />
        <RegionalChart data={discrepanciesByRegion} />
      </div>
    </DashboardLayout>
  );
}