import Link from 'next/link';
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon, UsersIcon, CogIcon, LogOutIcon } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100">
      <div className="p-4">
        <h1 className="text-2xl font-bold flex items-center">
          <ShoppingBagIcon className="mr-2" />
          Backing
        </h1>
      </div>
      <nav className="mt-8">
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800">
          <HomeIcon className="w-5 h-5 mr-3" />
          Home
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800">
          <ShoppingBagIcon className="w-5 h-5 mr-3" />
          Sales
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-white bg-gray-800">
          <ShoppingCartIcon className="w-5 h-5 mr-3" />
          Products
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800">
          <UsersIcon className="w-5 h-5 mr-3" />
          Customers
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800">
          <CogIcon className="w-5 h-5 mr-3" />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <Link href="#" className="flex items-center text-gray-300 hover:text-white">
          <LogOutIcon className="w-5 h-5 mr-3" />
          Log Out
        </Link>
      </div>
    </aside>
  );
}