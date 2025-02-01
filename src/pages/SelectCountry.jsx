import { useCountry } from "../context/CountryContext";
import { useNavigate } from "react-router-dom";

const countries = [
  { code: "MLA", name: "Argentina", flag: "https://flagcdn.com/w40/ar.png" },
  { code: "MLB", name: "Brasil", flag: "https://flagcdn.com/w40/br.png" },
  { code: "MCO", name: "Colombia", flag: "https://flagcdn.com/w40/co.png" },
  { code: "MLM", name: "México", flag: "https://flagcdn.com/w40/mx.png" },
  { code: "MBO", name: "Bolivia", flag: "https://flagcdn.com/w40/bo.png" },
];

const SelectCountry = () => {
  const { setCountry } = useCountry();
  const navigate = useNavigate();

  const handleSelect = (code) => {
    setCountry(code);
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-option1">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Selecciona tu país
      </h1>
      <ul className="space-y-4">
        {countries.map((c) => (
          <li key={c.code}>
            <button
              className="flex items-center gap-3 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg w-[22rem] transition-all duration-300"
              onClick={() => handleSelect(c.code)}
            >
              <img
                src={c.flag}
                alt={c.name}
                className="w-8 h-6 rounded shadow-sm"
              />
              <span className="text-lg font-medium">{c.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectCountry;
