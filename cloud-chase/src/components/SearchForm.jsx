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
    <div>
    <form
      onSubmit={submit}
      className={`${isAnimating ? 'animate-shake text-red-500' : 'animate-none'}`}
    >
      <div>
        <button className="absolute bg-yellow-500 w-[70px] md:h-[35px] sl:h-[35px] sm:h-[40px] h-[38px] rounded-r-lg md:ml-[250px] sl:ml-[218px] sm:ml-[430px] sl:mt-6 md:mt-[2px] ml-[280px] cursor-pointer">
          <FiSearch className="sl:mt-[0px] sl:ml-[25px] ml-7" />
        </button>
        <input
          onChange={searchInput}
          type="text"
          placeholder="Search product here..."
          className="input rounded-lg md:h-[35px] sl:h-[35px] sm:h-[40px] h-[38px] sl:mt-6 sl:w-72 sl:mr-16 md:w-80 lg:w-80 w-[350px] sm:w-[500px] sm:max-w-[1000px] max-w-[400px] md:pl-3 sl:pl-3 sl:text-xs md:pb-0 md:mt-[2px] pl-3 text-sm"
          value={searchTerm}
        />
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
