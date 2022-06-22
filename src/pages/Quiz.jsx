import Answers from '../components/Quiz/Answers';
import MiniPlayer from '../components/Quiz/MiniPlayer';
import ProgressBar from '../components/Quiz/ProgressBar';

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
