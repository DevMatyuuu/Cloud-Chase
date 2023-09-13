import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import useFirestoreData from '../hooks/useFirestoreData';
import Product from '../components/Product';
import Lottie from 'lottie-react'
import loading from '../assets/loading.json'

function Products() {
  const { product } = useFirestoreData();
  const { id } = useParams();
  const paramsId = id;
  
  const selectedCategory = product.filter(product => product.categories === paramsId);


  return (
    <div className='h-[100vh] font-poppins'>
      <div className='container mx-auto'>
        <main>
          <div className='uppercase text-white font-bold xl:text-4xl sl:text-2xl sm:text-xl text-md xl:ml-7'>{paramsId}</div>
          {paramsId != 'all' ?
           selectedCategory.length > 0 ? (
            <div className='grid lg:grid-cols-4 sl:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-10 sl:gap-10 lg:h-auto lg:w-auto w-100 lg:ml-0 ml-0 gap-7 gap-x-0 mt-10'>
              {selectedCategory.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Product products={product} />
                </motion.div>
              ))}
            </div>) : 
          // Show loading state
            <div className="text-white mx-auto text-center lg:mx-auto lg:w-36 lg:font-bold lg:text-2xl lg:mt-40 mt-32 w-32 pb-[150px] lg:pb-24">
              <div className='mx-auto  text-center'>
                <Lottie animationData={loading}/>
               </div>
            </div> : product.length > 0 ? (
            <div className='grid lg:grid-cols-4 sl:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-10 sl:gap-10 lg:h-auto lg:w-auto w-100 lg:ml-0 ml-0 gap-7 gap-x-0 mt-10'>
              {product.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Product products={product} />
                </motion.div>
              ))}
            </div>) : 
          // Show loading state
            <div className="text-white mx-auto text-center lg:mx-auto lg:w-36 lg:font-bold lg:text-2xl lg:mt-40 mt-32 w-32 pb-[150px] lg:pb-24">
              <div className='mx-auto  text-center'>
                <Lottie animationData={loading}/>
               </div>
            </div> }
        </main>
      </div>
    </div>
  );
}

export default Products;