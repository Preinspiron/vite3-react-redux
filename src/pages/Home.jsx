// import PropTypes from 'prop-types';
import Tweet from '@/components/Tweet/Tweet';
import s from './Home.module.scss';

const tempArr = [
  {
    createdAt: '2023-06-01T02:37:47.927Z',
    user: 'Dr. Ralph Feest',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg',
    followers: 89287,
    tweets: 22920,
    id: '1',
  },
  {
    createdAt: '2023-06-01T04:42:18.132Z',
    user: 'Constance Ortiz',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg',
    followers: 95617,
    tweets: 73154,
    id: '2',
  },
  {
    createdAt: '2023-06-01T06:40:39.956Z',
    user: 'Mrs. Holly Hyatt',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg',
    followers: 80975,
    tweets: 77144,
    id: '3',
  },
];

const Home = () => (
  <ul className={s.homePage}>
    {tempArr.map((item) => (
      <Tweet key={item.id} {...item} />
    ))}
    {console.log(onclick)}
  </ul>
);

export default Home;

