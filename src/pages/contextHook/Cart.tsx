import { useCart } from "./cartContext/cart-context";

export function Cart() {
  const { items } = useCart();
  return (
    <div>
      <h1 key={items}>Items in cart {items}</h1>
    </div>
  );
}