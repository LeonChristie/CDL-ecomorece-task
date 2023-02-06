import { Button } from "bootstrap";
import React from "react";
import { useState } from "react"; 
import { DropdownButton } from "react-bootstrap";
import StoreItems from "../data/items.json";



const Product = ({ id, name, price, imgURL, Quantity}) => {
 const [itemTotal, setItemTotal] = useState(0)
 const [order, setOrder] = useState (StoreItems);

const addToCart = (id) => {
    let selectedItem  = StoreItems[StoreItems.findIndex(x => x.id === id)];
    let currentQuantity = (1 + selectedItem.Quantity++);
    console.log(currentQuantity);
    setItemTotal(currentQuantity);  
    console.log(StoreItems); 
    setOrder(StoreItems);
    console.log(order);
}







  return (
    <div>
      <div>
        <img
          src={imgURL}
          width="200px"
          height="200px"
        />
        <div>
          <p className="product-title">{name}</p>
          <p className="price">£0.{price}</p>
          <div>
          
          <span>{itemTotal}</span>
          <button onClick={() => addToCart(id)}>Add to Bag</button> 
          <div>Total Item Price = {price*itemTotal}p</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};



export default Product;
