import React, {useState} from 'react';
import logo from '../assets/logo.png';
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';
import { SlBag } from 'react-icons/sl';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import Note from './Note';
import { Button, Drawer, List, ListItem } from '@material-tailwind/react';

function Header() {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [open, setOpen] = useState(false);


  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <header>
        <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600 pb-10 sl:pb-4  md:pb-16 md:pt-16 justify-center items-center   md:gap-20 '>
          <div className='absolute md:mr-[1440px] sl:mr-[980px] sm:mr-[480px] mr-[170px] sl:mt-10 text-white'>
            <Note />
          </div>
          <aside className=''>
            <Button onClick={openDrawer} className='md:hidden sl:hidden lg:hidden absolute ml-14 mr-56'>Open Drawer</Button>
             <Drawer className='pl-5 z-50 bg-slate-500 pt-10 md:hidden sl:hidden' open={open} onClose={closeDrawer}>
              <button onClick={closeDrawer} className='float-right pr-10 text-white'>x</button>
                <List className='text-white pt-10 gap-y-5'>
                  <ListItem>
                    <Link>Home</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Products</Link>
                  </ListItem>
                  <ListItem>
                    <Link>About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link>Contact Us</Link>
                  </ListItem>
                </List>
              </Drawer>
          </aside>
          <div className='md:flex md:absolute sl:absolute absolute ml-[10px] md:mt-0 md:ml-5 md:mr-10  md:mx-auto sl:mx-auto sl:mt-7'>
            <Link to={`/home`}>
              <img
                src={logo}
                className='flex h-20 w-24 md:top-1 md:h-32 md:w-32 sl:w-32 sl:h-32'
              />
            </Link>
          </div>
          <div className='absolute md:flex md:mt-2 ml-1 md:ml-[1050px] sl:mt-0 sl:ml-[680px] mt-32 mx-auto'>
            <SearchForm />
          </div>
          <div  onClick={() => setIsOpen(!isOpen)}  className='flex md:absolute md:ml-[1450px] sl:ml-[950px] sm:ml-[470px] md:mr-0 mr-10 md:mt-1 justify-end  sl:mt-4 md:max-w-[200px] sl:mr-24'>
            <SlBag  className='flex cursor-pointer h-28 w-8 right-0 top-3 text-white sl:ml-28' />
            <div className='absolute md:mt-16 md:mr-5 sl:mr-5 mr-5'>
            <div onClick={() => setIsOpen(!isOpen)} className='absolute  bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white font-[8px] w-[20px] h-[20px] rounded-full md:mt-0 sl:mt-0 sl:top-16 mt-[64px] flex justify-center items-center tracking-[-0.1em] cursor-pointer'>
              {itemsAmount}
            </div>
            </div>
          </div>
          <div
            className={`${isOpen ? 'right-0' : '-right-full'}  bg-gradient-to-b from-gray-900 to-gray-600 rounded-left-2xl shadow-xl fixed top-0 bottom-0 w-full z-10 max-w-[500px] transition-all duration-300`}
          >
            <Cart />
          </div>
        </div>
      </header>
      <CategoryNav />
    </>
  );
}

export default Header;
