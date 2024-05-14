import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="m-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-xl"
          onClick={handleClick}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Cart is Empty. Add Items in Cart!!</h1>
        ) : (
          <ItemList items={cartItems} buttonText={"➖Remove"}/>
        )}
      </div>
    </div>
  );
};

export default Cart;
