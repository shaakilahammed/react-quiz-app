import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-bg.png';
import Account from './Account';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Quiz App Logo" />
            <h3>Quiz App</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default NavBar;
