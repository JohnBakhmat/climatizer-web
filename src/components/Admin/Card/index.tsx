import { Link } from 'react-router-dom'
import styles from './index.module.sass'
export class CardType {
  img?: string
  label?: string
  id?: any
  key?: any
  to?: string
  constructor(img: string, label: string, to: string) {
    this.img = img
    this.label = label
    this.to = to
  }
}
const Card = ({
  label = 'asdf',
  img = 'https://ru.powerthesaurus.org/_images/terms/dummy-synonyms-2.png',
  to = '/',
}: CardType) => {
  return (
    <Link to={to} className={styles['wrap']}>
      <img src={img} alt='card-icon' className={styles['image']} />
      <h1 className={styles['label']}>{label}</h1>
    </Link>
  )
}

export default Card
