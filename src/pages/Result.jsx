import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../components/Result/Analysis';
import Summary from '../components/Result/Summary';
import useAnswers from '../hooks/useAnswers';

import _ from 'lodash';

const Result = () => {
  const { state: qna } = useLocation();
  const { id } = useParams();

  const { loading, error, answers } = useAnswers(id);

  const calculate = () => {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  };

  const userScore = calculate();

  return (
    <>
      {loading && <p>Loading....</p>}
      {error && <p>Something went wrong....</p>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} correct={userScore / 5} />
        </>
      )}
    </>
  );
};

export default Result;
