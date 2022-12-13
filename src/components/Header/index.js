import React from 'react';
import Navigation from '../Navigation';
import ThemeButton from '../ThemeButton';

function Header() {

  return (
    <header className='header flex flex-wrap justify-between content-center'>
      <Navigation />
      <ThemeButton />
    </header>
  );
}

export default Header;