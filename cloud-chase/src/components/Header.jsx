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
      <nav className="bg-gradient-to-b from-gray-900 to-gray-600 p-4 ">
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
        <div className="flex items-center space-x-4">
          <SearchForm />
          <span className="text-white">
            <SlBag size={36}/>
          </span>
        </div>
      </div>
    </nav>
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
