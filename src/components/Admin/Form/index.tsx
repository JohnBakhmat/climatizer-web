import styles from './index.module.sass'

import React from 'react'
import { TupleType } from 'typescript'

interface Props {
  onSubmit?: any
  title: string
  data: any
}

const Form = (props: Props) => {
  return (
    <form>
      <h1>{props.title}</h1>
      {props.data.entries.map((item: any) => {})}
    </form>
  )
}

export default Form
