import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleRemoveClick = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Your Cart</h1>

      <div className="mb-6 flex justify-end">
        <button
          className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-5 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={handleClearCart}
          disabled={cartItems.length === 0}
          title={cartItems.length === 0 ? "Cart is already empty" : "Clear Cart"}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <h2 className="text-xl text-gray-500 font-medium text-center mt-16">
          Your cart is empty. Start adding items!
        </h2>
      ) : (
        <ItemList
          items={cartItems}
          buttonText={"➖ Remove"}
          handleClick={handleRemoveClick}
          className="space-y-6"
        />
      )}
    </div>
  );
};

export default Cart;
