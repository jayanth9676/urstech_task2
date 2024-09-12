import { BellIcon, SearchIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        <div className="relative">
          <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search a product"
            className="pl-10 pr-4 w-64"
          />
        </div>
        <Select defaultValue="2022-04-05">
          <SelectTrigger className="w-[180px] ml-4">
            <SelectValue placeholder="Select a date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2022-04-05">Tue, 5 Apr 2022</SelectItem>
            <SelectItem value="2022-04-06">Wed, 6 Apr 2022</SelectItem>
            <SelectItem value="2022-04-07">Thu, 7 Apr 2022</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-4">
          <BellIcon className="w-5 h-5" />
        </Button>
        <div className="flex items-center">
          <span className="mr-2">Hypebeast Store</span>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            H
          </div>
        </div>
      </div>
    </header>
  );
}