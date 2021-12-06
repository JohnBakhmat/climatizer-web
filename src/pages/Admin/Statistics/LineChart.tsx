import React from 'react'
import { Line } from 'react-chartjs-2'
interface Props {
  data: any
  title?: String
}

const LineChart = (props: Props) => {
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
        label: `${props.title}`,
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LineChart
