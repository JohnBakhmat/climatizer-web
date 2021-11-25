import { useRef } from 'react'
import styles from './index.module.sass'
type ModalProps = {
  children: any
  isOpen: boolean
  onCloseModal?: any
}

const Modal = ({ children, isOpen, onCloseModal }: ModalProps) => {
  const modalElement = useRef<any>()
  const handleClickRoot = (event: any) => {
    if (modalElement.current && !modalElement.current.contains(event.target)) {
      onCloseModal()
    }
  }
  return (
    <>
      {isOpen && (
        <div className={styles['modal']} onMouseDown={handleClickRoot}>
          <div className={styles['content']} ref={modalElement}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
