// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Create from './create';
import Read from './read';
import Update from './update';

function App() {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
