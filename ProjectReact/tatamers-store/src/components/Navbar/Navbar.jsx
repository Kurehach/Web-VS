import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart }
from "../../context/CartContext";

function Navbar() {
  const { cart } = useCart();

    const totalItems =
    cart.reduce(
        (sum,item)=>
        sum + item.quantity,
        0     
    );

  return (
    <nav className="navbar">

      <div className="logo">
        Tatamers Store
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/cart">

            <button className="cart-btn">
                Cart ({totalItems})
            </button>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;