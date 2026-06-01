import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

function Products() {
  return (
    <>
      <Navbar />

      <div style={{padding:"40px"}}>

        <h1>Semua Produk</h1>

        <br />

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
            gap:"20px"
          }}
        >

          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Products;