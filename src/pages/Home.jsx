// import PropTypes from 'prop-types';
import Tweet from '@/components/Tweet/Tweet';
import { useState } from 'react';
import s from './Home.module.scss';
import { Loader } from '../components/Loader/Loader';

import { useGetUsersQuery } from '@/api/store';

const Home = () => {
  const { data = [], isLoading } = useGetUsersQuery();

  console.log(isLoading);
  const cardsInRow = 3;
  const [nextNumber, setNextNumber] = useState(cardsInRow);

  const handleLoadMore = () => {
    setNextNumber(nextNumber + cardsInRow);
  };

  return (
    <div>
      {isLoading && <Loader />}
      {/* Render the Loader component when data is being fetched */}
      <ul className={s.homePage}>
        {data.slice(0, nextNumber).map((item) => (
          <Tweet key={item.id} {...item} />
        ))}
      </ul>
      {!isLoading && nextNumber < data.length && (
        <button type="button" className={s.loadBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;

