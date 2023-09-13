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
      className={`${isAnimating ? 'animate-shake text-red-500' : 'text-white'}`}
    >
      <div>
        <button className="absolute bg-gradient-to-r from-gray-700 via-gray-900 to-black w-[70px] lg:w-[90px] lg:h-[40px] lg:ml-[230px] md:h-[35px] sl:h-[35px] sm:h-[40px] h-[38px] rounded-r-lg md:ml-[250px] sl:ml-[218px] sm:ml-[430px] sl:mt-6 md:mt-[2px] ml-[210px] cursor-pointer">
          <FiSearch className="sl:mt-[0px] sl:ml-[25px] ml-7 lg:ml-9 " />
        </button>
        <input
          onChange={searchInput}
          type="text"
          placeholder="Search product here..."
          className="input text-black rounded-lg lg::h-[35px] sl:h-[35px] sm:h-[40px] h-[38px] sl:mt-6 sl:w-72 sl:mr-16 md:w-80 lg:w-80 w-[280px] sm:w-[500px] sm:max-w-[1000px] max-w-[400px] md:pl-3 sl:pl-3 sl:text-xs md:pb-0 md:mt-[2px] pl-3 text-sm"
          value={searchTerm}
        />
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
