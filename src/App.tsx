import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/'
import { selectUser } from './store/user'
import PrivateRoute from './PrivateRoute'
import Admin from './pages/Admin'
import Navbar from './components/Admin/Navbar'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/admin'>
          <Route
            index
            element={
              <PrivateRoute>
                <Navbar />
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path='1' element={<PrivateRoute>13123</PrivateRoute>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
