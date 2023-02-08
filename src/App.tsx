import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { NavBar} from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"


function App() {

  return (
    <ShoppingCartProvider>
    <NavBar/>


      <Routes>
        <Route path="/shoppingCart/" element={<Home/>}/>
        <Route path="/shoppingCart/store" element={<Store/>}/>
        <Route path="/shoppingCart/about" element={<About/>}/>
        </Routes>
        
        
            </ShoppingCartProvider>
  )
}

export default App
