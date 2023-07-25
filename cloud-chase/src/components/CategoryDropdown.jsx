import React, { useState } from 'react';
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa'

function CategoryDropdown() {
  const { data } = useFetch('/categories');
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => setOpenMenu(true);
  const handleMenuClose = () => setOpenMenu(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <div
          className='cursor-pointer flex gap-2'
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          Products{" "}
          <FaAngleDown />
        </div>
      </MenuHandler>
      <MenuList
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMenuClose}
        className="z-50 w-[11rem] rounded-lg h-[18rem] grid-cols-7 gap-6 text-[17px] mt-2 pt-4 font-semibold bg-gradient-to-b from-gray-900 to-gray-600 text-white overflow-visible"
      >
        <ul className="col-span-4 flex w-full flex-col gap-3">
          {data?.map((category) => (
            <MenuItem key={category.id} className='hover:bg-slate-100/10 rounded-lg mx-auto py-2 w-[9rem]'>
              <Link
                className="z-50 hover:after:absolute hover:after:block hover:after:h-[2px] hover:rounded-md  hover:after:transform hover:after:scale-x-0 hover:after:transition-transform hover:after:duration-200 hover:after:origin-left focus:scale-110 focus:after:absolute focus:after:block focus:after:h-[2px] focus:after:bg-black focus:after:transform focus:after:scale-x-0 focus:after:transition-transform focus:after:duration-300 focus:after:origin-left"
                to={`/products/${category.id}`}
              >
                {category.attributes.title}
              </Link>
            </MenuItem>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}

export default CategoryDropdown;
