import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImPencil2 } from 'react-icons/im';
import { RxHamburgerMenu } from 'react-icons/rx';
import Dropdown from './Dropdown';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
    const [view, setView] = useState(false); 
    const { user, login, logout } = useAuthContext();
    return (
        <header className='flex justify-between flex-row relative'>
            <ul className='text-xl' onClick={() => {setView(!view)}}>
                <RxHamburgerMenu />
	            {view && <Dropdown />}
            </ul>
            
            <Link className='flex items-center text-5xl p-2' to='/'>
                <h1 className=''>R E U Y</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>ALL</Link>
                {user && 
                    <Link to='/carts'>
                        <CartStatus />
                    </Link>} 
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-xl'>
                        <ImPencil2 />
                    </Link>
                )}
                {user && <User user={user}/>}
                {!user && <Button text={'Login'} onClick={login} />}
                {user && <Button text={'Logout'} onClick={logout} />}
            </nav>
        </header>
    );
}

