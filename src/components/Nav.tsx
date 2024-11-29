import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className=''>
      <ul>
        <li>
          <NavLink to='/' className={'text-lg'}>
            Главная
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
