import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='product-detail/:id' element={<SingleProduct/>}/>
    </Routes>
  );
}

export default App;
