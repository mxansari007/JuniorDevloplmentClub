import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Git from '../Pages/Git/Git';
import Assignments from "../Pages/Assignments/Assignment";
const Routing = ()=>{
    return <>

            <Routes>
                <Route path='/Git' element={<Git />} />
                <Route path='/' element={<Home />} />
                <Route path='/assignment' element={<Assignments />} />
            </Routes>

    </>
}


export default Routing;