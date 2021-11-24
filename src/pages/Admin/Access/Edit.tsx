import Form from '../../../components/Admin/Form'
import { ModalTypes } from '../ModalTypes'
import styles from './style.module.sass'

type PropTypes = {
  data?: any
}
const Edit = (props: PropTypes) => {
  return (
    <div className={styles['edit']}>
      <Form data={props.data} modal={ModalTypes.Edit} title={'Edit'} />
    </div>
  )
}

export default Edit
