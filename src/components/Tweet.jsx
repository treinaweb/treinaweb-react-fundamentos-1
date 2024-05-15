import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import styles from './Tweet.module.css';

export default function Tweet({ tweet }) {
  const publishedToNew = formatDistanceToNow(new Date(tweet.date), {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <div className={styles.tweetContainer}>
      <img className={styles.avatar} src={tweet.user.picture} />
      <div className={styles.user}>
        <span className={styles.userName}>{tweet.user.name}</span>
        <span className={styles.userUserName}>{tweet.user.username}</span>
        <span className={styles.date}>- {publishedToNew}</span>
      </div>
      <div className={styles.tweetText}>
        {tweet.text}
      </div>
    </div>
  )
}