import { HashRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./providers/AuthProvider";
import { Routing } from "./components/routing/Routing";
import './App.css';
import { CartProvider } from "./providers/CartProvider";

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <CartProvider>
          <AuthProvider>
            <Header />
            <Routing />
            <Footer />
          </AuthProvider>
        </CartProvider>
      </HashRouter>
    </div>
  );
};
