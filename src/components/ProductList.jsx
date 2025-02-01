import {NoResults, ProductCard, SkeletonLoader} from "../components"

export const ProductList = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }
  if (products.length === 0) {
    return <NoResults/>;
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
