import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../../assets/Logo_Title1-Photoroom.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const closeMenu = () => {
        setMobileMenu(false);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            
            <ul className={`navbar-links ${mobileMenu ? 'open' : ''}`}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500} onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <span onClick={() => { navigate('/programs'); closeMenu(); }} className="nav-link">
                        Our Products
                    </span>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-150} duration={500} onClick={closeMenu}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={closeMenu}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={-260} duration={500} onClick={closeMenu} className="btn">
                        Contact us
                    </Link>
                </li>
            </ul>

            <img src={menu_icon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
