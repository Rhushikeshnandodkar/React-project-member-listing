import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='product-detail/:id' element={<SingleProduct/>}/>
      <Route path='user-login' element={<UserLogin/>}/>
    </Routes>
  );
}

export default App;
