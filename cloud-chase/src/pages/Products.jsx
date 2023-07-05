import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';
import Product from '../components/Product';
import Lottie from 'lottie-react'
import loading from '../assets/loading.json'

function Products({ product }) {
  const { id } = useParams();
  const { data,  isLoading } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className='mb-10 pt-0 md:pb-[100px] sl:mb-60 sm:pt-0 font-poppins'>
      <div className='container mx-auto'>
        <main>
          <motion.div
            className='text-white text-4xl uppercase font-bold ml-5 sl:ml-20 md:ml-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <div className='grid md:grid-cols-4 sl:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-10 sl:gap-10 md:mt-20 md:h-auto md:w-auto w-100 md:ml-0 ml-0 gap-7 gap-x-0 mt-10'>
          {isLoading ? (
            // Show loading state
            <span className="text-white mx-auto md:w-36 md:font-bold md:text-2xl md:mt-20 ml-32 mt-20 w-32 pb-[150px] md:ml-[700px] md:pb-24"><Lottie animationData={loading}/></span>
              ) : data && data.length > 0 ? (
               data?.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Product product={product} />
              </motion.div>
            )
            )) : '' }
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;