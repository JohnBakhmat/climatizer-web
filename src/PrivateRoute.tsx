import { useEffect } from 'react'
import { Navigate, Route } from 'react-router-dom'
import store from './store'
import { getUserAsync } from './store/user'
const PrivateRoute = ({ children, ...rest }: any) => {
  useEffect(() => {
    store.dispatch(getUserAsync())
  }, [])
  return (
    <div style={{ marginLeft: '282px', padding: '20px' }}>
      {localStorage.getItem('idToken') ? children : <Navigate to='/' />}
    </div>
  )
}

export default PrivateRoute
