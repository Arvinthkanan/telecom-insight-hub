
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FrequencyFilterProps {
  frequency: string;
  onFrequencyChange: (value: string) => void;
}

export function FrequencyFilter({ frequency, onFrequencyChange }: FrequencyFilterProps) {
  return (
    <Select value={frequency} onValueChange={onFrequencyChange}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Frequency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="daily">Daily</SelectItem>
        <SelectItem value="weekly">Weekly</SelectItem>
        <SelectItem value="monthly">Monthly</SelectItem>
      </SelectContent>
    </Select>
  );
}
