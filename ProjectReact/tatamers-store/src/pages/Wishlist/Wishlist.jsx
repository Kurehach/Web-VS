import Navbar from "../../components/Navbar/Navbar";
import { useWishlist }
from "../../context/WishlistContext";

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist
  } = useWishlist();

  return (
    <>
      <Navbar />

      <div
        style={{
          padding:"40px"
        }}
      >

        <h1>Wishlist</h1>

        <br />

        {
          wishlist.map(item => (

            <div
              key={item.id}
              style={{
                marginBottom:"20px"
              }}
            >

              <h3>{item.name}</h3>

              <p>
                Rp {item.price.toLocaleString()}
              </p>

              <button
                onClick={() =>
                  removeFromWishlist(item.id)
                }
              >
                Hapus
              </button>

            </div>

          ))
        }

      </div>
    </>
  );
}

export default Wishlist;