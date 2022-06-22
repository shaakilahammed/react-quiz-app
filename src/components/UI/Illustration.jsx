import classes from './Illustration.module.css';
const Illustration = ({ image, alt }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Illustration;
