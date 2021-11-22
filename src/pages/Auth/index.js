import { useState, useEffect } from 'react'
import { Input } from '../../components/Auth/Input'
import styles from './index.module.sass'
const Auth = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  useEffect(() => console.log(user), [user])
  const handelUserChange = (data, id) => {
    setUser((previousState) => {
      const newState = { ...previousState }
      newState[id] = data
      return newState
    })
  }

  return (
    <div className={styles['wrapper']}>
      <form className={styles['form']}>
        <h1 className={styles['title']}>Authorize</h1>
        <Input
          id='email'
          label='E-mail'
          placeholder='Enter email'
          type='email'
          onChange={handelUserChange}
        />
        <Input
          id='password'
          label='Password'
          placeholder='Enter password'
          type='password'
          onChange={handelUserChange}
        />

        <button type='button' className={styles['button']}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Auth
