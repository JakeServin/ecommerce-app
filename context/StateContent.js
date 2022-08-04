import React, { createContext, useContext, useState, UseEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    return (
        <Context.Provider
            value={{

            }}
        >
            {children}
        </Context.Provider>
    )


}