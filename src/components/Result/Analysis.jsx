import classes from './Analysis.module.css';
import Questions from './Questions';
const Analysis = ({ answers, correct }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {correct} out of {answers.length} questions correctly
      </h4>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;
