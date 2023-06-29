import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import sale from '../assets/sale.json';

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

function Product({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const image = new Image();
    image.src = `https://cloud-chase-be-production-e564.up.railway.app${product.attributes.image.data.attributes.url}`;
    image.onload = () => {
      setImageLoaded(true);
      setShowSkeleton(false);
    };
  }, [product.attributes.image.data.attributes.url]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const origPrice = product.attributes.price;
  const discPercentage = 20;
  const discountedPrice = origPrice - (origPrice * (discPercentage / 100));

  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad bg-gradient-to-b from-gray-900 to-gray-600 w-full md:h-[320px] md:max-w-[300px] max-w-[180px] sm:h-[300px] sl:h-[240px] h-[250px] rounded-[8px] overflow-hidden relative group mx-auto justify-center shadow-xl">
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
            {product.attributes.isSale && (
              <Lottie animationData={sale} className="absolute mr-44" />
            )}
            {product.attributes.isNew && (
              <div className="absolute bg-amber-400 text-black text-[10px] font-bold uppercase top-3 right-4 px-2 rounded-lg">
                New
              </div>
            )}
            <div className="md:w-full md:h-[180px] sm:w-[full] sm:h-[180px] flex items-center justify-center md:mt-0 sl:mt-5 sm:mt-0 mt-5">
              {imageLoaded ? (
                <img
                  src={`https://cloud-chase-be-production-e564.up.railway.app${product.attributes.image.data.attributes.url}`}
                  className="sm:w-[100px] md:h-[120px] h-[80px] sl:h-20 sl:mb-0 md:mt-5 sm:mt-0 sl:mt-5 mt-8 group-hover:scale-105 transition-all"
                  alt={product.attributes.title}
                />
              ) : (
                <Skeleton
                  variant="rect"
                  className={classes.image}
                  style={{ display: 'none' }}
                />
              )}
            </div>
            <div className="md:mb-5 md:ml-5 md:mt-0 sl:mt-0  text-white p-2 sl:ml-4">
              <div className="text-[12px] font-bold mb-2 md:mt-0 md:ml-0 mt-2 ml-2 text-yellow-500 md:mb-5">
                {product.attributes.categories.data[0].attributes.title}
              </div>
              <div className="md:text-sm text-[11px] sl:text-sm sm:text-sm lg:text-sm md:ml-0 ml-2 font-bold uppercase">
                {product.attributes.title.substring(0, 35)}
              </div>
              {product.attributes.isSale && (
                <div className="absolute text-slate-200 md:text-xs sl:text-xs lg:text-xs sm:text-xs text-[10px] font-bold uppercase left-20 md:bottom-7 bottom-2 px-2 rounded-lg">
                  Original price: ₱{origPrice}
                </div>
              )}
              <div className="font-semibold text-yellow-500 mt-4">
                {product.attributes.isSale ? (
                  <div className="absolute text-yellow-500 md:text-sm  sl:text-sm sm:text-sm lg:text-sm text-[13px] font-bold uppercase md:left-5 left-2 md:bottom-6 bottom-3 px-2 rounded-lg">
                    ₱{discountedPrice}
                  </div>
                ) : (
                  <div className="absolute text-yellow-500 md:text-sm sl:text-sm lg:text-sm sm:text-sm text-[13px] font-bold uppercase sl:left-6 sl:bottom-4 md:left-5 left-2 md:bottom-6 bottom-3 px-2 rounded-lg">
                    ₱{origPrice}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default Product;
