import './App.css'
import { Routes , Route} from 'react-router-dom';
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
    </>
  )
}

export default App


//#5F6675
//#66C4FF
//#6CD2D3
//#B8C6D3
//#EBEBEB
