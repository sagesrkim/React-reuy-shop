import React from 'react';

export default function Banner() {
    return (
        <section className='h-3/6 bg-zinc-500 relative'>
            <div className='w-full h-full bg-cover bg-center' />
            <div className='absolute w-full top-32 text-center text-white drop-shadow-2xl'>
                <h2 className='text-6xl'>reuy</h2>
                <p className='text-2xl'>With Sustainability</p>
            </div>
        </section>
    )
}

