import './App.css'
import Home from './screens/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  Router,
} from "react-router-dom";
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './screens/Signup.jsx';
import CartProvider from './components/ContextReducer.jsx';
import MyOrder from './screens/MyOrder.jsx';

function App() {

  return (
    <CartProvider>
    
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createuser' element={<Signup/>}/>
          <Route exact path='/myOrder' element={<MyOrder/>}/>
        </Routes>
      </div>
      
      </CartProvider>
  )
}

export default App
