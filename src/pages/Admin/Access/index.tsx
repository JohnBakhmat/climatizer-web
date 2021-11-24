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
  const [currentModal, setCurrentModal] = useState(ModalTypes.Edit)
  useEffect(() => {
    accessService.get((respData: any) => {
      setData((prev) => respData.data)
    })
  }, [])

  return (
    <div>
      {currentModal !== ModalTypes.none && (
        <Modal>{getModal(currentModal)}</Modal>
      )}
      {data.length && <Table data={data} />}
    </div>
  )
}

const getModal = (type: ModalTypes) => {
  switch (type) {
    case ModalTypes.Create: {
      return <Create />
    }
    case ModalTypes.Edit: {
      return <Edit />
    }
    case ModalTypes.Delete: {
      return <Delete />
    }
    default:
      return
  }
}
export default Access
