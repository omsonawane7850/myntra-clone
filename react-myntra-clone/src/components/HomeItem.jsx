import { useDispatch, useSelector } from "react-redux";
import { addToBag } from "../features/bagSlice";
import { IoBagAdd } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(elementFound, item.id);

  const handleAddToBag = () => {
    dispatch(addToBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button type="button" class="btn btn-danger btn-add-bag">
          <RiDeleteBin2Fill />
          Remove
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <IoBagAdd /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
