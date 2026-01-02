import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='mb-8'>
      <ul className='flex'>
        <li className='mr-4'>
          <NavLink
            className={({ isActive }) =>
              `block text-xl font-sans py-2 px-4 rounded-md ${
                isActive
                  ? 'bg-neutral-300'
                  : 'bg-neutral-100 hover:bg-neutral-300'
              }`
            }
            to='/'
            end
          >
            Produtos
          </NavLink>
        </li>
        <li className='mr-4'>
          <NavLink
            className={({ isActive }) =>
              `block text-xl font-sans py-2 px-4 rounded-md ${
                isActive
                  ? 'bg-neutral-300'
                  : 'bg-neutral-100 hover:bg-neutral-300'
              }`
            }
            to='contato'
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
