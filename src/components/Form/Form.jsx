import classes from './Form.module.css';
const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
