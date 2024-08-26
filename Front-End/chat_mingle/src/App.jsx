import './App.css'
import Login from "./pages/login/login.jsx";
import {Route,Routes} from "react-router-dom";
import Signup from "./pages/signup/signup.jsx";
import Chat from "./pages/chat/chat.jsx";
import ProtectedRoutes from "./routes/protectedRoutes.jsx";

function App() {

  return (
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
              <Route path="/chat" element={<Chat />} />
          </Route>
      </Routes>
  )
}

export default App


//#5F6675
//#66C4FF
//#6CD2D3
//#B8C6D3
//#EBEBEB
