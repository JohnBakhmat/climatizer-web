import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Auth/Input'
import { login } from '../../services/auth'
import styles from './index.module.sass'
const Auth = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  useEffect(() => console.log(user), [user])
  const handleUserChange = (data: any, id: string | number) => {
    setUser((previousState) => {
      const newState: any = { ...previousState }
      newState[id] = data
      return newState
    })
  }
  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    login(user, () => navigate('/admin'))
  }
  return (
    <div className={styles['wrapper']}>
      {/* <Tree className={styles['tree']} /> */}
      <form className={styles['form']} onSubmit={handleFormSubmit}>
        <h1 className={styles['title']}>Authorize</h1>
        <Input
          id='email'
          label='E-mail'
          placeholder='Enter email'
          type='email'
          onChange={handleUserChange}
        />
        <Input
          id='password'
          label='Password'
          placeholder='Enter password'
          type='password'
          onChange={handleUserChange}
        />

        <button type='submit' className={styles['button']}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Auth
