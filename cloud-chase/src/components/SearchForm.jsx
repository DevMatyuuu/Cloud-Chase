import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';

function SearchForm() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const searchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <div className='mx-auto lg:mx-0 lg:w-full w-[90%]'>
    <form
      onSubmit={submit}
      className={`${isAnimating ? 'animate-shake text-red-500' : 'text-white'}`}
    >
      <div>
        <div className='flex items-center lg:w-[300px] relative'>
          <button className="absolute bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:h-[5vh] h-[5vh] lg:w-[25%] w-[25%] rounded-r-lg right-0 cursor-pointer">
            <FiSearch  className='mx-auto'/>
          </button>
          <input
            onChange={searchInput}
            type="text"
            placeholder="Search product here..."
            className="input text-black rounded-lg h-[5vh] w-[100%] md:pl-3 sl:pl-3 sl:text-xs  pl-3 text-sm"
            value={searchTerm}
          />
        </div>
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
