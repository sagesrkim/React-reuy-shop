import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useCart from '../hooks/useCart';

const ICON_CLASS = 'text-base transition-all cursor-pointer hover:text-red-600 hover:scale-105 mx-2';

export default function CartItem({ 
    product, 
    product: {id, image, title, option, quantity, price },
}) {
    const { addOrUpdateItem, removeItem } = useCart();
        const handleMinus = () => {
            if(quantity < 2) return;
            addOrUpdateItem.mutate({...product, quantity: quantity - 1 });
        }
        const handlePlus = () => 
            addOrUpdateItem.mutate({...product, quantity: quantity + 1 });
        
        const handleDelete = () => removeItem.mutate(id);

    return (
        <li className='flex justify-between my-2 items-center'>
            <img className='w-24 md:w-48' src={image} alt={title} />
            <div className='flex-1 flex justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className='text-lg'>{title}</p>
                    <p className='text-xl'>{option}</p>
                    <p>₩{price}</p>
                </div>
                <div className='text-xl flex items-center'>
                    <AiOutlineMinus className={ICON_CLASS} onClick={handleMinus} />
                    <span>{quantity}</span>
                    <AiOutlinePlus className={ICON_CLASS} onClick={handlePlus} />
                    <button className={ICON_CLASS} onClick={handleDelete}>삭제</button>
                </div>
            </div>
        </li>
    );
}

