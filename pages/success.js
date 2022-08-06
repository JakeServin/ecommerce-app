import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { userRouter } from 'next/router';
import { runFireworks } from '../lib/utils';

import { useStateContext } from '../context/StateContext';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);


  return (
      <div className='success-wrapper'>
        <div className='success'>
          <p className='icon'>
            <BsBagCheckFill/>
        </p>
        <h2>Thank you for you purchase!</h2>
        <p className='email-msg'>Check your email inbox for your receipt.</p>
        <p className='description'>
          If you would like to hire me, please email
          <a className='email' href="mailto:jakeservin@gmail.com">
            jakeservin@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button type='buton' width="330px" className='btn'>
            Continue Shopping
          </button>
        </Link>
        </div>
      </div>
  )
}

export default Success