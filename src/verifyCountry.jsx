import { Navigate, Outlet } from "react-router-dom";
import { useCountry } from "./context/CountryContext";

export const VerifyCountry = () => {
  const { country, loading } = useCountry(); // Asegúrate de que `loading` esté definido en el contexto

  if (!country && !loading) return <Navigate to="/seleccion-pais" replace />; // Redirige si no hay país seleccionado

  return <Outlet />; // Renderiza las rutas anidadas si el país está seleccionado
};