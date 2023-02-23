import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header className="bg-gray-800 w-full overflow-hidden">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Meu Cabeçalho</h1>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex">
              <li>
                <Link
                  to="/calculate"
                  className="link text-gray-400 hover:text-white py-2 px-4"
                >
                  Calcular
                </Link>
              </li>
              <li>
                <Link
                  to="/nutrition"
                  className="link text-gray-400 hover:text-white py-2 px-4"
                >
                  Nutrição
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white py-2 px-4"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
