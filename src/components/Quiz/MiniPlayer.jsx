import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from './MiniPlayer.module.css';

const MiniPlayer = ({ title, id }) => {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  const toggleMiniPlayer = () => {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  };
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />

      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
