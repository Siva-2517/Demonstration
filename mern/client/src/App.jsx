
import { createContext } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import Profile from './component/Profile'
import State from './hooks/State'
import Reducer from './hooks/Reducer'
import Form from './hooks/Form'

 
export const userContext=createContext()

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Products />}/>
      <Route path='/user' element={<Users />}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/user/:id' element={<UserDetails />}/>
      <Route path='/state' element={<State />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/form' element={<Form />}/>
      <Route path='/reducer' element={<Reducer />}/>
      
    </Routes>
    
    </>
  )
}

export default App