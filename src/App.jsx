import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './pages/Home'

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
