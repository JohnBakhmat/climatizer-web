import Card from '../../components/Admin/Card'
import styles from './index.module.sass'
const Admin = () => {
  return (
    <div className={styles['wrapper']}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Admin
