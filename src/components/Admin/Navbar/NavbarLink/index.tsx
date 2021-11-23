import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.sass'
const NavbarLink = ({ icon, label, to }: any) => {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link
      to={to}
      className={`${styles['button']} ${isActive ? styles['active'] : ''}`}
    >
      <span>{icon}</span>
      <p>{label}</p>
    </Link>
  )
}

export default NavbarLink
