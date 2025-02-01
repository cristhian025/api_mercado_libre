import axios from "axios";

const BASE_URL = "https://api.mercadolibre.com";

// Obtener lista de categorías según el país
export const fetchCategories = async (countryCode) => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/${countryCode}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const searchProductsCategory = async (countryCode, query) => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/${countryCode}/search?category=${query}`);
    return response.data.results;
  } catch (error) {
    console.error("Error searching products category:", error);
    return [];
  }
};

export const searchProducts = async (countryCode, query) => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/${countryCode}/search?q=${query}`);
    
    return response.data.results;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

export const fetchProductDetail = async (productId) => {
  try {
    // Obtener detalles básicos del producto
    const productResponse = await axios.get(`${BASE_URL}/items/${productId}`);
    const productData = productResponse.data;

    // Verificar si el producto ya tiene una descripción
    let description = productData.description || "No hay descripción disponible";

    // Si no hay descripción en productData, intentar obtenerla
    if (!productData.description) {
      try {
        const descriptionResponse = await axios.get(`${BASE_URL}/items/${productId}/description`);
        if (descriptionResponse.data && descriptionResponse.data.plain_text) {
          description = descriptionResponse.data.plain_text;
        }
      } catch (descriptionError) {
        console.warn("No se pudo obtener la descripción del producto:", descriptionError);
      }
    }

    // Combinar los datos
    return {
      ...productData,
      description, // Agregar la descripción (o el valor predeterminado) al objeto del producto
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};