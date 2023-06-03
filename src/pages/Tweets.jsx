import { useState } from "react";
import Tweet from "../components/Tweet/Tweet";
import Filter from "../components/Filter/Filter";
import { useGetUsersQuery} from '@/api/store';
import s from './Tweets.module.scss'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const idies = {     
        id:['2', '3', '6']
}
const Tweets = () => {

    const {data=[]}  = useGetUsersQuery();
    console.log(data)
    const [filter, setFilter] = useState('');



  const change = (data) => {
   setFilter(data);
  }

return <div className={s.container}>
      <Filter 
      change={change}
      />
     <div className={s.tweets_container}>
    <ul className={s.tweets_list}>

{filter === 'followings' &&
data.filter(user => idies.id.includes(user.id)).map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />)
}
{filter === 'followings' && Notify.info(`You have a ${((data.filter(user => idies.id.includes(user.id)).length))} followings`)}
{filter === 'follow' &&
data.filter(user => !idies.id.includes(user.id)).map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />) }
{filter === 'follow' && Notify.info(`You have a ${((data.filter(user => !idies.id.includes(user.id)).length))} tweets to follow`)}
{filter === 'all' && data.map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />)
}
{filter === 'all' && Notify.info(`You have a ${((data.length))} tweets`)}
</ul>
</div>
</div>
}


export default Tweets;