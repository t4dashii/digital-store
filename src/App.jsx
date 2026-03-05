import "./App.css";
import AppRouter from "./AppRouter";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;