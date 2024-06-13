import {Routes , Route} from "react-router-dom";
import SignUp from "../pages/signup/signup.jsx";
import Login from "../pages/login/login.jsx";
import Signup from "../pages/signup/signup.jsx";

function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
    )
}

export default AppRoutes;