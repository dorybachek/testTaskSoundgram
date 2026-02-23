import { memo, useEffect, useRef, useState } from 'react'
import List from '../../components/List/List'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'
import YandexPlayer from '../../components/YandexPlayer/YandexPlayer'
import { tracks } from '../../data/tracks'
import styles from './FeedPage.module.css'

const INITIAL_BATCH_SIZE = 20
const BATCH_SIZE = 20

const FeedPage = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE)
  const listRef = useRef(null)
  const sentinelRef = useRef(null)

  const visibleTracks = tracks.slice(0, visibleCount)
  const hasMore = visibleCount < tracks.length

  useEffect(() => {
    if (!hasMore) {
      return undefined
    }

    const listElement = listRef.current
    const sentinelElement = sentinelRef.current

    if (!listElement || !sentinelElement) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries

        if (!entry?.isIntersecting) {
          return
        }

        setVisibleCount((prevCount) => Math.min(prevCount + BATCH_SIZE, tracks.length))
      },
      {
        root: listElement,
        rootMargin: '120px 0px',
        threshold: 0.01,
      },
    )

    observer.observe(sentinelElement)

    return () => observer.disconnect()
  }, [hasMore])

  return (
    <section className={styles.page}>
      <ScreenTitle title="Лента" description="Свежие треки от ваших подписок" />

      <List className={styles.list} ref={listRef}>
        {visibleTracks.map((track) => (
          <YandexPlayer
            key={track.id}
            iframeSrc={track.iframeSrc}
            title={track.title}
            height={90}
          />
        ))}

        {hasMore ? (
          <div ref={sentinelRef} className={styles.loader}>
            Загружаем еще треки...
          </div>
        ) : (
          <p className={styles.endLabel}>Все треки загружены</p>
        )}
      </List>
    </section>
  )
}

export default memo(FeedPage)
