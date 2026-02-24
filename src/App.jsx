import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BottomTabBar from './components/BottomTabBar/BottomTabBar'
import FeedPage from './pages/FeedPage/FeedPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SearchPage from './pages/SearchPage/SearchPage'
import styles from './App.module.css'

const ROUTES = {
  ROOT: '/',
  FEED: '/feed',
  SEARCH: '/search',
  PROFILE: '/profile',
}

const VALID_PATHS = new Set([ROUTES.FEED, ROUTES.SEARCH, ROUTES.PROFILE])
const SIDE_PAGE_COMPONENTS = {
  [ROUTES.SEARCH]: SearchPage,
  [ROUTES.PROFILE]: ProfilePage,
}

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === ROUTES.ROOT || !VALID_PATHS.has(pathname)) {
      navigate(ROUTES.FEED, { replace: true })
    }
  }, [navigate, pathname])

  const activePath = VALID_PATHS.has(pathname) ? pathname : ROUTES.FEED
  const isFeedPage = activePath === ROUTES.FEED
  const SidePageComponent = SIDE_PAGE_COMPONENTS[activePath]

  return (
    <div className={styles.appShell}>
      <main className={styles.appContent}>
        <section className={isFeedPage ? styles.pageVisible : styles.pageHidden}>
          <FeedPage />
        </section>

        {!isFeedPage && SidePageComponent && (
          <section className={styles.pageVisible}>
            <SidePageComponent />
          </section>
        )}
      </main>

      <BottomTabBar />
    </div>
  )
}

export default App
