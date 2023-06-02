
import s from './Tweet.module.scss';


const Tweet = ({id, avatar, followers, tweets}) => {
    // притянуть селектор, который проверяет флаг из ектив и передает по условию класс в кнопку ниже
    return <li id={id}>
       
        <img loading="lazy" src={avatar} alt="avatar" className={s.avatar}/>
        <p className={s.tweets}>`${tweets} Tweets`</p>
        <p className={s.followers}>`${followers} Followers`</p>
        <button type="button" className={s.button}>text by class</button>
        </li>
}
export default Tweet;
