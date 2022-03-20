import { CartType } from "../../graphql/cart";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => (
  <li key={id}>
    <h3>{title}</h3>
    <p>{amount}</p>
    <img src={imageUrl} />
  </li>
);

export default CartItem;
