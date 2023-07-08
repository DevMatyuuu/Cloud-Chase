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
      <div className="container mx-auto md:mx-auto mt-10 md:mt-10 md:pb-[104px] sm:pb-12 pb-[117px]">
        <span className="uppercase text-white font-bold md:text-3xl text-md md:mt-0 md:ml-3 ml-9">
          Result for: "{searchTerm}"
        </span>
        <div className='grid md:grid-cols-4 sl:grid-cols-3 sm:grid-cols-3 grid-cols-2 md:gap-10 sl:gap-10 md:mt-5 md:h-auto md:w-auto w-100 md:ml-0 ml-3 gap-y-7 mt-5'>
          {isLoading ? (
            // Show loading state
            <span className="text-white mx-auto md:w-36 md:font-bold md:text-2xl md:mt-8 ml-32 mt-20 w-32 pb-[150px] md:ml-[650px] md:pb-36"><Lottie animationData={loading}/></span>
          ) : data && data.length > 0 ? (
            // Show data if available
            data.map((product) => (
              <div className="grad bg-gradient-to-b from-gray-900 to-gray-600 w-full md:h-[320px] md:max-w-[300px] sm:max-w-[200px] max-w-[180px] sm:h-[290px] sl:h-[240px] h-[250px] rounded-[8px] overflow-hidden relative group mx-auto justify-center shadow-xl  md:mt-5" key={product.id}>
                <Product product={product} />
              </div>
            ))
          ) : (
            // Show no results message
               <div className='md:max-w-[1000px] md:ml-[545px] w-full h-[340px] text-center'>
                <Lottie animationData={noResult} className='md:h-60'/>
                <div>
                  <span className='md:text-xl text-white'>No Result Found</span>
                </div>
               </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
