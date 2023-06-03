/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Tweet from '../components/Tweet/Tweet';
import Filter from '../components/Filter/Filter';
import { useGetUsersQuery } from '@/api/store';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from '../pages/Tweets.module.scss';
import { useSelector } from 'react-redux';

const idies = {
  id: ['2', '3', '6'],
};

const Tweets = () => {
  const { data = [] } = useGetUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => setSearchParams({ filter: 'all' }), []);

  const name = searchParams.get('filter') ?? '';
  console.log(name);

  const change = (filter) => {
    console.log(filter);
    // setSearchParams({ filter: data });
    const nextParams = filter !== '' ? { filter } : {};
    setSearchParams(nextParams);
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
          {name === 'followings' &&
            Notify.info(
              `You have a ${
                data.filter((user) => idies.id.includes(user.id)).length
              } followings`,
            )}
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
          {name === 'follow' &&
            Notify.info(
              `You have a ${
                data.filter((user) => !idies.id.includes(user.id)).length
              } tweets to follow`,
            )}
          {(name === '' || name === 'all') &&
            data.map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
          {name === 'all' && Notify.info(`You have a ${data.length} tweets`)}
        </ul>
      </div>
    </div>
  );
};

export default Tweets;
