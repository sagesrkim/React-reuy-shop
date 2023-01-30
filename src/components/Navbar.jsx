import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImPencil2 } from 'react-icons/im';
import { RxHamburgerMenu } from 'react-icons/rx';
import Dropdown from './Dropdown';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Navbar() {
    const [view, setView] = useState(false); 
    const [user, setUser] = useState();

    useEffect(()=> {
        onUserStateChange((user) => {
            console.log(user);
            setUser(user);
        });
    }, [])
    
    const handleLogin = () => {
        login().then(setUser);
    }
    const handleLogout = () => {
        logout().then(setUser);
    }

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
                {!user && <button onClick={handleLogin}>Login</button>}
                {user && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </header>
    );
}

