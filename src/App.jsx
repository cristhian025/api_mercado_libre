import { Link, Outlet } from "react-router-dom";

import { ThemeToggle } from "./components";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-option1 text-white flex justify-between items-center shadow-lg h-[72px] fixed w-full z-51">
        <Link to={"/home"} className="text-xl font-bold text-blue1">Api Mercado Libre</Link>
        <ThemeToggle />
      </header>
      <main className="flex-1 mt-[72px]">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
