
import s from './Tweet.module.scss';
import PropTypes from 'prop-types';


const Tweet = ({id=null, avatar =null ,followers= null, tweets =null }) => {
    // притянуть селектор, который проверяет флаг из ектив и передает по условию класс в кнопку ниже
    return <li id={id}>
       
        <img loading="lazy" src={avatar} alt="avatar" className={s.avatar}/>
       <p className={s.tweets}>`${tweets} Tweets`</p>
        <p className={s.followers}>`${followers} Followers`</p>
       <button type="button" className={s.button}>text by class</button>
        </li>
}
export default Tweet;

Tweet.propTypes = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    tweets: PropTypes.number
  };