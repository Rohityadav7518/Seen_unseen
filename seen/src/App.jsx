import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Shop from './Components/Shop'
import Wholesale from './Components/Wholesale'
import Narrative from './Components/Narrative'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import Register from './Components/Register'
import Profile_detail from './Components/Profile_detail'
import Updtae_profile from './Components/Updtae_profile'
import Product_info from './Components/Product_info'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/wholesale' element={<Wholesale />} />
          <Route path='/narrative' element={<Narrative />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile_detail' element={<Profile_detail />} />
          <Route path='/update_profile' element={<Updtae_profile />} />
          <Route path='/product_info/:id/:title' element={<Product_info />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
