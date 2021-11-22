import styles from './index.module.sass'
const NavbarLink = ({ icon, label, isActive }: any) => {
  return (
    <button
      className={`${styles['button']} ${isActive ? styles['active'] : ''}`}
    >
      <span>{icon}</span>
      <p>{label}</p>
    </button>
  )
}

export default NavbarLink
