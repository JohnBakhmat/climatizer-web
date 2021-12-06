import styles from './checkbox.module.sass'
type PropTypes = {
  value: boolean
  onChange?: any
  label: string
  isDisabled: boolean
}
export const Checkbox = ({ value, onChange, label, isDisabled }: PropTypes) => {
  return (
    <div className={styles['wrapper']}>
      <label htmlFor='check' className={styles['label']}>
        {label}
        {isDisabled === true && <i className='fas fa-lock text-green-700' />}
      </label>
      <input
        id='check'
        className='form-checkbox rounded-lg w-1/2 h-10 self-center text-green-500 bg-red-300 border-0'
        type='checkbox'
        defaultChecked={value}
        disabled={isDisabled}
        onChange={(event) => onChange(event.target.checked)}
      />
    </div>
  )
}
