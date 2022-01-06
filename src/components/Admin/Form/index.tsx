import React, { Dispatch, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { ModalTypes } from '../../../pages/Admin/ModalTypes'
import { selectLanguagePack } from '../../../store/localization'
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
  const language = useSelector(selectLanguagePack)

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <h1>{props.title}</h1>
      {Object.entries(dataState).map((item: Array<any>) =>
        convertDataToJSX(item, props.modal, dispatch)
      )}
      <button className={styles['button-submit']} type='submit'>
        {language.submit}
      </button>
    </form>
  )
}

export default Form
