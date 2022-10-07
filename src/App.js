import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./providers/AuthProvider";
import { Routing } from "./components/routing/Routing";
import { CartProvider } from "./providers/CartProvider";
import { AuthContext } from "./providers/AuthProvider";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <AuthProvider>
            <Header />
            <Routing />
            <Footer />
          </AuthProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};
