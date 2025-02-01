import { searchProductsCategory } from "../api/mercadoLibre";
import { useCountry } from "../context/CountryContext";

export const CategoryList = ({ categories, setProducts }) => {

  const { country } = useCountry();
  
  const loadCategory = async (idCategory) => {
    const fetchedProducts = await searchProductsCategory(country, idCategory);
    setProducts(fetchedProducts);
  };

  return (
    <div className="bg-option1 p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Categorías</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} className="py-1">
            <button
              type="button"
              onClick={() => loadCategory(cat.id)}
              className="text-left text-txt1 w-full hover:bg-blue1 hover:text-white p-2 rounded cursor-pointer"
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
