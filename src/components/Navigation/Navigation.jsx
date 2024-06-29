import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '/src/redux/auth/selectors.js';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>
    </nav>
  );
}
