import React from 'react'
import { Doughnut } from 'react-chartjs-2'

interface Props {
  data: any
}

const PieChart = (props: Props) => {
  let labels: any = []
  let values: any = []
  let colors: any = []
  const randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16)
  Object.entries(props.data).forEach(([key, value]: any) => {
    labels.push(key)
    values.push(value)
    colors.push(randomColor())
  })

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: values,
        backgroundColor: colors,
        hoverOffset: 2,
      },
    ],
  }
  return (
    <div>
      <Doughnut data={data} />
    </div>
  )
}

export default PieChart
