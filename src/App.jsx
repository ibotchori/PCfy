import {
  EmployeeInfo,
  ErrorPage,
  Landing,
  LaptopDetailedInfo,
  LaptopInfo,
  LaptopList,
  Successful,
} from 'pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/employ-info' element={<EmployeeInfo />} />
        <Route path='/laptop-info' element={<LaptopInfo />} />
        <Route path='/successful' element={<Successful />} />
        <Route path='/laptop-list' element={<LaptopList />} />
        <Route path='/laptop-list/:id' element={<LaptopDetailedInfo />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
