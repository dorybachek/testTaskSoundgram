import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BottomTabBar from './components/BottomTabBar/BottomTabBar'
import FeedPage from './pages/FeedPage/FeedPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SearchPage from './pages/SearchPage/SearchPage'
import styles from './App.module.css'

const FEED_PATH = '/feed'
const SEARCH_PATH = '/search'
const PROFILE_PATH = '/profile'

const VALID_PATHS = new Set([FEED_PATH, SEARCH_PATH, PROFILE_PATH])

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/' || !VALID_PATHS.has(location.pathname)) {
      navigate(FEED_PATH, { replace: true })
    }
  }, [location.pathname, navigate])

  const activePath = VALID_PATHS.has(location.pathname) ? location.pathname : FEED_PATH
  const isFeedPage = activePath === FEED_PATH

  let sidePage = null

  if (activePath === SEARCH_PATH) {
    sidePage = <SearchPage />
  }

  if (activePath === PROFILE_PATH) {
    sidePage = <ProfilePage />
  }

  return (
    <div className={styles.appShell}>
      <main className={styles.appContent}>
        <section className={isFeedPage ? styles.pageVisible : styles.pageHidden}>
          <FeedPage />
        </section>

        {!isFeedPage && <section className={styles.pageVisible}>{sidePage}</section>}
      </main>

      <BottomTabBar />
    </div>
  )
}

export default App
