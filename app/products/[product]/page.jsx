import BuyMenu from "@/components/BuyMenu/BuyMenu";
import { getProductById } from "@/lib/shopify";

export default async function Product({params}) {
    const productId = params.product
    const product = await getProductById(productId)
    const variants = product.variants.edges.map(variant => ({ ...variant.node }))
    return (
        <div className="container mx-auto flex flex-col">
            <h1 className="font-medium text-3xl">{product.title}</h1>
            <div className="w-[100%] flex flex-row justify-between items-start my-6">
                <div className="h-[50vh] w-[50%] flex justify-center items-center bg-gray-950">
                    <img src={product.images.edges[0].node.url} alt="" className="object-contain h-[40vh]" />
                </div>
                <div className="w-[48%] flex flex-col">
                    <h2 className="capitalize text-2xl mb-3">{product.tags.map(tag => tag)}</h2>
                    <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml}}></div>
                    <BuyMenu variants={variants} options={product.options}/>
                </div>
            </div>
        </div>
    )
}