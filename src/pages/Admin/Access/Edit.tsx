import Form from '../../../components/Admin/Form'
import styles from './style.module.sass'

type PropTypes = {
  data?: any
}
const Edit = (props: PropTypes) => {
  return (
    <div className={styles['edit']}>
      <Form data={props.data} />
    </div>
  )
}

export default Edit
