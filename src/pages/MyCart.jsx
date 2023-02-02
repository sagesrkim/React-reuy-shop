import React from 'react';
import { useQuery } from 'react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import { useAuthContext } from '../context/AuthContext';
import { FiPlus } from 'react-icons/fi'
import { TbEqual } from 'react-icons/tb'
import PriceCard from '../components/PriceCard';

const SHIPPING = 3000;

export default function MyCart() {
    const { uid } = useAuthContext();
    const { isLoading,
            data: products } = useQuery(['carts'], () => getCart(uid));
    
    if(isLoading) return <p> Loading... </p>;

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, curr) => prev + parseInt(curr.price) * curr.quantity, 0)

    return (
        <section>
            <p>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해 주세요! </p>}
            {hasProducts && 
            <>
                <ul>
                    {products && products.map((product) => <CartItem key={product.id} product={product} uid={uid} /> )}
                </ul>
                <div>
                    <PriceCard text='총 상품 금액' price={totalPrice} />
                    <FiPlus />
                    <PriceCard text='배송비' price={SHIPPING} />
                    <TbEqual />
                    <PriceCard text='총 주문 금액' price={totalPrice+SHIPPING} />
                </div>
            </>}
        </section>
    );
}