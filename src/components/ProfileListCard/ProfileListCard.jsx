import styles from './ProfileListCard.module.css'

const ProfileListCard = (props) => {
  const {
    profile,
    onOpen,
    onUnsubscribe,
  } = props

  return (
    <article className={styles.card}>
      <button className={styles.mainButton} type="button" onClick={() => onOpen(profile)}>
        <img className={styles.avatar} src={profile.avatarUrl} alt={profile.fullName} />
        <div className={styles.info}>
          <p className={styles.name}>{profile.fullName}</p>
          <p className={styles.username}>{profile.username}</p>
        </div>
      </button>

      <button className={styles.unsubscribeButton} type="button" onClick={() => onUnsubscribe(profile.id)}>
        Отписаться
      </button>
    </article>
  )
}

export default ProfileListCard
