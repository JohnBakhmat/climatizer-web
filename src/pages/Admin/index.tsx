import Card, { CardType } from '../../components/Admin/Card'
import styles from './index.module.sass'
import AccessImg from '../../assets/Access.png'
import BuildingImg from '../../assets/Building.png'
import RequestImg from '../../assets/Request.png'

const Admin = () => {
  const card = [
    new CardType(AccessImg, 'Access', '/admin/access'),
    new CardType(BuildingImg, 'Buildings', '/admin/building'),
    new CardType(RequestImg, 'Requests', '/admin/request'),
  ]
  return (
    <div className={styles['wrapper']}>
      {card.map((card) => (
        <Card label={card.label} img={card.img} to={card.to} />
      ))}
    </div>
  )
}

export default Admin
