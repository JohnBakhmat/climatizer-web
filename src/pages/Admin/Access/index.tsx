import { useEffect, useState } from 'react'
import styles from './style.module.sass'
import * as accessService from '../../../services/Admin/access'
import Table from '../../../components/Admin/Table'
import Modal from '../Modal'
import Edit from './Edit'
import { ModalTypes } from '../ModalTypes'
import Delete from './Delete'
import Create from './Create'
const Access = () => {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState({})
  const [currentModal, setCurrentModal] = useState(ModalTypes.none)
  useEffect(() => {
    accessService.get((respData: any) => {
      setData((prev) => respData.data)
    })
  }, [])
  const handleRowSelect = (row: any, modal: ModalTypes) => {
    setCurrentModal(modal)
    setSelectedRow(row)
  }
  return (
    <div>
      {currentModal !== ModalTypes.none && (
        <Modal>{getModal(currentModal, selectedRow)}</Modal>
      )}
      {data.length && <Table data={data} onSelect={handleRowSelect} />}
    </div>
  )
}

const getModal = (type: ModalTypes, data: any) => {
  switch (type) {
    case ModalTypes.Create: {
      return <Create />
    }
    case ModalTypes.Edit: {
      return <Edit data={data} />
    }
    case ModalTypes.Delete: {
      return <Delete />
    }
    default:
      return
  }
}
export default Access
