import React, { Dispatch, useReducer } from 'react'
import { ModalTypes } from '../../../pages/Admin/ModalTypes'
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

const convertDataToJSX = (
  data: Array<any>,
  modal: ModalTypes,
  dispatch: any
): JSX.Element => {
  const value = data[1]
  const key = data[0]
  const isDisabled = key === '_id' || modal === ModalTypes.Delete
  if (key === '__v') {
    return <></>
  } else if (typeof value === 'boolean') {
    return (
      <Checkbox
        value={value}
        label={key}
        isDisabled={isDisabled}
        onChange={(value: any) => dispatch({ key, value })}
      />
    )
  } else {
    return (
      <Input
        onChange={(value: any) => dispatch({ key, value })}
        label={key}
        type={'text'}
        value={value}
        isDisabled={isDisabled}
      />
    )
  }
}
export default Form
