import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatters";

export const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-lg bg-option1 dark:border-gray-700 transition-transform hover:scale-[1.02] shadow-lg">
      <div className="bg-white w-full h-58 rounded-t-lg border-b-2 border-gray-100 pb-1">
        <img 
          //src={product.thumbnail}
          src={`http://http2.mlstatic.com/D_NQ_NP_2X_${product.thumbnail_id}-F.webp`}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4 pb-3">
        <Link 
          to={`/home/product/${product.id}`}
          className="text-base font-medium hover:text-blue-600 dark:text-gray-100 line-clamp-2 mb-2 h-[3.5rem]"
        >
          {product.title}
        </Link>

        <div className="flex flex-col gap-1">
          {product.original_price && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {formatPrice(product.original_price, product.currency_id)}
            </span>
          )}
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              {formatPrice(product.price, product.currency_id)}
            </span>
          </div>
        </div>

        {product.shipping?.free_shipping && (
          <span className="inline-block mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
            Envío gratis
          </span>
        )}
      </div>
    </div>
  );
};