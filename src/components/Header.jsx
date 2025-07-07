import React, { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setScrolled(scrollPercent >= 5);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? 'scrolled_header' : ''}>
            <div className="container header_container">
                <a className='header_logo' href="">Melorenz</a>
                <nav>
                    <ul className='header_nav'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#showcase">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button onClick={() => setIsOpenBurger(!isOpenBurger)} className={isOpenBurger ? 'burger' + ' ' + 'burger_active' : 'burger'}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </button>
                    {isOpenBurger && (
                        <ul className='header_nav_mobile'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#showcase">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    )}

                </nav>
            </div>
        </header>
    );
}
