
import { useState } from "react";
import { Filter } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { DateRangeFilter } from "@/components/mediation/DateRangeFilter";
import { FrequencyFilter } from "@/components/mediation/FrequencyFilter";
import { StatisticCard } from "@/components/mediation/StatisticCard";
import { ExceptionsChart } from "@/components/mediation/ExceptionsChart";
import { ComparisonChart } from "@/components/mediation/ComparisonChart";

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
            <DateRangeFilter
              fromDate={fromDate}
              toDate={toDate}
              onFromDateChange={setFromDate}
              onToDateChange={setToDate}
            />
            
            <FrequencyFilter
              frequency={frequency}
              onFrequencyChange={setFrequency}
            />
            
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
          <StatisticCard 
            label="% Unmatched Count"
            value="47.26%"
            isPositive={false}
          />
          <StatisticCard 
            label="% Repeated Count"
            value="0.00%"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExceptionsChart data={exceptionsData} />
          <ComparisonChart data={monthlyData} />
        </div>
      </div>
    </DashboardLayout>
  );
}
