/* eslint-disable react-hooks/exhaustive-deps */
import Tweet from '@/components/Tweet/Tweet';
import { useEffect, useState } from 'react';

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
  {
    createdAt: '2023-06-01T02:37:47.927Z',
    user: 'Dr. Ralph Feest',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg',
    followers: 89287,
    tweets: 22920,
    id: '4',
  },
  {
    createdAt: '2023-06-01T04:42:18.132Z',
    user: 'Constance Ortiz',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/882.jpg',
    followers: 95617,
    tweets: 73154,
    id: '5',
  },
  {
    createdAt: '2023-06-01T06:40:39.956Z',
    user: 'Mrs. Holly Hyatt',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg',
    followers: 80975,
    tweets: 77144,
    id: '6',
  },
  {
    createdAt: '2023-06-01T06:40:39.956Z',
    user: 'Mrs. Holly Hyatt',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg',
    followers: 80975,
    tweets: 77144,
    id: '7',
  },
];

const Home = () => {
  const [page, setPage] = useState(1);
  const [usersArr, setUsersArr] = useState([]);

  const maxPage = Math.ceil(tempArr.length / 3);

  useEffect(() => {
    getPaginatedObjects();
  }, [page]);

  const getPaginatedObjects = () => {
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;
    const sliceTempArr = tempArr.slice(startIndex, endIndex);
    setUsersArr((prev) => [...prev, ...sliceTempArr]);
  };

  // при перезагрузке страницы не меняется page
  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <ul>
        {usersArr.map((item) => (
          <Tweet key={item.id} {...item} />
        ))}
      </ul>
      {maxPage !== page && (
        <button type="button" onClick={incrementPage}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
