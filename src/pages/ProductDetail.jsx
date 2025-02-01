import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../api/mercadoLibre";
import { formatPrice } from "../utils/formatters";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductDetail(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p className="text-center">Cargando...</p>;

  const MAX_DESCRIPTION_LENGTH = 200; // Número de caracteres a mostrar inicialmente
  const truncatedDescription =
    product.description && product.description.length > MAX_DESCRIPTION_LENGTH
      ? product.description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
      : product.description;

  return (
    <div className="p-4 sm:p-10 h-[88vh]">
      <div className="h-full flex flex-col sm:flex-row shadow-xl rounded-lg p-5 bg-option1">
        {/* Imagen del producto */}
        <div className="w-full sm:w-7/12 h-64 sm:h-full flex-shrink-0">
          <div className="w-full h-full rounded-lg flex items-center justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('http://http2.mlstatic.com/D_NQ_NP_2X_${product.thumbnail_id}-F.webp')`,
              }}
            ></div>
            <img
              src={`http://http2.mlstatic.com/D_NQ_NP_2X_${product.thumbnail_id}-F.webp`}
              alt={product.title}
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="w-full sm:w-5/12 h-full overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-4 text-blue1">
            {product.title}
          </h1>
          <p className="text-lg mb-6">
            {formatPrice(product.price, product.currency_id)}
          </p>
          <div>
            <h2 className="text-xl font-bold mb-2">Descripción</h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {isExpanded ? product.description : truncatedDescription}
            </p>
            {product.description &&
              product.description.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-500 hover:text-blue-700 mt-2 focus:outline-none"
                >
                  {isExpanded ? "Mostrar menos" : "Mostrar más"}
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
