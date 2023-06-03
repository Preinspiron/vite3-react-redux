import { useState } from 'react';
import s from './Tweet.module.scss';
import { usePutUserMutation } from '@/api/store';
import { usePutUserMutation } from '@/api/store';

import PropTypes from 'prop-types';
import { useDispatch,  useSelector} from 'react-redux';
import { setFollow, removeFollow, removeFollow } from '@/api/slice';



const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {



  const [isFollowing, setIsFollowing] = useState(false);
  const [putUser, {isSuccess}] = usePutUserMutation()
  const dispatch = useDispatch()
  const selectFollowings = useSelector(state => state.followers.follows)
  

  const handleButtonClick = (id, followers) => {
   
    !isFollowing && dispatch(setFollow(id))
    isFollowing && dispatch(removeFollow(id))
    !isFollowing && dispatch(setFollow(id))
    isFollowing && dispatch(removeFollow(id))
    putUser({id, followers: isFollowing ? followers-1: followers+1}).unwrap()
    setIsFollowing(!isFollowing);
  };
    const checker = selectFollowings.some(item => item?.id === id) 
checker checker 

  const buttonStyle = {
    backgroundColor:  checker ? '#5CD3A8' : '#EBD8FF',
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

        onClick={()=>handleButtonClick(id, followers)}
        style={buttonStyle}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  )
}

      export default Tweet;
    
Tweet.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  tweets: PropTypes.number,
  };
