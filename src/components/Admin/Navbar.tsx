import styles from './Navbar.module.sass'
import NavbarLink from './NavbarLink'
import { selectUserName } from '../../store/user'
import store from '../../store'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const userName = useSelector(selectUserName)
  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar-header']}>
        <img
          className={styles['navbar-header-image']}
          src={'https://i.imgur.com/7igNXJ5.jpeg'}
          alt='user-avatar'
        />
        <h1 className={styles['navbar-header-username']}>{userName}</h1>
      </div>
      <div className={styles['navbar-body']}>
        <NavbarLink />
        <NavbarLink />
        <NavbarLink />
        <NavbarLink />
      </div>
    </div>
  )
}

export default Navbar
