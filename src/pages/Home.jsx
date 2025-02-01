import { useEffect, useState } from "react";
import { fetchCategories, searchProductsCategory } from "../api/mercadoLibre";
import { useCountry } from "../context/CountryContext";


import {CategoryList, ProductList, SearchBar} from "../components"

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { country } = useCountry();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategoriesAndProducts = async () => {
      const fetchedCategories = await fetchCategories(country);
      setCategories(fetchedCategories);

      if (fetchedCategories.length > 0) {
        const fetchedProducts = await searchProductsCategory(
          country,
          fetchedCategories[0].id
        );
        setIsLoading(false);
        setProducts(fetchedProducts);
      }
    };
    loadCategoriesAndProducts();
  }, [country]);

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <div className="flex m-3">
      <button
        className="sm:hidden fixed  bottom-2 right-2 bg-blue1 text-white p-2 rounded z-50"
        onClick={toggleAside}
      >
        {isAsideVisible ? <i className='bx bx-menu-alt-left'></i> : <i className='bx bx-menu' ></i>}
      </button>

      <div
        className={`aside-overlay ${isAsideVisible ? "visible" : ""}`}
        onClick={toggleAside}
      ></div>

      <aside
        className={`w-45 ${
          isAsideVisible ? "block" : "hidden"
        } fixed z-50 h-[calc(100vh-73px)] bottom-0 left-0 overflow-y-auto sm:block sm:mr-3 sm:w-1/4 sm:static sm:h-auto`}
      >
        <CategoryList categories={categories} setProducts={setProducts} />
      </aside>

      <main className="w-full">
        <SearchBar setProducts={setProducts} />
        <ProductList products={products} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Home;
