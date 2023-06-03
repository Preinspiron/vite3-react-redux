





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


const Tweets = () => {
  const { data = [] } = useGetUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const idiesArr = useSelector(state=> state.followers.follows)
  const idies = idiesArr.map(el => el.id)

  // useEffect(() => setSearchParams({ filter: 'all' }), []);
  // const name = searchParams.get("filter") ?? "";
  const name = searchParams.get("filter");


  const change = (data) => {
    setSearchParams({ filter: data })
    // const nextParams = name !== "" ? { filter: data } : {};
    // setSearchParams(nextParams);
  
  };

  return (
    <div className={s.container}>
      <Filter change={change}/>
      
        <ul className={s.tweets_list}>
          {name === 'followings' &&
            data
              .filter((user) => idies.includes(user.id))

              .map((user) => (
                <Tweet
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  followers={user.followers}
                  tweets={user.tweets}
                />
              ))}



              {name === 'followings' && Notify.info(`You have a ${((data.filter(user => idies.includes(user.id)).length))} followings`)}
          {name === 'follow' &&
            data
              .filter((user) => !idies.includes(user.id))

              .map((user) => (
                <Tweet
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  followers={user.followers}
                  tweets={user.tweets}
                />
              ))}

       

              {name === 'follow' && Notify.info(`You have a ${((data.filter(user => !idies.includes(user.id)).length))} tweets to follow`)}
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



            {name === 'all' && Notify.info(`You have a ${((data.length))} tweets`)}
            
        </ul>
      </div>

  );
};

export default Tweets;
