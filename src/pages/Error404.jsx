import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="text-center p-8 font-sans">
            <h1 className="text-5xl text-blue1">404 - Página no encontrada</h1>
            <p className="text-xl my-4">
                Lo sentimos, no pudimos encontrar la página que buscas.
            </p>
            <Link
                to="/"
                className="inline-block px-5 py-3 bg-blue1 text-white rounded-lg no-underline text-lg"
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default Error404;