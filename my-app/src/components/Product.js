import { Button } from "bootstrap";
import React from "react";
import { useState } from "react"; 
import { DropdownButton } from "react-bootstrap";
import StoreItems from "../data/items.json";

// const addItems = (id) => {
//    let selectedItemIndex = StoreItems.findIndex(x => x.id === id.id);
//     console.log(StoreItems[selectedItemIndex])
// }

const Product = ({ id, name, price, imgURL, Quantity}) => {
 const [itemTotal, setItemTotal] = useState(0)

const addToCart = (id) => {
    let selectedItem  = StoreItems[StoreItems.findIndex(x => x.id === id)];
    let currentQuantity = selectedItem.Quantity++;
    console.log(currentQuantity);
    setItemTotal(currentQuantity)    
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
          <p className="prive">£0.{price}</p>
          <div>
          
          <span>{itemTotal}</span>
          <button onClick={() => addToCart(id)}>Add to Bag</button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
