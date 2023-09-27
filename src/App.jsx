import Routing from './Routes/Routing'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
const App = ()=>{
  
  return<>
  <BrowserRouter>
    <Navbar />
    <Routing />
    <Footer/>
  </BrowserRouter>
  </>
}

export default App;
