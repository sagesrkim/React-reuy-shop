import React from 'react';
import { useAuthContext } from './context/AuthContext';

export default function Dropdown() {
    const { user, login, logout } = useAuthContext();
    return (
        <div>
            <li>NEW</li>
            <li>Outer</li>
            <li>Top</li>
            <li>Bottom</li>
            <li>Onepiece</li>
            <li>Shoes</li>
        </div>
    );
}

