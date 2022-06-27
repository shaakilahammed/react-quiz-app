import { Link } from 'react-router-dom';
import classes from './Video.module.css';

const Video = ({ title, id, noq }) => {
  return noq > 0 ? (
    <Link to={`/quiz/${id}`}>
      <div className={classes.video}>
        <img
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total points : {noq * 5}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;
