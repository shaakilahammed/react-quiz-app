import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useVideoList from '../../hooks/useVideoList';
import Video from './Video';
import classes from './VideoList.module.css';
const VideoList = () => {
  const [page, setPage] = useState(1);
  const { loading, videos, error, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          className={classes.videos}
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => {
            setPage(page + 12);
          }}
        >
          {videos.map((video) => (
            <Video
              key={video.youtubeID}
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
            />
          ))}
        </InfiniteScroll>
      )}
      {loading && <div>Loading.....</div>}
      {!loading && videos.length === 0 && <div>No Video Found!</div>}
      {!loading && error && <div>Something went wrong!</div>}
    </div>
  );
};

export default VideoList;
