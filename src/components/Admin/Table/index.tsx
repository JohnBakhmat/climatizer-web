import React from 'react'
import { ModalTypes } from '../../../pages/Admin/ModalTypes'
import styles from './index.module.sass'
function stringify(data: any): any {
  if (/true/i.test(data))
    return <i className='fas fa-check-square text-green-600 text-4xl' />
  else if (/false/i.test(data))
    return <i className='fas fa-minus-square text-red-600 text-4xl' />
  else if (Array.isArray(data)) return data.join(', ')
  else if (/Completed/.test(data))
    return <p className='text-green-600'>{data}</p>
  else if (/In Progress/.test(data))
    return <p className='text-red-600'>{data}</p>
  return data
}

const RenderRow = (props: any) =>
  props.keys.map((key: any, index: any) => (
    <td className={styles['td']} key={props.data[key]}>
      {stringify(props.data[key])}
    </td>
  ))

const Table = (props: any) => {
  const getKeys = () => Object.keys(props.data[0])

  const getHeader = () =>
    getKeys().map((key, index) => <th key={key}>{key.toUpperCase()}</th>)

  const handleButtonClick = (object: Object, modal: ModalTypes) => {
    props.onSelect(object, modal)
  }

  const getRowsData = () => {
    const items = props.data
    const keys = getKeys()
    return items.map((row: any, index: number) => (
      <tr className={styles['tr-body']} key={index}>
        <RenderRow key={index} data={row} keys={keys} />
        {!props.readOnly && (
          <td style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <button
              onClick={() => handleButtonClick(row, ModalTypes.Edit)}
              className={`${styles['button']} ${styles['edit']}`}
            >
              Edit
            </button>
            <button
              onClick={() => handleButtonClick(row, ModalTypes.Delete)}
              className={`${styles['button']} ${styles['delete']}`}
            >
              Delete
            </button>
          </td>
        )}
      </tr>
    ))
  }
  return (
    <div className={styles['wrapper']}>
      <table className={styles['table']}>
        <thead className={styles['thead']}>
          <tr className={styles['tr-head']}>
            {getHeader()}
            {!props.readOnly && <th>Actions</th>}
          </tr>
        </thead>
        <tbody className={styles['tbody']}>{getRowsData()}</tbody>
      </table>
    </div>
  )
}
export default Table
