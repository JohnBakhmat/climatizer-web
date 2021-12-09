import React from 'react'
import Form from '../../../../components/Admin/Form'
import { put } from '../../../../services/Admin/access'
import { ModalTypes } from '../../ModalTypes'
import styles from './style.module.sass'

type PropTypes = {
  data?: any
}
const Edit = (props: PropTypes) => {
  const handelSubmit = (data: any) => {
    put(data, (response: any) => {
      console.log(response)
    })
  }

  return (
    <div className={styles['edit']}>
      <Form
        data={props.data}
        modal={ModalTypes.Edit}
        title={'Edit'}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Edit
