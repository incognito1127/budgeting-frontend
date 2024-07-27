import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Edit from './Pages/Edit'
//import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from './Pages/Show'
import New from './Pages/New'
import NavBar from './Components/NavBar'
//import TransactionEditForm from './Components/TransactionEditForm'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/transactions' element={<Index/> } />
            <Route path='/transactions/:id' element={<Show/> } />
            <Route path='/transactions/:id/edit' element={ <Edit/>} />
            <Route path='/transactions/new' element={<New/> } />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App