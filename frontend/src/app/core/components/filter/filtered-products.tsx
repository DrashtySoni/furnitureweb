import { Product } from '~/core/components/item/product';
export const FilteredProducts = ({ products }: { products: any }) => {
    return (
        <div className="mt-10">
            <h2 className="font-medium text-lg my-5">Found {products.length} products</h2>
            <div className="md:grid grid-cols-4 gap-5 flex flex-wrap">
                {products.map((product: any, index: number) => {
                    return (
                        <Product
                            item={{
                                ...product.node,
                                defaultVariant: {
                                    ...product.node.matchingVariant,
                                    firstImage: product.node.matchingVariant.images?.[0],
                                },
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export const ProductsList = ({ products }: { products: any }) => {
    return (
        <div className="grid grid-cols-5 gap-6 w-full">
            {products?.map((product: any) => {
                return <Product item={product} />;
            })}
        </div>
    );
};
