import {Routes , Route} from "react-router-dom";
import SignUp from "../pages/signup/signup.jsx";
import Login from "../pages/login/login.jsx";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" component={<Login></Login>}></Route>
            <Route path="/signup" component={<SignUp></SignUp>}></Route>
            <Route path="/login" component={<Login></Login>}></Route>
        </Routes>
    )
}

export default AppRoutes;