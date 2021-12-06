import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  applyBackup,
  getBackups,
} from '../../../services/Admin/database/backups'
import styles from './index.module.sass'
const Database = () => {
  const [backups, setBackups] = useState([])

  useEffect(() => {
    getBackups((data: any) => {
      setBackups((prev) => data)
    })
  }, [])

  const handleButtonClick = (backup: String) => {
    applyBackup(backup, (response: String) => {
      toast.success(response)
    })
  }
  return (
    <div className={styles['wrapper']}>
      <ul>
        {backups.map((backup) => {
          return (
            <li>
              {backup}
              <button onClick={() => handleButtonClick(backup)}>
                Apply this
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Database
