import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Landing from './components/Landing'
import Topnav from './components/Topnav'
function App() {
  return (
    <div>
 <BrowserRouter>
     <ToastContainer position='bottom-left'/>
     <Topnav/>
     <Routes>
    <Route path='/' element={<Landing/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;