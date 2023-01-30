import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImPencil2 } from 'react-icons/im';
import { RxHamburgerMenu } from 'react-icons/rx';
import Dropdown from './Dropdown';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Navbar() {
    const [view, setView] = useState(false); 
    const [user, setUser] = useState();

    useEffect(()=> {
        onUserStateChange(setUser);
    }, [])

    return (
        <header className='flex justify-between flex-row'>
            <ul className='text-xl' onClick={() => {setView(!view)}}>
                <RxHamburgerMenu />
	            {view && <Dropdown />}
            </ul>
            
            <Link className='flex items-center text-5xl p-2' to='/'>
                <h1 className=''>R E U Y</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new' className='text-xl'>
                    <ImPencil2 />
                </Link>
                {user && <User user={user}/>}
                {!user && <button onClick={login}>Login</button>}
                {user && <button onClick={logout}>Logout</button>}
            </nav>
        </header>
    );
}

