import Image from "next/image"

export default function ProductCard ({product}) {
    const item = product.node
    return (
        <div key={item.id} className="flex flex-col w-[30%] rounded-lg bg-slate-950 pb-4">
            <div className="h-[400px] w-auto flex flex-col justify-center items-center">
                <Image src={`${item.images.edges[0].node.url}`} width={300} height={300} alt={item.images.edges[0].node.altText ? item.images.edges[0].node.altText : 'image'} priority={true} />
                
            </div>
            <div className="text-meduim px-4">
                {item.title}
            </div>
            <div className="flex flex-row justify-between px-6 mt-2">
                <div className="text-slate-400 first-letter:capitalize">{item.tags}</div>
                <div className="text-medium">{item.priceRange.minVariantPrice.amount + " " + item.priceRange.minVariantPrice.currencyCode}</div>
            </div>
        </div>
    )
}