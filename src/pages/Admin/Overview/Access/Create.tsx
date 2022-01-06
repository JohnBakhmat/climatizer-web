import styles from './style.module.sass'
import { ModalTypes } from '../../ModalTypes'
import { post } from '../../../../services/Admin/access'

import Form from '../../../../components/Admin/Form'
import { useSelector } from 'react-redux'
import { selectLanguagePack } from '../../../../store/localization'
class Access {
  user: string = ''
  room: string = ''
  isAllowed: boolean = false
}
const Create = (props: any) => {
  const language = useSelector(selectLanguagePack)
  const handelSubmit = (data: any) => {
    post(data, (response: any) => {
      console.log(response)
    })
    props.onSubmit && props.onSubmit()
  }
  return (
    <div className={styles['edit']}>
      <Form
        data={new Access()}
        modal={ModalTypes.Create}
        title={language.create}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Create
