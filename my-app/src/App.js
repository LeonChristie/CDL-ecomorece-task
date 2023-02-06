import Digitalshelf from "./components/Digitalshelf"
import Checkout from "./components/Checkout"
import { useState, useEffect } from "react"; 
import StoreItems from "./data/items.json";


const App = () => {
  const [order, setOrder] = useState(StoreItems);
  

  const updateCart = () => {
    setOrder(StoreItems)
    console.log(order)
}

  return (
    <div>
      <Digitalshelf updateCart={updateCart} order={order} setOrder={setOrder}/>
      <Checkout order={order}/>
    </div>
  )
}

export default App;
