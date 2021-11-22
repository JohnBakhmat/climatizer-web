import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/'
import { selectUser } from './store/user'
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/1' element={<PrivateRoute>123</PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App
