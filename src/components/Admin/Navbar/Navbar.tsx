import styles from './Navbar.module.sass'
import NavbarLink from './NavbarLink'
import { selectUserName } from '../../../store/user'
import store from '../../../store'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const userName = useSelector(selectUserName)
  const location = useLocation()
  const isShown = location.pathname.includes('/admin')
  return (
    <div className={styles['navbar']} hidden={!isShown}>
      <div className={styles['navbar-header']}>
        <img
          className={styles['navbar-header-image']}
          src={'https://i.imgur.com/7igNXJ5.jpeg'}
          alt='user-avatar'
        />
        <h1 className={styles['navbar-header-username']}>{userName}</h1>
      </div>
      <div className={styles['navbar-body']}>
        <NavbarLink
          to='/admin'
          label={'Overview'}
          icon={<i className='fas fa-home' />}
        />
        <NavbarLink
          to='/admin/statistics'
          label={'Statistics'}
          icon={<i className='fas fa-chart-pie' />}
        />
        <NavbarLink
          to='/admin/database'
          label={'Database'}
          icon={<i className='fas fa-database' />}
        />
      </div>
    </div>
  )
}

export default Navbar
