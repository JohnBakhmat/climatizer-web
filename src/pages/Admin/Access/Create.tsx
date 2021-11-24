import styles from './style.module.sass'
import { ModalTypes } from '../ModalTypes'
import { post } from '../../../services/Admin/access'

import Form from '../../../components/Admin/Form'
class Access {
  user: string = ''
  room: string = ''
  isAllowed: boolean = false
}
const Create = () => {
  const handelSubmit = (data: any) => {
    post(data, (response: any) => {
      console.log(response)
    })
  }
  return (
    <div className={styles['edit']}>
      <Form
        data={new Access()}
        modal={ModalTypes.Create}
        title={'Create'}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Create
