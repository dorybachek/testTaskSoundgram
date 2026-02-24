import styles from './TrackCard.module.css'

const TrackCard = (props) => {
  const {
    track,
    onListen,
  } = props

  return (
    <article className={styles.card}>
      <img className={styles.cover} src={track.coverUrl} alt={`Обложка: ${track.title}`} />

      <div className={styles.info}>
        <p className={styles.title}>{track.title}</p>
        <p className={styles.artist}>{track.artist}</p>
      </div>

      <button className={styles.listenButton} type="button" onClick={() => onListen(track)}>
        Слушать
      </button>
    </article>
  )
}

export default TrackCard
