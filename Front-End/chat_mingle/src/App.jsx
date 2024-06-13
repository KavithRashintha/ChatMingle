import './App.css'
import { Routes , Route} from 'react-router-dom';
import Login from "./pages/login/login.jsx";
import Signup from "./pages/signup/signup.jsx";
import Chat from "./pages/chat/chat.jsx";
function App() {

  return (
    <>
        {/*<Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/chat' element={<Chat></Chat>}></Route>
        </Routes>*/}
        <Signup></Signup>
    </>
  )
}

export default App


//#5F6675
//#66C4FF
//#6CD2D3
//#B8C6D3
//#EBEBEB
