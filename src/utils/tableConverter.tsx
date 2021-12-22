import { Checkbox } from '../components/Admin/Table/Checkbox'
import { Input } from '../components/Auth/Input'
import { ModalTypes } from '../pages/Admin/ModalTypes'

const convertDataToJSX = (
  data: Array<any>,
  modal: ModalTypes,
  dispatch: any
): JSX.Element => {
  const value = data[1]
  const key = data[0]
  const isDisabled = key === '_id' || modal === ModalTypes.Delete
  if (key === '__v') {
    return <></>
  } else if (typeof value === 'boolean') {
    return (
      <Checkbox
        value={value}
        label={key}
        isDisabled={isDisabled}
        onChange={(value: any) => dispatch({ key, value })}
      />
    )
  } else {
    return (
      <Input
        onChange={(value: any) => dispatch({ key, value })}
        label={key}
        type={'text'}
        value={value}
        isDisabled={isDisabled}
      />
    )
  }
}
export default convertDataToJSX
