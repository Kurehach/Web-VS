import "./ProductCard.css";
import { useCart }
from "../../context/CartContext";
import { useWishlist }from "../../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="category">
        {product.category}
      </p>

      <p className="price">
        Rp {product.price.toLocaleString()}
      </p>

      <p>
        ⭐ {product.rating}
      </p>

      <p>
        Terjual {product.sold}
      </p>

      <button onClick={() => addToCart(product)}>
        Tambah ke Keranjang
      </button>

      <button onClick={() => addToWishlist(product)}>
        Tambah ke Wishlist
      </button>

    </div>
  );
}

export default ProductCard;