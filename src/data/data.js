import {
  BarChart2,
  ShoppingBag,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Settings,
} from 'lucide-react';

//for navbar
export const SIDEBAR_ITEMS = [
  { name: 'Overview', icon: BarChart2, color: '#6366f1', href: '/' },
  { name: 'Products', icon: ShoppingBag, color: '#8B5CF6', href: '/products' },
  { name: 'Users', icon: Users, color: '#EC4899', href: '/users' },
  { name: 'Sales', icon: DollarSign, color: '#10B981', href: '/sales' },
  { name: 'Orders', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
  { name: 'Analytics', icon: TrendingUp, color: '#3B82F6', href: '/analytics' },
  { name: 'Settings', icon: Settings, color: '#6EE7B7', href: '/settings' },
];

//sales overview chart
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

//category distribution chart
export const categoryData = [
  { name: 'Electronics', value: 4500 },
  { name: 'Clothing', value: 3200 },
  { name: 'Home & Garden', value: 2800 },
  { name: 'Books', value: 2100 },
  { name: 'Sports & Outdoors', value: 1900 },
];

export const CATEGORY_COLORS = [
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
  '#10B981',
  '#F59E0B',
];

//sales channel chart data
export const CHANNEL_COLORS = [
  '#6366F1',
  '#8B5CF6',
  '#EC4899',
  '#10B981',
  '#F59E0B',
];

export const SALES_CHANNEL_DATA = [
  { name: 'Website', value: 45600 },
  { name: 'Mobile App', value: 38200 },
  { name: 'Marketplace', value: 29800 },
  { name: 'Social Media', value: 18700 },
];

//products data
export const PRODUCT_DATA = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    img: '/wirelessEarbud.png',
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: 'Leather Wallet',
    category: 'Accessories',
    img: '/leatherWallet.png',
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Electronics',
    img: '/smartWatch.png',
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: 'Yoga Mat',
    category: 'Fitness',
    img: '/yogaMat.png',
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: 'Coffee Maker',
    category: 'Home',
    img: '/coffeeMaker.png',
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

//sales data
export const salesTrendData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4500 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 5500 },
];

//user stats
export const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: '2.4%',
};

//user data
export const userData = [
  {
    id: 1,
    name: 'Santosh Gurung',
    email: 'santoshgurung2175@gmail.com',
    role: 'Customer',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Bibash Gurung',
    email: 'bibashgurung222@gmail.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Sujan Adhikari',
    email: 'sujanadhikari215@gmail.com',
    role: 'Customer',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Rita Sharma',
    email: 'ritasharma245@gmail.com',
    role: 'Customer',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Rupsana Shrestha',
    email: 'rupsanashrestha542@gmail.com',
    role: 'Moderator',
    status: 'Active',
  },
];
