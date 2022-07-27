import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = () => {
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
            <a data-testid='about-me' href='#about-me'>
              About Me
            </a>
          </li>
          <li>
            <a data-testid='portfolio' href='#portfolio'>
              Portfolio
            </a>
          </li>
          <li>
            <a data-testid='resume' href='#resume'>
              Resume
            </a>
          </li>
          <li>
            <a data-testid='contact' href='#contact'>
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
