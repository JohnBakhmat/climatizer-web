import styles from './index.module.sass'

export type InputProps = {
  label?: string
  id?: string
  placeholder?: string
  type?: string
  onChange?: any
}

export const Input = ({
  id,
  label,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className={styles['wrapper']}>
      <label className={styles['label']} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${styles['input']}`}
        id={id}
        onChange={(event) => onChange(event.target.value, id)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
