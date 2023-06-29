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
    <form onSubmit={submit} className={`${isAnimating ? 'animate-shake text-red-500' : 'animate-none'}`}>
      <div>
        <button className="absolute bg-yellow-500 md:w-[70px] sl:w-[70px] w-[80px] md:h-[35px] sl:h-[30px] h-[40px] rounded-r-lg md:ml-[250px] sl:ml-[155px] sl:mt-11 mt-28 ml-80 cursor-pointer">
          <FiSearch className="sl:mt-[7px] sl:ml-[28px] ml-[32px]" />
        </button>
        <input
          onChange={searchInput}
          type="text"
          placeholder="Search product here..."
          className="input rounded-lg md:h-[35px] sl:h-[30px] h-[40px] sl:mt-11 sl:w-56 sl:mr-16 md:w-80 w-[390px] md:pl-3 sl:pl-2 sl:text-xs md:pb-1 mt-28 ml-0 pl-5 pb-[2px] md:text-sm sm:text-sm text-sm"
          value={searchTerm}
        />
      </div>
    </form>
  );
}

export default SearchForm;
