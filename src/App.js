import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Model from "./components/Model";


function App() {
  const {cartItems}= useSelector((state)=> state.cart);
  const {isOpen}= useSelector((state)=> state.modal);
  const dispatch= useDispatch();

useEffect(()=>{
dispatch(calculateTotals());
}, [cartItems]);

    return <main>
    {isOpen &&  <Model/> }
    
    
  <Navbar/>
  <CartContainer/>
  </main>
};
export default App;
