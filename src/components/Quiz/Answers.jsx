import Checkbox from '../Form/Checkbox';
import classes from './Answers.module.css';

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
  );
};

export default Answers;
