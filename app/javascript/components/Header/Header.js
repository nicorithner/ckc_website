import React from 'react';

import './Header.scss';

const Header = () => (
	<header className='header'>
		<section className='ckc-logo'></section>
    <nav className="ckc-navlinks">
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      <section className="link-container">
        <ul>
          <a href="#directions">Directions</a>
          <a href="#about">About</a>
        </ul>
      </section>
    </nav>
	</header>
);

export default Header;
