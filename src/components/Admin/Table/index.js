import React from 'react'
import styles from './index.module.sass'
const RenderRow = (props) =>
  props.keys.map((key, index) => (
    <td className={styles['td']} key={props.data[key]}>
      {JSON.stringify(props.data[key])}
    </td>
  ))

const Table = (props) => {
  const getKeys = () => Object.keys(props.data[0])

  const getHeader = () =>
    getKeys().map((key, index) => <th key={key}>{key.toUpperCase()}</th>)

  const getRowsData = () => {
    const items = props.data
    const keys = getKeys()
    return items.map((row, index) => (
      <tr className={styles['tr-body']} key={index}>
        <RenderRow key={index} data={row} keys={keys} />
      </tr>
    ))
  }
  return (
    <div className={styles['wrapper']}>
      <table className={styles['table']}>
        <thead className={styles['thead']}>
          <tr className={styles['tr-head']}>{getHeader()}</tr>
        </thead>
        <tbody className={styles['tbody']}>{getRowsData()}</tbody>
      </table>
    </div>
  )
}
export default Table
