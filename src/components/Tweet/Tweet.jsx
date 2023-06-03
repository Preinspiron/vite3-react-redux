import s from './Tweet.module.scss';
import PropTypes from 'prop-types';
import logo from '../../images/Vector.png';
import dialog from '../../images/question.png';
import ring from '../../images/borderRing.png';
import bar from '../../images/bar.png';


const Tweet = ({
  id = null,
  avatar = null,
  followers = null,
  tweets = null,
}) => {

  return (
    <li id={id} className={s.wrapper}>
      <div className={s.bg_logo}><img src={logo} alt="logo"/></div>
      <div className={s.bg_dialog}><img src={dialog} alt="dialog background"/></div>
      <div className={s.bg_bar}><img src={bar} alt="backround bar" /></div>
      <div className={s.bg_ring}><img src={ring} alt="background ring" /></div>
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
