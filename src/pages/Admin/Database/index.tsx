import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  applyBackup,
  getBackups,
} from '../../../services/Admin/database/backups'
import { selectLanguagePack } from '../../../store/localization'
import styles from './index.module.sass'
const Database = () => {
  const language = useSelector(selectLanguagePack)
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
                {language.apply}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Database
