import s from './Tweet.module.scss';
import PropTypes from 'prop-types';


const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {

  return (
    <li id={id} className={s.wrapper}>
      <img loading="lazy" src={avatar} alt="avatar" className={s.avatar} />
      <p className={s.tweets}>{tweets} Tweets</p>
      <p className={s.followers}>{followers} Followers</p>
      <button type="button" className={s.button}>
        Follow
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
