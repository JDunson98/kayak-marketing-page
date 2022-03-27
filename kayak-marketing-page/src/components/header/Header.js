import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='body-container-dark'>
            <div>
                <h1 className='title'>Weiss Lake Kayaks</h1>
                <h2>The #1 Kayak Rental Service on Weiss Lake!</h2>
                <button className='header-button'>Reserve Now</button>
            </div>
        </div>
    )
}

export default Header;