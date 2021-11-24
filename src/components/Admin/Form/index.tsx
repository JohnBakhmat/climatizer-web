import React from 'react'
import { ModalTypes } from '../../../pages/Admin/ModalTypes'
import { Input } from '../../Auth/Input'
import { Checkbox } from '../Table/Checkbox'
import styles from './index.module.sass'
interface Props {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  title: string
  data: Object
  modal: ModalTypes
}

const Form = (props: Props) => {
  const convertDataToJSX = (
    data: Array<any>,
    modal: ModalTypes
  ): JSX.Element => {
    const value = data[1]
    const key = data[0]
    const isDisabled = key === '_id' || modal === ModalTypes.Delete
    if (key === '__v') return <></>
    if (typeof value === 'boolean')
      return <Checkbox value={value} label={key} />
    return (
      <Input label={key} type={'text'} value={value} isDisabled={isDisabled} />
    )
  }
  return (
    <form className={styles['form']} onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {Object.entries(props.data).map((item: Array<any>) =>
        convertDataToJSX(item, props.modal)
      )}
    </form>
  )
}

export default Form
