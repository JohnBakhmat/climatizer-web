import Card, { CardType } from '../../components/Admin/Card'
import styles from './index.module.sass'
import AccessImg from '../../assets/Access.png'
import BuildingImg from '../../assets/Building.png'
import RequestImg from '../../assets/Request.png'
import DeviceImg from '../../assets/Devices.png'
import ClimateSettingsImg from '../../assets/ClimateSettings_1.svg'
import RoomImg from '../../assets/Rooms.png'
import PresetImg from '../../assets/Presets.svg'
import { useSelector } from 'react-redux'
import { selectLanguagePack } from '../../store/localization'

const Admin = () => {
  const language = useSelector(selectLanguagePack)
  const card = [
    new CardType(AccessImg, language.access, '/admin/access'),
    new CardType(BuildingImg, language.buildings, '/admin/building'),
    new CardType(DeviceImg, language.devices, '/admin/device'),
    new CardType(RequestImg, language.requests, '/admin/request'),
    new CardType(
      ClimateSettingsImg,
      language.climateSettings,
      '/admin/climate-settings'
    ),
    new CardType(PresetImg, language.presets, '/admin/presets'),
    new CardType(RoomImg, language.rooms, '/admin/rooms'),
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
