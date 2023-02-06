import StoreItems from "../data/items.json";
import Product from "./Product";

const Digitalshelf = () => {
  return (
    <div>
      <h1>Our Products!</h1>
      <div className="row justify-content-center g-5">
        {StoreItems.map((item) => (
          <div className="col col-2">
            <Product {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digitalshelf;
