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
      <header>
        <div className='flex w-full bg-gradient-to-b from-gray-900 to-gray-600 pb-10 sl:pb-4  md:pb-16 md:pt-16 justify-center items-center   md:gap-20 '>
          <div className='absolute md:mr-[1380px] sl:mr-[980px] sm:mr-[100px] mr-[100px] sl:mt-10 md:mt-5 text-white'>
            <Note />
          </div>
          <div className='mb-5'>
            <FaBars onClick={modalOpen} className='md:hidden sl:hidden lg:hidden text-2xl text-white cursor-pointer absolute ml-12' />
          </div>
          
          <div className='md:flex md:absolute sl:absolute absolute ml-[10px] md:mt-0 md:ml-5 md:mr-10  md:mx-auto sl:mx-auto sl:mt-7'>
            <Link to={`/home`}>
              <img
                src={logo}
                className='flex h-20 w-24 md:top-1 md:h-32 md:w-32 sl:w-32 sl:h-32'
              />
            </Link>
          </div>
          <div className='absolute md:flex md:mt-2 ml-1 md:ml-[1000px] sl:mt-0 sl:ml-[680px] mt-32 mx-auto'>
            <SearchForm />
          </div>
          <div  onClick={() => setIsOpen(!isOpen)}  className='flex ml-[280px] md:absolute md:ml-[1380px] sl:ml-[950px] sm:ml-[470px] md:mr-0 mr-10 md:mt-1 justify-end  sl:mt-4 md:max-w-[200px] sl:mr-24'>
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
      <Modal
              isOpen={openModal}
              contentLabel="Modal"
              className='modal z-50 fixed inset-0 flex items-center justify-center bg-transparent'
              overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
