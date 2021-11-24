import styles from './index.module.sass'

export type InputProps = {
  label?: string
  id?: string
  placeholder?: string
  type?: string
  onChange?: any
  value?: any
  isDisabled?: boolean
  regex?: RegExp
  isValid?: boolean
  validationMessange?: string
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  onChange,
  value,
  isDisabled = false,
  isValid = true,
  validationMessange = 'Field is invalid',
}: InputProps) => {
  return (
    <div className={styles['wrapper']}>
      <label className={styles['label']} htmlFor={id}>
        {label}{' '}
        {isDisabled === true && <i className='fas fa-lock text-green-700' />}
      </label>
      <input
        disabled={isDisabled}
        className={`${styles['input']}`}
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value, id)}
        type={type}
        placeholder={placeholder}
      />
      {!isValid && (
        <span className={styles['validation']}>{validationMessange}</span>
      )}
    </div>
  )
}
