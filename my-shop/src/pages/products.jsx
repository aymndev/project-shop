import { useEffect, useState } from "react";


import Footer from "../components/footer";
import ProductCard from "../components/productCard";




export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error loading products:", error);
      }
    };

    loadProducts();
  }, []);

  // UPDATE PRODUCT



  return (
    <div className="m-5 min-h-screen">



      <div className="grid grid-cols-4 gap-12 p-9">

        {products.map((product) => (

          <div key={product.id}>

            <ProductCard 
            product={product} 
            products={products}
            setProducts={setProducts}
            
            />





          </div>
        ))}

      </div>

      <Footer />

    </div>
  );
}