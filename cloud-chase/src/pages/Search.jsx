import React from 'react';
import Product from '../components/Product';
import { useLocation } from 'react-router';
import useFetch from '../hooks/useFetch';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`);

  return (
    <div>
      <div className="container md:mx-auto md:mt-16 md:pb-16">
        <span className="uppercase text-white font-bold text-3xl">
          Result for: "{searchTerm}"
        </span>
        <div className='grid md:grid-cols-4 md:gap-10 grid-cols-2 md:mt-14 gap-7 gap-x-0'>
          {data && data.length > 0 ? (
            data.map((product) => (
              <div className="w-[300px]" key={product.id}>
                <Product product={product} />
              </div>
            ))
          ) : (
            <span className="text-white mx-auto md:font-bold md:text-2xl text-md mt-10 ml-10 md:mt-20 md:pb-16">No results found.</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
