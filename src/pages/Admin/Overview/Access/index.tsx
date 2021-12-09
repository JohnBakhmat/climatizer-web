import { useCallback, useEffect, useState } from 'react'
import styles from './style.module.sass'
import * as accessService from '../../../../services/Admin/access'
import Table from '../../../../components/Admin/Table'
import Modal from '../../../../components/Modal'
import Edit from './Edit'
import { ModalTypes } from '../../ModalTypes'
import Delete from './Delete'
import Create from './Create'
const Access = () => {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState({})
  const [currentModal, setCurrentModal] = useState(ModalTypes.none)
  const getData = useCallback(() => {
    accessService.get((respData: any) => {
      setData((prev) => respData.data)
    })
  }, [])

  useEffect(getData, [getData])
  const handleRowSelect = (row: any, modal: ModalTypes) => {
    setCurrentModal(modal)
    setSelectedRow(row)
  }

  const handleCloseModal = () => {
    setCurrentModal(ModalTypes.none)
    setSelectedRow({})
    getData()
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
        {getModal(currentModal, selectedRow, handleCloseModal)}
      </Modal>
      {data.length && <Table data={data} onSelect={handleRowSelect} />}
    </div>
  )
}

const getModal = (type: ModalTypes, data: any, handleCloseModal: any) => {
  switch (type) {
    case ModalTypes.Create: {
      return <Create onSubmit={handleCloseModal} />
    }
    case ModalTypes.Edit: {
      return <Edit onSubmit={handleCloseModal} data={data} />
    }
    case ModalTypes.Delete: {
      return <Delete onSubmit={handleCloseModal} data={data} />
    }
    default:
      return <></>
  }
}
export default Access
