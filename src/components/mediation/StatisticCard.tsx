
interface StatisticCardProps {
  label: string;
  value: string;
  isPositive?: boolean;
}

export function StatisticCard({ label, value, isPositive = true }: StatisticCardProps) {
  const baseClasses = isPositive 
    ? "bg-green-500/10 border-green-500" 
    : "bg-destructive/10 border-destructive";
  const textClasses = isPositive ? "text-green-600" : "text-destructive";

  return (
    <div className={`p-4 rounded-lg ${baseClasses} border flex items-center justify-between`}>
      <span className={`${textClasses} font-semibold`}>{label}</span>
      <span className={`text-2xl font-bold ${textClasses}`}>{value}</span>
    </div>
  );
}
