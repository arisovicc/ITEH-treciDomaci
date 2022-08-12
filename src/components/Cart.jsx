import OnePair from "./OnePair";

const Cart = ({ sneakers }) => {
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {sneakers.map((prod) => (
        <OnePair sneakers={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;
