import React from 'react'
import Form from '../../../components/Admin/Form'
import { accessDelete, put } from '../../../services/Admin/access'
import { ModalTypes } from '../ModalTypes'
import styles from './style.module.sass'

type PropTypes = {
  data?: any
  onSubmit?: any
}
const Delete = (props: PropTypes) => {
  const handelSubmit = (data: any) => {
    accessDelete(data, (response: any) => {
      console.log(response)
    })
    props.onSubmit && props.onSubmit()
  }

  return (
    <div className={styles['edit']}>
      <Form
        data={props.data}
        modal={ModalTypes.Delete}
        title={'Delete'}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Delete
