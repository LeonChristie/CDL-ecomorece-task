import Apple from "./products/Apple";
import Banana from "./products/Banana";
import Cantaloupe from "./products/Cantaloupe";
import Desertlime from "./products/Desertlime";
const Digitalshelf = () => {
  return (
    <div className="row">
        <div className="col col-2">
        <Apple/>
        </div>
        <div className="col col-2">
        <Banana/>
        </div>
        <div className="col col-2">
        <Cantaloupe />
        </div>
        <div className="col col-2">
        <Desertlime/>
        </div>
        
      
      </div>
  );
}

export default Digitalshelf;
