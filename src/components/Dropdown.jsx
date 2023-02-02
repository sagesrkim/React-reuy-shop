import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function Dropdown() {
    const { user, login, logout } = useAuthContext();
    return (
        <div className='flex flex-col my-5'>
            <Link className='mb-2' to='/products'>NEW</Link>
            <Link to='/products'>ALL</Link>
            <Link to='/products'>Outer</Link>
            <Link to='/products'>Top</Link>
            <Link to='/products'>Bottom</Link>
            <Link to='/products'>Acc</Link>
        </div>
    );
}

