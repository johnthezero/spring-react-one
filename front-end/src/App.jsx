
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ListEmployees from './components/ListEmployees'
import Employee from './components/Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
                {/* http://localhost:3000 */}
                <Route path="/" element={<ListEmployees/>}></Route>

                {/* http://localhost:3000/employees */}
                <Route path="/employees" element={<ListEmployees/>}></Route>
                <Route path="/add-employee" element={<Employee/>}></Route>
                <Route path="/*" element={<h1>NOT FOUND</h1>}></Route>
          </Routes>
      
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
