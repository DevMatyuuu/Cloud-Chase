import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import CategoryNav from './CategoryNav';
import { Link } from 'react-router-dom';
import { SlBag } from 'react-icons/sl';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import Note from './Note';
import Modal from 'react-modal'
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import CategoryDropdown from './CategoryDropdown';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const modalOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <nav className="hidden xl:block lg:block bg-gradient-to-b from-gray-900 to-gray-600 p-4 ">
        <div className="container mx-auto flex items-center justify-between lg:w-[90%]">
          <div className="flex items-center space-x-4">
            <span className="text-white lg:flex hidden">
              <Note />
            </span>
          </div>
          <div>
          <div className="text-white flex items-center space-x-2 flex-grow justify-center lg:ml-80">
            <img src={logo} alt="Your Logo" className="h-28 w-28" />
          </div>
          </div>
          <div className='flex items-center gap-5'>
          <div>
            <SearchForm />
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer relative">
              <SlBag size={36}/>
              <span onClick={() => setIsOpen(!isOpen)} className='absolute right-4 top-6 text-white cursor-pointer bg-black px-2  rounded-full'>{itemsAmount}</span>
          </div>
            <div
              className={`${isOpen ? 'right-0' : '-right-full'}  bg-gradient-to-b from-gray-900 to-gray-600 rounded-left-2xl shadow-xl fixed top-0 bottom-0 w-full z-10 max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
      </nav>

    {/* mobile navbar */}
      <nav className='lg:hidden xl:hidden bg-gradient-to-b from-gray-900 to-gray-600 p-4'>
        <div className="container mx-auto flex items-center justify-between w-[90%]">
          <div className='text-white cursor-pointer'>
            <FaBars onClick={modalOpen} size={28}/>
          </div>
          <div>
            <img src={logo} className='h-20'/>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='text-white flex items-center'>
            <SlBag size={28} />
            <span className='absolute top-14 bg-black px-2 right-10 rounded-full'>
              {itemsAmount}
            </span>
          </div>
        </div>
            <SearchForm />
      </nav>
      <CategoryNav />
      <Modal
              isOpen={openModal}
              contentLabel="Modal"
              className='lg:hidden xl:hidden modal z-50 fixed inset-0 flex items-center justify-center bg-transparent'
              overlayClassName="lg:hidden xl:hidden modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div data-aos='fade-in' data-aos-duration='500' className='mx-auto bg-slate-800/80 backdrop-blur-xl h-[400px] w-[350px] rounded-lg font-poppins shadow-lg'>
                  <IoClose size={20} onClick={modalClose} className=' text-white text-center mt-5 mr-5 float-right cursor-pointer'/>
                  <div className='justify-center text-center text-white grid-col-1 mt-12 text-xl'>
                    <div className='mb-14'>
                      <Link to={`/home`} onClick={modalClose} className='hover:text-slate-400'>Home</Link>
                    </div>
                    <div onClick={modalClose} className='flex justify-center mb-14 hover:text-slate-400 '>
                      <CategoryDropdown />
                    </div>
                    <div className='mb-14'>
                      <Link to={`/about`} onClick={modalClose} className='hover:text-slate-400'>About Us</Link>
                    </div>
                    <div>
                      <Link to={`/contact`} onClick={modalClose} className='hover:text-slate-400'>Contact Us</Link>
                    </div>
                  </div>
                </div>
                
      </Modal>
    </>
  );
}

export default Header;
