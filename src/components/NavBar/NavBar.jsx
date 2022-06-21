import logo from '../../assets/images/logo-bg.png';
import Account from './Account';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Quiz App Logo" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default NavBar;
