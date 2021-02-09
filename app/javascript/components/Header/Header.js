import React from 'react';

import './Header.css';

const Header = () => (
	<header className='header'>
		<section className='ckc-logo'></section>
    <nav className="ckc-navlinks">
      <section className="link-container">
        <a href="#directions">Directions</a>
        <a href="#contact">Contact</a>
      </section>
    </nav>
	</header>
);

export default Header;
