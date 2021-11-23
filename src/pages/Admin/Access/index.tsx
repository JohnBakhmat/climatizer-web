import { useEffect, useState } from 'react'
import styles from './style.module.sass'
import * as accessService from '../../../services/Admin/access'
import Table from '../../../components/Admin/Table'
const Access = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    accessService.get((respData: any) => {
      console.dir(respData.data)
      setData((prev) => respData.data)
    })
  }, [])

  return <div>{data.length && <Table data={data} />}</div>
}

export default Access
