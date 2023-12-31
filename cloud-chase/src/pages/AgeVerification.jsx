import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from '@material-tailwind/react';
import logo from '../assets/logo.png';
import VerNote from '../components/VerNote';
import Modal from 'react-modal';
import denied from '../assets/denied.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AgeVerification({ onVerify, isVerified }) {
  const [age, setAge] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isVerified) {
      navigate('/home');
    }
  }, [isVerified, navigate]);

  const handleVerify = () => {
    const userAge = parseInt(age);

    if (userAge >= 21) {
      onVerify();
      navigate('/home');
    } else {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 1050);
    }
  };

  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="mt-40">
      <div className="container mx-auto">
        <Card className="bg-gradient-to-b from-gray-900 to-gray-600 text-center text-white md:h-[500px] sl:h-[450px] sm:h-[400px] h-[380px] md:w-[800px] sl:w-[700px] sm:w-[500px] w-[350px] mx-auto md:pt-5 rounded-2xl shadow-2xl">
          <div className="md:ml-8 mt-3 ml-5">
            <VerNote />
          </div>
          <div className="mx-auto">
            <div className="mx-auto md:mb-3">
              <img src={logo} className="md:h-32 sl:h-32 sm:h-28 h-20 sm:mb-2 mx-auto" alt="Logo" />
            </div>
            <div className="mx-auto md:mb-7 mb-5">
              <span className="uppercase font-bold md:text-2xl sl:text-2xl sm:text-lg text-sm">welcome to cloud chase!</span>
            </div>
            <div className="mx-auto md:mt-3 md:mb-8 mt-3 mb-7">
              <span className="uppercase font-bold md:text-md text-sm">
                please input your age to verify if you can access the shop
              </span>
            </div>
            <div className="mx-auto md:mt-3 md:mb-7 mt-3 mb-7">
              I am
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="bg-slate-900 md:w-12 w-10 text-center md:mr-2 md:pl-3 md:ml-2 mr-2 ml-2 rounded-lg"
              />
              years old
            </div>
            <div className="mx-auto md:mt-3 mt-5">
              <Button onClick={handleVerify} className="bg-yellow-500 md:px-16 text-[13px] text-black">
                verify
              </Button>
            </div>
          </div>
        </Card>
        <div>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="Modal"
            className="modal fixed inset-0 flex items-center justify-center"
            overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div  data-aos="zoom-out" className="flex-col md:mb-20 mx-auto">
              <div className="text-center text-red-400 text-xl md:mb-4 mb-4">Access Denied</div>
              <img src={denied} className="bg-transparent md:h-36 h-28 mx-auto text-center" alt="Denied" />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AgeVerification;
