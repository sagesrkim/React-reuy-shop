import React from 'react';
import { SlBag } from 'react-icons/sl';
import { useQuery } from 'react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
    const { uid } = useAuthContext();
    const { data: products } = useQuery(['carts'], () => getCart(uid));

    return (
        <div className='relatve'>
            <SlBag className='text-2xl'/>
            {products && 
            <p className='w-6 h-6 text-sm text-center text-black absolute top-6'>{products.length}</p>}
        </div>
    );
}

