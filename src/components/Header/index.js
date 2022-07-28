import React from 'react';
import coverImage from '../../assets/images/hero.png';

const Header = () => {
return (
    <div>
        <section id="hero" className='hero'>
            <img src={coverImage}></img>
        </section>
    </div>
)};

    export default Header;