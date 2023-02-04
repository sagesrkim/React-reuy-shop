import React from 'react';
import { SlBag } from 'react-icons/sl';
import useCart from '../hooks/useCart';

export default function CartStatus() {
    const { cartQuery: { data: products }, } = useCart();

    return (
        <div className='relatve'>
            <SlBag className='text-2xl'/>
            {products && 
            <p className='w-6 h-6 text-sm text-center text-black absolute top-4'>{products.length}</p>}
        </div>
    );
}

