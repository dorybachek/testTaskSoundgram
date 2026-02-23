import { createPortal } from 'react-dom'
import ScreenTitle from '../ScreenTitle/ScreenTitle'
import styles from './BottomSheet.module.css'

const BottomSheet = (props) => {
  const {
    isOpen,
    onClose,
    title,
    description,
    height = 460,
    zIndex = 40,
    children,
  } = props

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={styles.layer} style={{ zIndex }}>
      <button
        className={styles.overlay}
        style={{ bottom: `${height}px` }}
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
      />

      <section className={styles.sheet} style={{ height: `${height}px` }}>
        <button className={styles.closeButton} type="button" aria-label="Закрыть" onClick={onClose}>
          Закрыть
        </button>

        <div className={styles.handle} />

        {(title || description) && (
          <ScreenTitle
            title={title}
            description={description}
            compact
            className={styles.header}
          />
        )}

        <div className={styles.content}>{children}</div>
      </section>
    </div>,
    document.body,
  )
}

export default BottomSheet
