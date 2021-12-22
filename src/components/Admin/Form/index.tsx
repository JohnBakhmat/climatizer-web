import React, { Dispatch, useReducer } from 'react'
import { ModalTypes } from '../../../pages/Admin/ModalTypes'
import convertDataToJSX from '../../../utils/tableConverter'
import { Input } from '../../Auth/Input'
import { Checkbox } from '../Table/Checkbox'
import styles from './index.module.sass'
interface Props {
  onSubmit?: any
  title: string
  data: Object
  modal: ModalTypes
}

const Form = (props: Props) => {
  const reducer = (state: any, action: any) => {
    const { key, value } = action
    return { ...state, [key]: value }
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    props.onSubmit(dataState)
  }
  const [dataState, dispatch] = useReducer(reducer, props.data)
  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <h1>{props.title}</h1>
      {Object.entries(dataState).map((item: Array<any>) =>
        convertDataToJSX(item, props.modal, dispatch)
      )}
      <button className={styles['button-submit']} type='submit'>
        Submit
      </button>
    </form>
  )
}

export default Form
