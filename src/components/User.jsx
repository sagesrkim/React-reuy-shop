import React from 'react';

export default function User({ user: {photoURL, displayName} }) {
    return (
        <div className='flex items-center'>
           <img className='w-8 h-8 rounded-full mr-2' src={photoURL} alt={displayName} />
           <span className='hidden md:block'>{displayName}님</span>
        </div>
    );
}

