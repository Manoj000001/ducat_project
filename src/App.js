
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './css/cards.css'
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Certificates from './component/Certificates';
import Placement from './component/Placement';
import Contact from './component/Contact';
import Course from './component/Course';
import Python from './component/Python';
import Java from './component/Java';
import AddUser from './component/AddUser';
import ShowUser from './component/ShowUser';
import UpdateUser from './component/UpdateUser';
import SearchData from './component/SearchData';



function App() {
  return (
<>

<BrowserRouter>

<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/certificates' element={<Certificates/>}/>
<Route path='/placement' element={<Placement/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/adduser' element={<AddUser/>}/>
<Route path='/showuser' element={<ShowUser/>}/>
<Route path='/updateuser/:uid' element={<UpdateUser/>}/>
<Route path='/searchdata' element={<SearchData/>}/>

<Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
<Route path='/course' element={<Course/>}>

<Route path='python' element={<Python/>}/>
<Route path='java' element={<Java/>}/>
  </Route>

</Routes>
</BrowserRouter>


<Footer/>
</>
  )
}

export default App;
