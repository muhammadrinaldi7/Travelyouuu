import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/mainLayout'
import { LandingPages } from './pages/LandingPages/Index'
import ProtectedRoute from './components/ProtectedRoute/Index'
import { Dashboard } from './pages/Dashboard/Index'
import { Login } from './pages/Login'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPages />} >
          <Route index element={<LandingPages />} />
          
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />
      <Route path="*" element={<LandingPages />} />
     </Routes>
    </>
  )
}

export default App
