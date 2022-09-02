import {
  EmployeeInfo,
  Landing,
  LaptopDetailedInfo,
  LaptopInfo,
  LaptopList,
  Successful,
} from 'pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/employ-info' element={<EmployeeInfo />} />
        <Route path='/laptop-info' element={<LaptopInfo />} />
        <Route path='/successful' element={<Successful />} />
        <Route path='/laptop-list' element={<LaptopList />} />
        <Route path='/laptop-list/:id' element={<LaptopDetailedInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
