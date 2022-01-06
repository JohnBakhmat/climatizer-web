import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../../../../components/Admin/Form'
import { put } from '../../../../services/Admin/access'
import { selectLanguagePack } from '../../../../store/localization'
import { ModalTypes } from '../../ModalTypes'
import styles from './style.module.sass'

type PropTypes = {
  data?: any
  onSubmit?: any
}
const Edit = (props: PropTypes) => {
  const handelSubmit = (data: any) => {
    put(data, (response: any) => {
      console.log(response)
    })
    props.onSubmit && props.onSubmit()
  }

  const language = useSelector(selectLanguagePack)

  return (
    <div className={styles['edit']}>
      <Form
        data={props.data}
        modal={ModalTypes.Edit}
        title={language.edit}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Edit
