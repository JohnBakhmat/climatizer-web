import { Input } from '../../../components/Auth/Input'
import styles from './style.module.sass'
const Edit = () => {
  return (
    <form className={styles['edit']}>
      <h1 className={styles['title']}>Edit</h1>
      <label>_ID</label>
    </form>
  )
}

export default Edit
