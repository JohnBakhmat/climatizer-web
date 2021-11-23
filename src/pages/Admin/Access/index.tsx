import { useEffect, useState } from 'react'
import styles from './style.module.sass'
import * as accessService from '../../../services/Admin/access'
import Table from '../../../components/Admin/Table'
import Modal from '../Modal'
import Edit from './Edit'

const Access = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    accessService.get((respData: any) => {
      setData((prev) => respData.data)
    })
  }, [])

  return (
    <div>
      <Modal>
        <Edit />
      </Modal>
      {data.length && <Table data={data} />}
    </div>
  )
}

export default Access
