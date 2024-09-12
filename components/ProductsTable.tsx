import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ProductsTable() {
  const products = [
    { id: 1, name: "T-SHIRT OWN THE RUN", price: 46.52, status: "Available", sell: 128, view: 12308, earning: 5954 },
    { id: 2, name: "T-SHIRT BOXY ADICOLOR CLASSIC", price: 48.76, status: "Out of stock", sell: 102, view: 14120, earning: 4973 },
    { id: 3, name: "T-SHIRT ESSENTIALS 3-STRIPES", price: 48.00, status: "Out of stock", sell: 80, view: 10285, earning: 3840 },
    { id: 4, name: "TOKYO PACK SHORT SLEEVE TEE", price: 48.76, status: "Active", sell: 72, view: 12008, earning: 3510 },
    { id: 5, name: "JERSEY JUVENTUS AWAY 21/22", price: 66.18, status: "Out of stock", sell: 60, view: 11092, earning: 3970 },
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <CardTitle>Products</CardTitle>
          <div className="flex items-center space-x-4">
            <Select defaultValue="most-sell">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="most-sell">Most Sell</SelectItem>
                <SelectItem value="least-sell">Least Sell</SelectItem>
                <SelectItem value="highest-price">Highest Price</SelectItem>
                <SelectItem value="lowest-price">Lowest Price</SelectItem>
              </SelectContent>
            </Select>
            <Button>+ Add Product</Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Sell</TableHead>
              <TableHead>View</TableHead>
              <TableHead>Earning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <div className="w-10 h-10 bg-gray-200 rounded"></div>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={product.status === "Available" || product.status === "Active" ? "success" : "destructive"}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{product.sell}</TableCell>
                <TableCell>{product.view.toLocaleString()}</TableCell>
                <TableCell>${product.earning.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}