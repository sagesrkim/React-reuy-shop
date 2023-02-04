import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
    product,
    product: {id, image, title, category, price }
}) {
    const navigate = useNavigate();
    return (
        <li 
            onClick={() => {navigate(`/products/${id}`, {state: { product }});
        }}
            className='cursor-pointer transition-all hover:translate-y-2'>
            <img className='w-full h-2/3' src={image} alt={title} />
            <div className='mt-2 px-2 text-md flex justify-between items-center'>
                <h3 className='truncate'>{title}</h3>
                <p>{`₩${price}`}</p>
            </div>
            <p className='mb-2 px-2 text-gray-600'>{category}</p>     
        </li>
    );
}

