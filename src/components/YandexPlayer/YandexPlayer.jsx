import styles from './YandexPlayer.module.css'

const YandexPlayer = (props) => {
  const {
    iframeSrc,
    title,
    height = 320,
  } = props

  if (!iframeSrc) {
    return (
      <div className={styles.placeholder} style={{ height: `${height}px` }}>
        Трек не выбран
      </div>
    )
  }

  return (
    <iframe
      className={styles.iframe}
      style={{ height: `${height}px` }}
      src={iframeSrc}
      title={`Плеер: ${title}`}
      frameBorder="0"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
    />
  )
}

export default YandexPlayer
