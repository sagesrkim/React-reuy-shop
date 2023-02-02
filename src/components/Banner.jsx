import React from 'react';

export default function Banner() {
    return (
        <section className='w-full relative'>
            <div className='w-96 bg-cover bg-banner'/>
            <div className='absolute top-32 text-center text-white drop-shadow-2xl'>
                <h2 className='text-6xl'>reuy</h2>
                <p className='text-2xl'>With Sustainability</p>
            </div>
        </section>
    )
}

