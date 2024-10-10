import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '../../data/data.js';
import { Edit, Search, Trash2 } from 'lucide-react';

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.category.toLocaleLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-6 border border-gray-700 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <div className='flex justify-between max-sm:flex-col-reverse items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
        <div className='relative max-sm:mb-3'>
          <input
            type='text'
            placeholder='search products...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Stock
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Sales
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filteredProducts.map((product) => (
              <motion.tr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}>
                <td className='px-6 py-4 text-sm whitespace-nowrap font-medium text-gray-100 gap-2 flex items-center'>
                  <img
                    src={product.img}
                    alt='Product img'
                    className='size-10 rounded-full bg-transparent object-cover'
                  />
                  {product.name}
                </td>
                <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                  {product.category}
                </td>
                <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                  ${product.price.toFixed(2)}
                </td>
                <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                  {product.stock}
                </td>
                <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                  {product.sales}
                </td>
                <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-300'>
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                    <Edit size={18} />
                  </button>
                  <button className='text-red-400 hover:text-red-300'>
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
