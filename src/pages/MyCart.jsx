import React from 'react';
import { useQuery } from 'react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import { useAuthContext } from '../context/AuthContext';
import { FiPlus } from 'react-icons/fi'
import { TbEqual } from 'react-icons/tb'
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

const SHIPPING = 3000;

export default function MyCart() {
    const { uid } = useAuthContext();
    const { isLoading,
            data: products } = useQuery(['carts'], () => getCart(uid));
    
    if(isLoading) return <p> Loading... </p>;

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, curr) => prev + parseInt(curr.price) * curr.quantity, 0)

    return (
        <section className='p-8 flex flex-col'>
            <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요! </p>}
            {hasProducts && 
            <>
                <ul className='border-b boerder-gray-300 mb-8 p-4 px-8'>
                    {products && products.map((product) => <CartItem key={product.id} product={product} uid={uid} /> )}
                </ul>
                <div className='flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16'>
                    <PriceCard text='총 상품 금액' price={totalPrice} />
                    <FiPlus className='shrink-0'/>
                    <PriceCard text='배송비' price={SHIPPING} />
                    <TbEqual className='shrink-0' />
                    <PriceCard text='총 주문 금액' price={totalPrice+SHIPPING} />
                </div>
                <Button text='주문하기' />
            </>}
        </section>
    );
}