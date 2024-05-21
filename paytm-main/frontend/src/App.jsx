import 'react'
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Dashboard from './pages/dashboard'
import Send from './pages/sendmoney'

function App() {

  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path = '/signup' element = {<Signup/>}></Route>
            <Route path = '/signin' element = {<Signin/>}></Route>
            <Route path = '/dashboard' element = {<Dashboard/>}></Route>
            <Route path = '/send' element = {<Send/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
