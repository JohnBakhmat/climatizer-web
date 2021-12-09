import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/'
import PrivateRoute from './PrivateRoute'
import Admin from './pages/Admin'
import Navbar from './components/Admin/Navbar/Navbar'

import Database from './pages/Admin/Database'
import Statistics from './pages/Admin/Statistics'

import Access from './pages/Admin/Overview/Access'
import Building from './pages/Admin/Overview/Buildings'
import Device from './pages/Admin/Overview/Devices'
import Request from './pages/Admin/Overview/Requests'
import Preset from './pages/Admin/Overview/Presets'
import ClimateSettings from './pages/Admin/Overview/ClimateSettings'
import Rooms from './pages/Admin/Overview/Rooms'

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
          </Route>

          <Route
            path='request'
            element={
              <PrivateRoute>
                <Request />
              </PrivateRoute>
            }
          />
          <Route
            path='building/'
            element={
              <PrivateRoute>
                <Building />
              </PrivateRoute>
            }
          />

          <Route
            path='device/'
            element={
              <PrivateRoute>
                <Device />
              </PrivateRoute>
            }
          />
          <Route
            path='climate-settings/'
            element={
              <PrivateRoute>
                <ClimateSettings />
              </PrivateRoute>
            }
          />
          <Route
            path='presets/'
            element={
              <PrivateRoute>
                <Preset />
              </PrivateRoute>
            }
          />
          <Route
            path='rooms/'
            element={
              <PrivateRoute>
                <Rooms />
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
