import React from "react";

const Header = () => {
    return (
            <header>
             <div className='header-container'>
                <ul className='links'>
                    <li className='link'>
                        <a href='#'>BRAND NAME</a>
                    </li>
                    <li className='link'>
                        {/* <a href='#' className='log-btn'>Log In</a> */}
                        <button className='log-btn'>Log In</button>
                    </li>
                </ul>
                </div>
            </header>
    )
}

export default Header;