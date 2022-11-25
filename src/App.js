
import Product from './Components/Product/Product';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/" element={<Product/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/navbar" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
