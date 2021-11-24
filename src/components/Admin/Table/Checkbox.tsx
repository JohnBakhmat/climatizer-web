import styles from './checkbox.module.sass'
type PropTypes = {
  value: boolean
  onChange?: any
  label: string
}
export const Checkbox = ({ value, onChange, label }: PropTypes) => {
  return (
    <div className={styles['wrapper']}>
      <label htmlFor='check' className={styles['label']}>
        {label}
      </label>
      <input
        id='check'
        className='form-checkbox rounded-lg w-1/2 h-10 self-center text-green-500 bg-red-300 border-0'
        type='checkbox'
        defaultChecked={value}
        onChange={(event) => onChange(event.target.checked)}
      />
    </div>
  )
}
