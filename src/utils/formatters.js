// Funcion para formatear el precio segun la moneda
export const formatPrice = (price, currency) => {
    if (!price || !currency) return "Precio no disponible";
  
    switch (currency) {
      case "BOB":
        return `Bs ${price}`; // Bolivianos
      case "ARS":
        return `$ ${price}`; // Pesos Argentinos
      case "BRL":
        return `R$ ${price}`; // Reales Brasileños
      case "COP":
        return `$ ${price} COP`; // Pesos Colombianos
      case "MXN":
        return `$ ${price} MXN`; // Pesos Mexicanos
      default:
        return `${price} ${currency}`; // Moneda desconocida
    }
  };