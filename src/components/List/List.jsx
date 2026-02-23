import { forwardRef } from 'react'
import styles from './List.module.css'

const List = forwardRef((props, ref) => {
  const {
    children,
    className = '',
  } = props

  return (
    <div ref={ref} className={`${styles.list} ${className}`}>
      {children}
    </div>
  )
})

List.displayName = 'List'

export default List
