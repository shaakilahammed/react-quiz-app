import classes from './Button.module.css';

const Button = ({ children }) => {
  return (
    <div class={classes.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
