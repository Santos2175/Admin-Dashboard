import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, color: '#6366f1', href: '/' },
  { name: 'Products', icon: ShoppingBag, color: '#8B5CF6', href: '/products' },
  { name: 'Users', icon: Users, color: '#EC4899', href: '/users' },
  { name: 'Sales', icon: DollarSign, color: '#10B981', href: '/sales' },
  { name: 'Orders', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
  { name: 'Analytics', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
  { name: 'Settings', icon: Settings, color: '#6EE7B7', href: '/settings' },
];

export const salesData = [
  { name: 'Jul', sales: 4200 },
  { name: 'Aug', sales: 3800 },
  { name: 'Sep', sales: 5100 },
  { name: 'Oct', sales: 4600 },
  { name: 'Nov', sales: 5400 },
  { name: 'Dec', sales: 7200 },
  { name: 'Jan', sales: 6100 },
  { name: 'Feb', sales: 5900 },
  { name: 'Mar', sales: 6800 },
  { name: 'Apr', sales: 6300 },
  { name: 'May', sales: 7100 },
  { name: 'Jun', sales: 7500 },
];
