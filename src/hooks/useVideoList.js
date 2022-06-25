import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, 'videos');
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt(String(page)),
        limitToFirst(12)
      );

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videoQuery);
        setLoading(false);
        // console.log(snapshot.val());
        // console.log(Object.values(snapshot.val()));
        if (snapshot.exists()) {
          setVideos((prev) => {
            return [...prev, ...Object.values(snapshot.val())];
            // return [...prev, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchVideos();
  }, [page]);
  return { loading, videos, error, hasMore };
};

export default useVideoList;
