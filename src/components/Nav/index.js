import React, { useEffect } from 'react';

const Nav = (props) => {
  const {
    categories = [],
    contactSelected,
    setCurrentCategory,
    currentCategory,
    setContactSelected,
  } = props;
  return (
    <div>
      <header>
        <h2>
          <a data-testid='link' href='/'>
            Allyson Nasworthy
         </a>
        </h2>
      <nav>
        <ul className='flex-row'>
          <li>
            <a data-testid='about-me' href='#about-me' onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li>
            <a data-testid='portfolio' href='#portfolio' onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a data-testid='resume' href='#resume' onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          <li>
            <a data-testid='contact' href='#contact' onClick={() => setContactSelected(true)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      </header>
    </div>
  )
}

export default Nav;
