/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Tweet from '../components/Tweet/Tweet';
import Filter from '../components/Filter/Filter';
import { useGetUsersQuery } from '@/api/store';
import { useSearchParams } from 'react-router-dom';

const idies = {
  id: ['2', '3', '6'],
};
const Tweets = () => {
  const { data = [] } = useGetUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => setSearchParams({ filter: 'all' }), []);

  const name = searchParams.get('filter');

  const change = (data) => {
    setSearchParams({ filter: data });
  };

  return (
    <div className="container">
      <Filter change={change} />
      <div className="tweets_container">
        <ul className="tweets_list">
          {name === 'followings' &&
            data
              .filter((user) => idies.id.includes(user.id))
              .map((user) => (
                <Tweet
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  followers={user.followers}
                  tweets={user.tweets}
                />
              ))}
          {name === 'follow' &&
            data
              .filter((user) => !idies.id.includes(user.id))
              .map((user) => (
                <Tweet
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  followers={user.followers}
                  tweets={user.tweets}
                />
              ))}
          {name === 'all' &&
            data.map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Tweets;
