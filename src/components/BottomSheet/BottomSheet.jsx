import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ScreenTitle from '../ScreenTitle/ScreenTitle'
import styles from './BottomSheet.module.css'

let openSheetsCount = 0
let savedScrollY = 0

const lockBodyScroll = () => {
  const body = document.body
  const html = document.documentElement

  if (openSheetsCount === 0) {
    savedScrollY = window.scrollY
    body.style.position = 'fixed'
    body.style.top = `-${savedScrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
  }

  openSheetsCount += 1
}

const unlockBodyScroll = () => {
  openSheetsCount = Math.max(0, openSheetsCount - 1)

  if (openSheetsCount !== 0) {
    return
  }

  const body = document.body
  const html = document.documentElement

  body.style.position = ''
  body.style.top = ''
  body.style.left = ''
  body.style.right = ''
  body.style.width = ''
  body.style.overflow = ''
  html.style.overflow = ''

  window.scrollTo(0, savedScrollY)
}

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

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    lockBodyScroll()

    return () => {
      unlockBodyScroll()
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={styles.layer} style={{ zIndex }}>
      <button
        className={styles.overlay}
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
      />

      <section className={styles.sheet} style={{ height: `${height}px` }}>
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
