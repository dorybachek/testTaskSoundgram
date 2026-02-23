import styles from './ScreenTitle.module.css'

const ScreenTitle = (props) => {
  const {
    title,
    description,
    compact = false,
    className = '',
  } = props

  const HeadingTag = compact ? 'h2' : 'h1'

  return (
    <header className={`${styles.wrapper} ${compact ? styles.compact : ''} ${className}`}>
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}

export default ScreenTitle
