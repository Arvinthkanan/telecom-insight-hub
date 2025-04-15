
interface DiscrepancyRow {
  id: number;
  account: string;
  networkUsage: string;
  billedUsage: string;
  difference: string;
  percentage: string;
}

interface DiscrepancyTableProps {
  data: DiscrepancyRow[];
  totalCount: number;
  onViewAll: () => void;
}

export function DiscrepancyTable({ data, totalCount, onViewAll }: DiscrepancyTableProps) {
  return (
    <div>
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
            {data.map((row) => (
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
          Showing {data.length} of {totalCount} accounts
        </div>
        <Button variant="outline" size="sm" onClick={onViewAll}>View All</Button>
      </div>
    </div>
  );
}
