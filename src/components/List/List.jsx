import styles from './List.module.css'

const List = (props) => {
  const {
    children,
    className = '',
  } = props

  return <div className={`${styles.list} ${className}`}>{children}</div>
}

export default List
