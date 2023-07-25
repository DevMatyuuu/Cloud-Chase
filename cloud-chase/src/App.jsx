import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AgeVerification from './pages/AgeVerification';
import reload from './assets/reload.json'
import Lottie from 'lottie-react'

function App() {
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const storedVerification = localStorage.getItem('isVerified');
    setIsVerified(storedVerification === 'true');

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleVerify = () => {
    setIsVerified(true);
    localStorage.setItem('isVerified', 'true');
  };

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <>
          <div className="grid loading md:w-36 md:mt-[350px] mt-80 w-20 md:pb-[380px] mx-auto">
            <p className='text-center mb-5 text-lg text-white'>loading</p>
            <Lottie animationData={reload}/></div>
          </>
        ) : (
          // Contents below will show once loading is complete
          <Routes>
            <Route
              path="/"
              element={<AgeVerification onVerify={handleVerify} isVerified={isVerified} />}
            />
            {isVerified ? (
              <>
                <Route
                  path="/home"
                  element={
                    <>
                      <Header />
                      <Home />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/products/:id"
                  element={
                    <>
                      <Header />
                      <Products />
                      {!loading && <Footer />}
                    </>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <>
                      <Header />
                      <ProductDetails />
                      {!loading && <Footer />}
                    </>
                  }
                />
                <Route
                  path="/search"
                  element={
                    <>
                      <Header />
                      <Search />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <Header />
                      <AboutUs />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <Header />
                      <ContactUs />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="*"
                  element={
                    <>
                      <Header />
                      <Navigate to="/home" replace />
                      {!loading && <Footer />}
                    </>
                  }
                />
              </>
            ) : (
              <>
                <Route
                  path="*"
                  element={
                    <>
                      <Navigate to="/" replace />
                    </>
                  }
                />
              </>
            )}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
