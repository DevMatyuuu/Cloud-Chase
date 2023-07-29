import React from 'react';
import Product from '../components/Product';
import { useLocation } from 'react-router';
import useFetch from '../hooks/useFetch';
import Lottie from 'lottie-react'
import loading from '../assets/loading.json'
import noResult from '../assets/empty-cart.json'

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { data, isLoading } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);


  return (
    <div>
      <div className="container mx-auto md:mx-auto mt-10 md:mt-10 md:pb-[104px] pb-[265px]">
        <span className="uppercase text-white font-bold md:text-3xl sl:text-2xl sm:text-xl text-md md:mt-0 md:ml-3 ml-9">
          Result for: "{searchTerm}"
        </span>
        <div className='mx-auto flex md:gap-14'>
          {isLoading ? (
            // Show loading state
            <div className=" text-white mx-auto mt-20 md:pb-[145px] sl:pb-[60px] sm:pb-[50px] pb-14"><Lottie animationData={loading} className='mx-auto h-32'/></div>
          ) : data && data.length > 0 ? (
            // Show data if available
            data.map((product) => (
              <div className="grad bg-gradient-to-b from-gray-900 to-gray-600 w-full md:h-[320px] md:max-w-[300px] max-w-[180px] sm:h-[300px] sm:max-w-[200px] sl:h-[260px] sl:max-w-[240px] h-[250px] rounded-[8px] overflow-hidden relative group justify-center shadow-xl sm:mt-5 ml-9 md:ml-4 md:mt-8 mt-5" key={product.id}>
                <Product product={product} />
              </div>
            ))
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
      </div>
    </div>
  );
}

export default Search;
