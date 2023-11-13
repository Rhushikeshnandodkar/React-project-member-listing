import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import UserLogin from './components/UserLogin';
import Google from './components/Google';
import ResetPassword from './components/ResetPassword';
import ResetPassConfirm from './components/ResetPassConfirm';
import Thanks from './components/Thanks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/google' element={<Google/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='product-detail/:id' element={<SingleProduct/>}/>
      <Route path='user-login' element={<UserLogin/>}/>
      <Route path='reset-password' element={<ResetPassword/>}/>
      <Route path='reset-password-confirm/:uid/:token' element={<ResetPassConfirm/>}/>
      <Route path='/thanks' element={<Thanks/>}/>
    </Routes>
  );
}

export default App;
