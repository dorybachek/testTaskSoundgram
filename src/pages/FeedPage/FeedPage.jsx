import { memo, useState } from 'react'
import BottomSheet from '../../components/BottomSheet/BottomSheet'
import List from '../../components/List/List'
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle'
import TrackCard from '../../components/TrackCard/TrackCard'
import YandexPlayer from '../../components/YandexPlayer/YandexPlayer'
import { tracks } from '../../data/tracks'
import styles from './FeedPage.module.css'

const FeedPage = () => {
  const [activeTrack, setActiveTrack] = useState(null)

  return (
    <section className={styles.page}>
      <ScreenTitle title="Лента" description="Свежие треки от ваших подписок" />

      <List className={styles.list}>
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onListen={setActiveTrack} />
        ))}
      </List>

      <BottomSheet
        isOpen={Boolean(activeTrack)}
        onClose={() => setActiveTrack(null)}
        title={activeTrack?.title}
        description={activeTrack?.artist}
        height={430}
        zIndex={50}
      >
        <YandexPlayer iframeSrc={activeTrack?.iframeSrc} title={activeTrack?.title} />
      </BottomSheet>
    </section>
  )
}

export default memo(FeedPage)
