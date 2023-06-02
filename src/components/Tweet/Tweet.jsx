import { useState } from 'react';
import s from './Tweet.module.scss';
import { usePutUserMutation } from '@/api/store';


const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleButtonClick = () => {
    setIsFollowing(!isFollowing); // Toggle the value of isFollowing
    followers = isFollowing ? followers - 1 : followers + 1; // Update the followers count
  };
  const buttonStyle = {
    backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF',
  };

  // притянуть селектор, который проверяет флаг из ектив и передает по условию класс в кнопку ниже

  return (
    <li id={id} className={s.wrapper} >
      <img loading="lazy" src={avatar} alt="avatar" className={s.avatar} />
      <p className={s.tweets}>{tweets} Tweets</p>
      <p className={s.followers}>{followers} Followers</p>
      <button
        type="button"
        className={s.button}
        onClick={handleButtonClick}
        style={buttonStyle}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};

export default Tweet;
Tweet.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  tweets: PropTypes.number,
  
};
