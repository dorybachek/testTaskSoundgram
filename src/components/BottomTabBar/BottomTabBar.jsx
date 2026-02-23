import { NavLink } from 'react-router-dom'
import styles from './BottomTabBar.module.css'

const tabs = [
  { label: 'Лента', path: '/feed' },
  { label: 'Поиск', path: '/search' },
  { label: 'Профиль', path: '/profile' },
]

const BottomTabBar = () => {
  return (
    <nav className={styles.bar} aria-label="Нижняя навигация">
      {tabs.map((tab) => (
        <NavLink
          key={tab.path}
          to={tab.path}
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomTabBar
