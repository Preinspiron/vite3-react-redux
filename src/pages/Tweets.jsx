import { useState } from "react";
import Tweet from "../components/Tweet/Tweet";
import Filter from "../components/Filter/Filter";

const users = [
    {
        "createdAt": "2023-06-01T02:37:47.927Z",
        "user": "Dr. Ralph Feest",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg",
        "followers": 89287,
        "tweets": 22920,
        "id": "1"
       },
       {
        "createdAt": "2023-06-01T04:42:18.132Z",
        "user": "Constance Ortiz",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg",
        "followers": 95617,
        "tweets": 73154,
        "id": "2"
       },
       {
        "createdAt": "2023-06-01T06:40:39.956Z",
        "user": "Mrs. Holly Hyatt",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg",
        "followers": 80975,
        "tweets": 77144,
        "id": "3"
       },
       {
        "createdAt": "2023-05-31T19:04:44.434Z",
        "user": "Bobbie Lakin",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
        "followers": 39401,
        "tweets": 62568,
        "id": "4"
       },
       {
        "createdAt": "2023-05-31T12:53:24.236Z",
        "user": "Alexandra Lueilwitz",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1190.jpg",
        "followers": 16175,
        "tweets": 95612,
        "id": "5"
       },
       {
        "createdAt": "2023-05-31T08:21:49.633Z",
        "user": "Owen Hills III",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/325.jpg",
        "followers": 70759,
        "tweets": 4047,
        "id": "6"
       },
       {
        "createdAt": "2023-05-31T19:33:16.597Z",
        "user": "Max Gerlach",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg",
        "followers": 79950,
        "tweets": 48390,
        "id": "7"
       },
]
const idies = {     
        id:['2', '3', '6']
}
const Tweets = () => {
    const [filter, setFilter] = useState('');

  const change = (data) => {
   setFilter(data);
  }

return <div className="container">
      <Filter 
      change={change}
      />
     <div className="tweets_container">
    <ul className="tweets_list">

{filter === 'followings' &&
users.filter(user => idies.id.includes(user.id)).map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />) }
{filter === 'follow' &&
users.filter(user => !idies.id.includes(user.id)).map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />) }
{filter === 'all' && users.map(user => <Tweet key={user.id} id={user.id} avatar={user.avatar} followers={user.followers} tweets={user.tweets} />)
}
</ul>
</div>
</div>
}


export default Tweets;