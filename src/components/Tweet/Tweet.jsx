import PropTypes from 'prop-types';
import s from './Tweet.module.scss';
import { usePutUserMutation } from '@/api/store';

const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {

  
  const [putUser, {isSuccess}] = usePutUserMutation()
const handleFollow = async user => {
  console.log(user.id);
  await putUser({id:user.id, followers: user.followers+1}).unwrap()
}
  return (
    <li id={id} className={s.wrapper} >
      <img loading="lazy" src={avatar} alt="avatar" className={s.avatar} />
      <p className={s.tweets}>{tweets} Tweets</p>
      <p className={s.followers}>{followers} Followers</p>
      <button type="button" className={s.button} onClick={()=>handleFollow({id, followers})}>
        FOLLOW
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
