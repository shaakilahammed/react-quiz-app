import { Link } from 'react-router-dom';
import classes from './Account.module.css';

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/sign-up">Signup</Link>
      <Link to="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span>  */}
    </div>
  );
};

export default Account;
