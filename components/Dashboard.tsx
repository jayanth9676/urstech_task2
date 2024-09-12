import { RevenueChart } from "@/components/RevenueChart";
import { StatsCards } from "@/components/StatsCards";
import { ProductsTable } from "@/components/ProductsTable";

export function Dashboard() {
  return (
    <div className="p-8">
      <h3 className="text-3xl font-medium text-gray-700 dark:text-gray-200 mb-6">Dashboard</h3>
      <div className="grid grid-cols-3 gap-8 mb-8">
        <RevenueChart />
        <StatsCards />
      </div>
      <ProductsTable />
    </div>
  );
}