import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Landing from './components/Landing'
import Topnav from './components/Topnav'
import Login from './pages/Login'
function App() {
  return (
    <div>
 <BrowserRouter>
     <ToastContainer position='bottom-left'/>
     <Topnav/>
     <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
