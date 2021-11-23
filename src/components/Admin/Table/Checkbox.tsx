export const Checkbox = ({ onChange, value }: any) => {
  return <input type='checkbox' checked={value} onChange={onChange} />
}
