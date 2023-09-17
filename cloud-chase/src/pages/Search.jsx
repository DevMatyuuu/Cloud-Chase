import React from 'react';
import Product from '../components/Product';
import { useLocation } from 'react-router';
import Lottie from 'lottie-react'
import loading from '../assets/loading.json'
import noResult from '../assets/empty-cart.json'
import useFirestoreData from '../hooks/useFirestoreData';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { product } = useFirestoreData();

  const data = product.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  console.log(data);

  return (
    <div className='h-[100vh]'>
      <div className="container mx-auto  md:mx-auto mt-10 md:mt-10 md:pb-[104px] pb-[265px]">
        <main>
          <span className="uppercase text-white font-bold md:text-3xl sl:text-2xl sm:text-xl text-md ">
            {data.length > 1 ? <div className='xl:ml-14 ml-6'>{data.length} results for: "{searchTerm}"</div> : <div className='xl:ml-14 ml-6'>{data.length} result for: "{searchTerm}"</div>} 
          </span>
          <div className='w-auto xl:w-auto mx-auto'>
            {data && data.length > 0 ? (
              // Show data if available
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  lg:gap-5 lg:h-auto lg:w-auto w-100 lg:ml-6 ml-0 xl:gap-0 gap-x-0 mt-10" key={product.id}>
                  {data.map((products) => (
                  <Product products={products}/>
                  ))}
                </div>
            ) : (
              // Show no results message
                <div className='w-full md:h-[355px] sm:h-60 h-[200px] text-center mt-16 md:mt-0 sl:mt-5 sm:mt-5 sl:pb-[249px]'>
                  <Lottie animationData={noResult} className='md:h-80 sl:h-80 sm:h-60 h-40'/>
                  <div>
                    <span className='md:text-xl sl:text-xl sm:text-lg text-white'>No Result Found</span>
                  </div>
                </div>
            )}
            </div>
          </main>
        </div>
      </div>
  );
}

export default Search;
