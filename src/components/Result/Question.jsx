import Answers from '../Quiz/Answers';
import classes from './Question.module.css';

const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
