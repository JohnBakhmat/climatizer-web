import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/'
import { selectUser } from './store/user'
import PrivateRoute from './PrivateRoute'
import Admin from './pages/Admin'
import Statistics from './pages/Admin/Statistics'
import Navbar from './components/Admin/Navbar/Navbar'
import Create from './pages/Admin/Access/Create'
import Access from './pages/Admin/Access'
import Edit from './pages/Admin/Access/Edit'
import Delete from './pages/Admin/Access/Delete'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/admin'>
          <Route
            index
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path='statistics'
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
          <Route path='access/'>
            <Route
              index
              element={
                <PrivateRoute>
                  <Access />
                </PrivateRoute>
              }
            />
            <Route
              path='create'
              element={
                <PrivateRoute>
                  <Create />
                </PrivateRoute>
              }
            />
            <Route
              path='edit'
              element={
                <PrivateRoute>
                  <Edit />
                </PrivateRoute>
              }
            />
            <Route
              path='delete'
              element={
                <PrivateRoute>
                  <Delete />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='1' element={<PrivateRoute>13123</PrivateRoute>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
