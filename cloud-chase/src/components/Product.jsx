import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import sale from '../assets/sale.json';
import { CartContext } from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    marginBottom: theme.spacing(1),
  },
  categories: {
    marginBottom: theme.spacing(0.5),
  },
  title: {
    marginBottom: theme.spacing(1),
    width: '80%',
  },
  price: {
    width: '50%',
  },
}));

function Product({ products }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const classes = useStyles();
  const {setIsOpen} = useContext(CartContext);

  useEffect(() => {
    const image = new Image();
    image.src = products.image
    image.onload = () => {
      setImageLoaded(true);
      setShowSkeleton(false);
    };
  }, [products.image]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const origPrice = products.price;
  const discPercentage = 20;
  const discountedPrice = origPrice - (origPrice * (discPercentage / 100));

  return (
    <Link to={`/product/${products.id}`}>
      <div className="grad bg-gradient-to-b from-gray-900 to-gray-600 w-[80%] lg:w-[100%] xl:w-[80%] md:h-[320px] md:w-[90%] max-w-[100%] sm:h-[290px]  h-[30vh] rounded-[8px] overflow-hidden relative group mx-auto justify-center shadow-xl">
        {showSkeleton && (
          <div className={classes.root}>
            <Skeleton variant="rect" className={classes.image} />
            <Skeleton variant="text" className={classes.categories} />
            <Skeleton variant="text" className={classes.title} />
            <Skeleton variant="text" className={classes.price} />
          </div>
        )}
        {!showSkeleton && (
          <>
            {products.isSale && (
              <Lottie animationData={sale} className="absolute lg:mr-44 mr-20 sm:mr-32" />
            )}
            {products.isNew && (
              <div className="absolute bg-gradient-to-r from-purple-900 via-purple-900 to-violet-800 text-white text-[10px] font-bold uppercase top-3 right-4 px-2 rounded-lg">
                New
              </div>
            )}
            <div className="md:w-full md:h-[180px] sm:w-[full] sm:h-[180px] flex items-center justify-center md:mt-0 sl:mt-5 sm:mt-0 mt-1">
              {imageLoaded ? (
                <img
                  onClick={() => setIsOpen(false)}
                  src={products.image}
                  className="sm:w-[120px] md:h-[120px] xl:w-[150px] sm:h-[100px] h-[80px] sl:h-20 sl:mb-0 md:mt-5 sm:mt-0 sl:mt-5 mt-8 group-hover:scale-105 transition-all "
                  alt={products.title}
                />
              ) : (
                <Skeleton
                  variant="rect"
                  className={classes.image}
                  style={{ display: 'none' }}
                />
              )}
            </div>
            <div className='mx-auto md:mx-4'>
              <div className="md:mb-5 md:mt-0 sl:mt-0 text-white p-2">
                <div className="xl:text-[15px] first-letter:uppercase lg:text-sm text-xs font-bold mb-2 md:mt-0 md:ml-0 mt-2 sm:mt-0 ml-2 text-violet-300">
                  {products.categories}
                </div>
                <div className="md:text-sm text-[10px] xl:text-xs sm:text-xs lg:text-xs md:ml-0 ml-2 font-bold uppercase">
                  {products.title.substring(0, 35)}
                </div>
                  {products.isSale && (
                    <div className="absolute text-slate-200 md:text-[10px] xl:text-xs lg:text-[10px] sm:text-xs text-[8px] font-bold uppercase xl:left-36 sm:left-16 left-20 md:bottom-[27px]  md:left-24 lg:left-16 bottom-4 px-2 rounded-lg">
                      Original price: ₱{origPrice}
                    </div>
                )}
                <div className="font-semibold">
                  {products.isSale ? (
                    <div className="absolute text-violet-300 md:text-[11px] xl:text-base sm:text-sm lg:text-xs text-[10px] font-bold uppercase md:left-5 left-2 md:bottom-6 sl:bottom-4 sl:ml-3 bottom-5 px-2 rounded-lg">
                      ₱{discountedPrice}
                    </div>
                    ) : (
                    <div className="absolute text-violet-300 md:text-[11px]  lg:text-sm sm:text-sm text-[13px] font-bold uppercase sl:left-6 sl:bottom-4 md:left-5 left-2 md:bottom-6 bottom-3 px-2 rounded-lg">
                      ₱{origPrice}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Product;
