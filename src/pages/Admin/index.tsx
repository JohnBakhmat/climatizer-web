import Card, { CardType } from '../../components/Admin/Card'
import styles from './index.module.sass'
import AccessImg from '../../assets/Access.png'
import BuildingImg from '../../assets/Building.png'
import RequestImg from '../../assets/Request.png'
import DeviceImg from '../../assets/Devices.png'
import ClimateSettingsImg from '../../assets/ClimateSettings_1.svg'
import RoomImg from '../../assets/Rooms.png'
import PresetImg from '../../assets/Presets.svg'

const Admin = () => {
  const card = [
    new CardType(AccessImg, 'Access', '/admin/access'),
    new CardType(BuildingImg, 'Buildings', '/admin/building'),
    new CardType(DeviceImg, 'Devices', '/admin/device'),
    new CardType(RequestImg, 'Requests', '/admin/request'),
    new CardType(
      ClimateSettingsImg,
      'Climate Settings',
      '/admin/climate-settings'
    ),
    new CardType(PresetImg, 'Presets', '/admin/presets'),
    new CardType(RoomImg, 'Rooms', '/admin/device'),
  ]
  return (
    <div className={styles['wrapper']}>
      {card.map((card) => (
        <Card
          className={styles['card']}
          label={card.label}
          img={card.img}
          to={card.to}
        />
      ))}
    </div>
  )
}

export default Admin
