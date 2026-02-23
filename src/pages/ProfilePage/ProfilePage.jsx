import { useMemo, useState } from 'react'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import List from '../../components/List/List'
import ProfileDetailsCard from '../../components/ProfileDetailsCard/ProfileDetailsCard'
import ProfileListCard from '../../components/ProfileListCard/ProfileListCard'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'
import { currentUserProfile, profilesCatalog, subscriptionsMock } from '../../data/profiles'
import styles from './ProfilePage.module.css'

const ProfilePage = () => {
  const [subscriptions, setSubscriptions] = useState(subscriptionsMock)
  const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)

  const profilesById = useMemo(() => {
    const map = {}

    profilesCatalog.forEach((profile) => {
      map[profile.id] = profile
    })

    return map
  }, [])

  const profileForPage = {
    ...currentUserProfile,
    followingCount: subscriptions.length,
  }

  const unsubscribe = (profileId) => {
    setSubscriptions((prev) => prev.filter((item) => item.id !== profileId))

    setSelectedProfile((prev) => {
      if (!prev || prev.id !== profileId) {
        return prev
      }

      return { ...prev, isSubscribed: false }
    })
  }

  const toggleSubscribe = (profile) => {
    setSubscriptions((prev) => {
      const isAlreadySubscribed = prev.some((item) => item.id === profile.id)

      if (isAlreadySubscribed) {
        return prev.filter((item) => item.id !== profile.id)
      }

      const nextProfile = profilesById[profile.id] ?? profile
      return [...prev, { ...nextProfile, isSubscribed: true }]
    })

    setSelectedProfile((prev) => {
      if (!prev || prev.id !== profile.id) {
        return prev
      }

      return { ...prev, isSubscribed: !prev.isSubscribed }
    })
  }

  const closeSubscriptionsSheet = () => {
    setIsSubscriptionsOpen(false)
    setSelectedProfile(null)
  }

  return (
    <section className={styles.page}>
      <ScreenTitle title="Профиль" description="Ваш SOUNDGRAM профиль" />

      <ProfileDetailsCard
        profile={profileForPage}
        onOpenSubscriptions={() => setIsSubscriptionsOpen(true)}
      />

      <BottomSheet
        isOpen={isSubscriptionsOpen}
        onClose={closeSubscriptionsSheet}
        title="Подписки"
        description="Список людей, на которых вы подписаны"
        height={520}
        zIndex={55}
      >
        {subscriptions.length === 0 ? (
          <p className={styles.emptyState}>Вы пока ни на кого не подписаны</p>
        ) : (
          <List className={styles.subscriptionsList}>
            {subscriptions.map((profile) => (
              <ProfileListCard
                key={profile.id}
                profile={profile}
                onOpen={setSelectedProfile}
                onUnsubscribe={unsubscribe}
              />
            ))}
          </List>
        )}
      </BottomSheet>

      <BottomSheet
        isOpen={Boolean(selectedProfile)}
        onClose={() => setSelectedProfile(null)}
        title="Профиль пользователя"
        description="Подробная карточка"
        height={520}
        zIndex={65}
      >
        {selectedProfile && (
          <ProfileDetailsCard
            profile={selectedProfile}
            onToggleSubscribe={toggleSubscribe}
          />
        )}
      </BottomSheet>
    </section>
  )
}

export default ProfilePage
