import Checkbox from '../Form/Checkbox';
import classes from './Answers.module.css';

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Answers;
