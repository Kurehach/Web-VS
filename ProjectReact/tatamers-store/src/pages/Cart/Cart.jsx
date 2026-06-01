import Navbar from "../../components/Navbar/Navbar";
import { useCart }
from "../../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart
  } = useCart();

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price * item.quantity,
      0
    );

  return (
    <>
      <Navbar />

      <div
        style={{
          padding:"40px"
        }}
      >

        <h1>Keranjang</h1>

        <br />

        {cart.map(item => (

          <div
            key={item.id}
            style={{
              marginBottom:"20px"
            }}
          >

            <h3>{item.name}</h3>

            <p>
              Qty: {item.quantity}
            </p>

            <p>
              Rp {
                item.price.toLocaleString()
              }
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Hapus
            </button>

          </div>

        ))}

        <hr />

        <br />

        <h2>
          Total:
          Rp {total.toLocaleString()}
        </h2>

      </div>
    </>
  );
}

export default Cart;