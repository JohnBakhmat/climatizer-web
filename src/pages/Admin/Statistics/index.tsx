import { useEffect, useState } from 'react'
import { PieController } from 'chart.js'
import styles from './index.module.sass'
import {
  getDevices,
  getActions,
  getLogins,
} from '../../../services/Admin/statistics'
import PieChart from '../../../components/Admin/Charts/PieChart'
import BarChart from '../../../components/Admin/Charts/BarChart'
import LineChart from '../../../components/Admin/Charts/LineChart'
const Statistics = () => {
  const [deviceChartData, setDeviceChartData] = useState([])
  const [loginsChartDate, setLoginsChartDate] = useState([])
  const [actionsChartDate, setActionsChartDate] = useState([])

  useEffect(() => {
    getDevices((data: any) => {
      setDeviceChartData((prev) => data)
    })
    getActions((data: any) => {
      setActionsChartDate((prev) => data)
    })
    getLogins((data: any) => {
      setLoginsChartDate((prev) => data)
    })
  }, [])

  return (
    <div className={styles['wrapper']}>
      <PieChart data={deviceChartData} />
      <BarChart data={loginsChartDate} title='Logins per hour' />
      <LineChart data={actionsChartDate} title='Actions per day' />
    </div>
  )
}

export default Statistics
