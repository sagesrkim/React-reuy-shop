import React from 'react';

export default function Button({ text, onClick }) {
    return (
        <button className='hover:pointer' onClick={onClick}>
            {text}
        </button>
    )
}

