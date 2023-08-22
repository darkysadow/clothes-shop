import ProductCard from "@/components/ProductCard/ProductCard";
import { getAllProducts, getAllProductsInCollection } from "@/lib/shopify";

export default async function Products() {
    const products = await getAllProducts()
    return (
        <div className="container mx-auto flex flex-row flex-wrap justify-between items-start p-2 gap-y-5">
            {products.map(product => <ProductCard product={product} />)}
        </div>
    )
}