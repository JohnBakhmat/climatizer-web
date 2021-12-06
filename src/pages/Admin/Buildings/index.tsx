import { useEffect, useState } from 'react'
import styles from './style.module.sass'
import * as buildingService from '../../../services/Admin/building'
import Table from '../../../components/Admin/Table'
import Modal from '../../../components/Modal'
import Edit from './Edit'
import { ModalTypes } from '../ModalTypes'
import Delete from './Delete'
import Create from './Create'
const Access = () => {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState({})
  const [currentModal, setCurrentModal] = useState(ModalTypes.none)
  useEffect(() => {
    buildingService.buildingGet((respData: any) => {
      setData((prev) => respData.data)
    })
  }, [])
  const handleRowSelect = (row: any, modal: ModalTypes) => {
    setCurrentModal(modal)
    setSelectedRow(row)
  }

  const handleCloseModal = () => {
    setCurrentModal(ModalTypes.none)
    setSelectedRow({})
  }
  return (
    <div>
      <div className={styles['create']}>
        <button onClick={() => setCurrentModal(ModalTypes.Create)}>
          Create
        </button>
      </div>

      <Modal
        isOpen={currentModal !== ModalTypes.none}
        onCloseModal={handleCloseModal}
      >
        {getModal(currentModal, selectedRow)}
      </Modal>
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
      return <Delete data={data} />
    }
    default:
      return <></>
  }
}
export default Access
