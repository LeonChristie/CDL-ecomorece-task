import Digitalshelf from "./components/Digitalshelf"
import Checkout from "./components/Checkout"
import { useState, useEffect } from "react"; 
import StoreItems from "./data/items.json";

    





const App = () => {
  const [order, setOrder] = useState(StoreItems);
  const [itemTotal, setItemTotal] = useState(0)

  const addToCart = (id) => {
      let selectedItem  = StoreItems[StoreItems.findIndex(x => x.id === id)];
      let currentQuantity = (1+ selectedItem.Quantity++);
      console.log(currentQuantity);
      setItemTotal(currentQuantity);  
      console.log(StoreItems); 
      updateCart();
      console.log(order);
  }
 




  const updateCart = () => {
    setOrder(StoreItems)
    console.log(order)
}

  // useEffect(() => {
  //   const getCheckoutItems = async () => {
  //     const itemsFromShelf = await updateCart();
  //     setToPay(order);
  //   };

  //   getCheckoutItems();
  // }, []);
  return (
    <div>
      <Digitalshelf updateCart={updateCart} order={order} setOrder={setOrder} addToCart={addToCart} itemTotal={itemTotal}/>
      <Checkout updateCart={updateCart} setOrder={setOrder} order={order} />
    </div>
  )
}

export default App;
