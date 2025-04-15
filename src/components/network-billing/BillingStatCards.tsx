
interface BillingStatsProps {
  networkUsage: string;
  billedUsage: string;
  discrepancy: string;
  discrepancyPercentage: string;
}

export function BillingStatCards({ 
  networkUsage, 
  billedUsage, 
  discrepancy, 
  discrepancyPercentage 
}: BillingStatsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium mb-1 text-blue-600">Total Network Usage</h3>
        <div className="text-3xl font-bold text-blue-700">{networkUsage}</div>
        <div className="text-sm text-blue-600/80 mt-1">Across all services</div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium mb-1 text-purple-600">Total Billed Usage</h3>
        <div className="text-3xl font-bold text-purple-700">{billedUsage}</div>
        <div className="text-sm text-purple-600/80 mt-1">From billing records</div>
      </div>
      
      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
        <h3 className="text-lg font-medium mb-1 text-red-600">Discrepancy</h3>
        <div className="text-3xl font-bold text-red-700">{discrepancy} ({discrepancyPercentage})</div>
        <div className="text-sm text-red-600/80 mt-1">Potential revenue leakage</div>
      </div>
    </div>
  );
}
