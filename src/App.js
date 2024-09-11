import logo from './logo.svg';
 import './App.css';
import Home from "./Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductDetail from './ProductDetail';
// import Product from './Product';
import Searchitem from './Searchitem';
import Cart from './Cart';
import Product from './Product';
import Navbar from './Navbar';
import { useState,useContext,createContext } from 'react';
  import { items } from './Data';
//  import { useState } from 'react';

const CartContext = createContext();
function App() {
  const [cart1, setCart] = useState([]);
  const addToCart = (id, price, title, description, imgSrc) => {
    if(cart1.length==10){
      return ;
    }
    const newItem = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
   console.log("cart1",cart1)
    setCart((prevCart) => [...prevCart, newItem]);
  };
  // function removeItem(id){
  //   console.log(id);
  //   console.log("cart2",cart1)
  //   const remove=cart1.filter((product)=>product.id!=id)
  //   console.log("remove",remove)
  //   setCart(remove);
  // }
  const removeItem2 = (id) => {
    const removeProduct=cart1.filter((product)=>product.id!=id)
      console.log("remove",removeProduct)
      setCart(removeProduct);
};
const clearAll=()=>{
  setCart('')
}

    
  return (
    <CartContext.Provider value={{ cart1, addToCart,removeItem2,clearAll }}>
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Product />}/>
        <Route path='/product/:id' element={<ProductDetail  />} />
        <Route path='/search/:term' element={<Searchitem/>} />
        <Route path='/home' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </Router>
       
      
    </>
    </CartContext.Provider>
  );
}
export const useCart = () => {
  return useContext(CartContext);
};
export default App;
