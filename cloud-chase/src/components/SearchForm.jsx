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
        <button className="absolute bg-yellow-500 w-[70px] md:h-[35px] sl:h-[30px] h-[35px] rounded-r-lg md:ml-[250px] sl:ml-[155px] sl:mt-11 md:mt-0 mt-28 ml-[250px] cursor-pointer">
          <FiSearch className="sl:mt-[7px] sl:ml-[28px] ml-7" />
        </button>
        <input
          onChange={searchInput}
          type="text"
          placeholder="Search product here..."
          className="input rounded-lg md:h-[35px] sl:h-[30px] h-[35px] sl:mt-11 sl:w-56 sl:mr-16 md:w-80 lg:w-80 w-80 md:pl-3 sl:pl-2 sl:text-xs md:pb-1 md:mt-0 mt-28 pl-3 pb-1  jusitfy-center text-sm"
          value={searchTerm}
        />
      </div>
    </form>
  );
}

export default SearchForm;
