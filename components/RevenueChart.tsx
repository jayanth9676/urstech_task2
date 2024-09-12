import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "@/components/Chart";

export function RevenueChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-3xl font-bold">$2,810.00</span>
            <span className="text-green-500 ml-2">+8.20%</span>
          </div>
          <div className="flex space-x-2">
            <span className="flex items-center text-green-500">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Total Earn
            </span>
            <span className="flex items-center text-orange-500">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Total Views
            </span>
          </div>
        </div>
        <Chart />
      </CardContent>
    </Card>
  );
}