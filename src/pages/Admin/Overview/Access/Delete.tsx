import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../../../../components/Admin/Form'
import { accessDelete, put } from '../../../../services/Admin/access'
import { selectLanguagePack } from '../../../../store/localization'
import { ModalTypes } from '../../ModalTypes'
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
  const language = useSelector(selectLanguagePack)

  return (
    <div className={styles['edit']}>
      <Form
        data={props.data}
        modal={ModalTypes.Delete}
        title={language.delete}
        onSubmit={handelSubmit}
      />
    </div>
  )
}

export default Delete
