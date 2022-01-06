import styles from './style.module.sass'
import { ModalTypes } from '../../ModalTypes'
import { post } from '../../../../services/Admin/request'

import Form from '../../../../components/Admin/Form'
import { useSelector } from 'react-redux'
import { selectLanguagePack } from '../../../../store/localization'
class Request {
  presetId: string = '61825a5c6ffc72b4f67d4882'
  userId: string = '61825a5c6ffc72b4f67d4882'
  roomId: string = '61825a5c6ffc72b4f67d4882'
}
const Create = () => {
  const handelSubmit = (data: any) => {
    post(data, (response: any) => {
      console.log(response)
    })
  }
  const language = useSelector(selectLanguagePack)

  return (
    <div className={styles['edit']}>
      <Form
        data={new Request()}
        modal={ModalTypes.Create}
        title={language.create}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Create
