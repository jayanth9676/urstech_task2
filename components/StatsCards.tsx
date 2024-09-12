import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ShoppingCartIcon, PackageIcon, UsersIcon } from 'lucide-react';

export function StatsCards() {
  return (
    <div className="space-y-4">
      <StatsCard title="Sales Today" value="$120" icon={<ShoppingCartIcon />} color="bg-orange-500" />
      <StatsCard title="Total Earning" value="$81,020" icon={<ArrowUpIcon />} color="bg-green-500" />
      <StatsCard title="Total Orders" value="102" icon={<PackageIcon />} color="bg-blue-500" />
      <StatsCard title="Visitor Today" value="$81,020" icon={<UsersIcon />} color="bg-purple-500" />
    </div>
  );
}

function StatsCard({ title, value, icon, color }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center text-white`}>
            {icon}
          </div>
        </div>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-sm text-green-500 mt-1">+3.06% More than usual</p>
      </CardContent>
    </Card>
  );
}