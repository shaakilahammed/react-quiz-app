import classes from './Button.module.css';

const Button = ({ children, className }) => {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
};

export default Button;
