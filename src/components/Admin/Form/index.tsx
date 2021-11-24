import React from 'react'
import { Input } from '../../Auth/Input'
import styles from './index.module.sass'
interface Props {
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  title?: string
  data: Object
}
const convertDataToJSX = (data: Array<any>): JSX.Element => {
  const value = data[1]
  const key = data[0]
  const isId = key === '_id'
  if (key === '__v') return <></>
  return <Input label={key} type={'text'} value={value} isDisabled={isId} />
}
const Form = (props: Props) => {
  return (
    <form className={styles['form']} onSubmit={props.onSubmit}>
      <h1>{props.title}</h1>
      {Object.entries(props.data).map((item: Array<any>) =>
        convertDataToJSX(item)
      )}
    </form>
  )
}

export default Form
