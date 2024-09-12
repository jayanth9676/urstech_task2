import { CurrencyDollarIcon, UsersIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

interface StatsCardProps {
  title: string;
  value: string;
  icon: 'dollar' | 'users' | 'shopping-cart';
}

export function StatsCard({ title, value, icon }: StatsCardProps) {
  const IconComponent = {
    'dollar': CurrencyDollarIcon,
    'users': UsersIcon,
    'shopping-cart': ShoppingCartIcon,
  }[icon];

  return (
    <div className="w-full md:w-1/3 px-6 py-6 sm:py-3">
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white dark:bg-gray-800">
        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">{value}</h4>
          <div className="text-gray-500 dark:text-gray-400">{title}</div>
        </div>
      </div>
    </div>
  );
}