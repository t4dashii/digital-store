import logo from "../../assets/Vector.png"
import {FaSearch, FaShoppingCart} from "react-icons/fa"
function Header () {
    return ( 
        <header className="w-full bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-14 py-4">
                <div className="flex items-center gap-2 text-pink-500 text-xl font-bold"><img src={logo} alt="Digital Store" />
                    <span className="text-lg">Digital Store</span>
                </div>
                <div className="relative  w -[240px]">
                    <input type="text" placeholder="Pesquise Produtos" className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring -2 focus: ring-pink-500" />
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                </div>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-sm text-gray-600 hover:text-pink-600">
                    Cadastre-se
                    </a>
                    <button className="rounded-lg bg-pink-600 px-6 py-2 text-sm font-semibold text-white hover:bg-pink-700 transition">
                        ENTRAR
                    </button>
                    <FaShoppingCart className="text-xl text-gray-7 cursor-pointer hover:text-pink-600"/>
                </div>
            </div>

            <nav className="flex gap-8 px-12 pb-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-pink-600">Home</a>
                <a href="#" className="text-gray-600 hover:text-pink-600">Produtos</a>
                <a href="#" className="text-gray-600 hover:text-pink-600">Categoia</a>
                <a href="#" className="text-gray-600 hover:text-pink-600">Meus Pedidos</a>
            </nav>
        </header>
     );
}

export default Header ;