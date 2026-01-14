import logo from "../../assets/Vector.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20 bg-[#1f1f1f] text-white">
      
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Digital Store" className="h-8" />
              <span className="text-xl font-semibold">Digital Store</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore quisquam, voluptate unde provident minima dolor.
            </p>

            <div className="mt-6 flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:opacity-70" />
              <FaInstagram className="cursor-pointer hover:opacity-70" />
              <FaTwitter className="cursor-pointer hover:opacity-70" />
            </div>
          </div>

          {/* Informação */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Informação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Teste</a></li>
              <li><a href="#" className="hover:text-white">Teste</a></li>
              <li><a href="#" className="hover:text-white">Teste</a></li>
              <li><a href="#" className="hover:text-white">Teste</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Categorias</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Teste</a></li>
              <li><a href="#" className="hover:text-white">Teste</a></li>
              <li><a href="#" className="hover:text-white">Teste</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Contato</h4>
            <p className="text-sm leading-relaxed text-gray-300">
              Av. Santos Dumont, 1510 - 1 Andar - Aldeota, Fortaleza - CE
            </p>
            <p className="mt-2 text-sm text-gray-300">(85) 3051-3411</p>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © 2026 Digital College
      </div>
    </footer>
  );
}

export default Footer;

