
import './App.css';
import Adduser from './Components/AddUser';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Alluser from './Components/Alluser';
import About from './Components/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditUser from './Components/EditUser';


function App() {
  return (
    <BrowserRouter>
  
    
    < Navbar/>
    <Routes>
   <Route path="/" element={ < Home/>} />
    <Route path="/adduser" element={<Adduser/> }/>
   
   <Route path='/about' element={<About/>} />
   <Route path='/alluser' element={<Alluser/>}/>
   <Route path='/edit/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;
