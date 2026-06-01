import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import { useState }
from "react";

import "./Home.css";

function Home() {
    const [search,setSearch] = useState("");
  return (
    <>
      <Navbar />

      <section className="hero">

        <h1>
          Tatamers Store
        </h1>

        <p>
          Marketplace Digital
        </p>

      </section>

        <div className="grid">

    
</div>

      <input type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e)=>
        setSearch(e.target.value)
        }/>

      <section className="products">

        <h2>Produk Terlaris</h2>

        <div className="grid">

          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
        {products
            .filter(product =>
                product.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
            )
            .map(product => (

                <ProductCard
                key={product.id}
                product={product}
                />

            ))
        }

      </section>

    </>
  );
}

export default Home;