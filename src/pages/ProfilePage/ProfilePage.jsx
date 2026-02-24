import { useState } from 'react'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import List from '../../components/List/List'
import ProfileDetailsCard from '../../components/ProfileDetailsCard/ProfileDetailsCard'
import ProfileListCard from '../../components/ProfileListCard/ProfileListCard'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'
import { currentUserProfile, profilesCatalog, subscriptionsMock } from '../../data/profiles'
import styles from './ProfilePage.module.css'

const profilesById = Object.fromEntries(profilesCatalog.map((profile) => [profile.id, profile]))

const ProfilePage = () => {
  const [subscriptions, setSubscriptions] = useState(subscriptionsMock)
  const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)

  const updateSelectedProfile = (profileId, nextSubscribedState) => {
    setSelectedProfile((prev) => {
      if (!prev || prev.id !== profileId) {
        return prev
      }

      const value = typeof nextSubscribedState === 'function'
        ? nextSubscribedState(prev.isSubscribed)
        : nextSubscribedState

      return { ...prev, isSubscribed: value }
    })
  }

  const profileForPage = {
    ...currentUserProfile,
    followingCount: subscriptions.length,
  }

  const unsubscribe = (profileId) => {
    setSubscriptions((prev) => prev.filter((item) => item.id !== profileId))
    updateSelectedProfile(profileId, false)
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

    updateSelectedProfile(profile.id, (current) => !current)
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
