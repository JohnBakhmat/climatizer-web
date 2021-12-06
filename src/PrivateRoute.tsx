import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom'
import store from './store'
import { getUserAsync, selectUser } from './store/user'
const PrivateRoute = ({ children, ...rest }: any) => {
  const userRecord = useSelector(selectUser)

  useEffect(() => {
    if (Object.keys(userRecord).length === 0) store.dispatch(getUserAsync())
  }, [])
  return (
    <div style={{ marginLeft: '282px', padding: '20px' }}>
      {localStorage.getItem('idToken') ? children : <Navigate to='/' />}
    </div>
  )
}

export default PrivateRoute
