import styles from './Navbar.module.sass'
import NavbarLink from './NavbarLink'
import { selectUserName } from '../../../store/user'
import { selectLanguagePack } from '../../../store/localization'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import LanguagePicker from './LanguagePicker'

const Navbar = () => {
  const language = useSelector(selectLanguagePack)

  const userName = useSelector(selectUserName)
  const location = useLocation()
  const isShown = location.pathname.includes('/admin')
  return (
    <div className={styles['navbar']} hidden={!isShown}>
      <div className={styles['navbar-header']}>
        <div className={styles['circle']}>
          <div className={styles['border']} />
          <img
            className={styles['navbar-header-image']}
            src={'https://i.imgur.com/7igNXJ5.jpeg'}
            alt='user-avatar'
          />
        </div>
        <h1 className={styles['navbar-header-username']}>{userName}</h1>
      </div>
      <div className={styles['navbar-body']}>
        <NavbarLink
          to='/admin'
          label={language.overview}
          icon={<i className='fas fa-home' />}
        />
        <NavbarLink
          to='/admin/statistics'
          label={language.statistics}
          icon={<i className='fas fa-chart-pie' />}
        />
        <NavbarLink
          to='/admin/database'
          label={language.database}
          icon={<i className='fas fa-database' />}
        />
      </div>
      <LanguagePicker />
    </div>
  )
}

export default Navbar
