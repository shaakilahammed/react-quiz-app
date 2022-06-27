import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    const fetchAnswers = async () => {
      const db = getDatabase();
      const answerRef = ref(db, `answers/${videoID}/questions`);
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        setLoading(false);
        // console.log(snapshot.val());
        // console.log(Object.values(snapshot.val()));
        if (snapshot.exists()) {
          setAnswers((prev) => {
            return [...prev, ...Object.values(snapshot.val())];
            // return [...prev, ...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchAnswers();
  }, [videoID]);
  return { loading, answers, error };
};

export default useAnswers;
