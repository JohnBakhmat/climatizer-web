import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/'
import { selectUser } from './store/user'
import PrivateRoute from './PrivateRoute'
import Admin from './pages/Admin'
import Statistics from './pages/Admin/Statistics'
import Navbar from './components/Admin/Navbar/Navbar'
import Access from './pages/Admin/Access'
import AccessCreate from './pages/Admin/Access/Create'
import AccessEdit from './pages/Admin/Access/Edit'
import AccessDelete from './pages/Admin/Access/Delete'

import Building from './pages/Admin/Buildings'
import BuildingCreate from './pages/Admin/Buildings/Create'
import BuildingEdit from './pages/Admin/Buildings/Edit'
import BuildingDelete from './pages/Admin/Buildings/Delete'

import Request from './pages/Admin/Requests'
import Database from './pages/Admin/Database'

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
          <Route
            path='database'
            element={
              <PrivateRoute>
                <Database />
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
                  <AccessCreate />
                </PrivateRoute>
              }
            />
            <Route
              path='edit'
              element={
                <PrivateRoute>
                  <AccessEdit />
                </PrivateRoute>
              }
            />
            <Route
              path='delete'
              element={
                <PrivateRoute>
                  <AccessDelete />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path='request'>
            <Route
              index
              element={
                <PrivateRoute>
                  <Request />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='building/'>
            <Route
              index
              element={
                <PrivateRoute>
                  <Building />
                </PrivateRoute>
              }
            />
            <Route
              path='create'
              element={
                <PrivateRoute>
                  <BuildingCreate />
                </PrivateRoute>
              }
            />
            <Route
              path='edit'
              element={
                <PrivateRoute>
                  <BuildingEdit />
                </PrivateRoute>
              }
            />
            <Route
              path='delete'
              element={
                <PrivateRoute>
                  <BuildingDelete />
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
