import styles from './ProfileDetailsCard.module.css'

const StatCell = (props) => {
  const {
    label,
    value,
    onClick,
  } = props

  if (!onClick) {
    return (
      <div className={styles.statCell}>
        <span className={styles.statValue}>{value}</span>
        <span className={styles.statLabel}>{label}</span>
      </div>
    )
  }

  return (
    <button className={`${styles.statCell} ${styles.clickableCell}`} type="button" onClick={onClick}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </button>
  )
}

const ProfileDetailsCard = (props) => {
  const {
    profile,
    onOpenSubscriptions,
    onToggleSubscribe,
  } = props

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <img className={styles.avatar} src={profile.avatarUrl} alt={profile.fullName} />
        <div className={styles.identity}>
          <p className={styles.name}>{profile.fullName}</p>
          <p className={styles.username}>{profile.username}</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <StatCell label="Подписчики" value={profile.followersCount} />
        <StatCell label="Подписки" value={profile.followingCount} onClick={onOpenSubscriptions} />
        <StatCell label="Треки" value={profile.tracksCount} />
      </div>

      {!profile.isCurrentUser && (
        <button className={styles.subscribeButton} type="button" onClick={() => onToggleSubscribe(profile)}>
          {profile.isSubscribed ? 'Отписаться' : 'Подписаться'}
        </button>
      )}
    </article>
  )
}

export default ProfileDetailsCard
