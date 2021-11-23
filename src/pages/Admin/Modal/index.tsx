import styles from './index.module.sass'
const Modal = ({ children }: any) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['content']}>{children}</div>
    </div>
  )
}

export default Modal
