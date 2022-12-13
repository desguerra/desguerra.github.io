import React from 'react';

function Footer() {
  let currentYear =  new Date().getFullYear();
  const credit = <span>&copy; {currentYear} - made with 🤍 by <span className='strong'>nikki esguerra</span></span>;

  return (
    <footer className='footer flex flex-col justify-center text-center py-12'>
      <div className='footer-credit'>{credit}</div>

      <div>
          <a href="https://github.com/desguerra" target="_blank" rel="noreferrer">github</a> | <a href="https://linkedin.com/in/nikkiesg/" target="_blank" rel="noreferrer">linkedin</a>
      </div>
    </footer>
  );
}

export default Footer;