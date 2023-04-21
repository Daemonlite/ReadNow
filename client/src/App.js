import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Landing from './components/Landing'
import Topnav from './components/Topnav'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
function App() {
  return (
    <div>
 <BrowserRouter>
     <ToastContainer position='bottom-left'/>
     <Topnav/>
     <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/home' element={<Home/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
