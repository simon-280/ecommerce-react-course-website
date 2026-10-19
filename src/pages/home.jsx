import { Link } from "react-router-dom";
import { getProducts } from "../data/product";
import ProductCard from "../components/productCard";
export default function Home() {
    const products = getProducts();
  return (
    <div className="page">
        <div className="home-hero">
            <h1 className="home-title">Welcome to ShopHub</h1>
            <p className="home-subtitle">Your one-stop shop for all your needs</p>
        </div>
        <div className="container"></div>
        <h2 className="page-title">our products</h2>
        <div className="products-grid">
            {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}