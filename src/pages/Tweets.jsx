// import { useState } from "react";
// import { useParams } from "react-router";
// import Tweet from "../components/Tweet/Tweet";
import Filter from "../components/Filter/Filter";

const Tweets = () => {
    // const [filter, setFilter] = useState('all');
  
// селектор с массивом юзеров 
return <div className="container">
      <Filter/>
     <div className="tweets_container">
    <ul className="tweets_list">
{/* или меп */}
{/* {users.map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />)} */}
{/* или фильтр по 1 условию */}
{/* или фильтр по 2 условию */}
</ul>
</div>
</div>
}


export default Tweets;