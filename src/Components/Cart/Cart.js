import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div>
      <img
        className="cartIcon"
        src="https://cdn-icons-png.flaticon.com/128/8675/8675484.png"
        alt="icon"
      />
      <h3>TOTAL: ${totalPrice}</h3>
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
    </div>
  );
};
export default Cart;
