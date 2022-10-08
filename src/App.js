import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./providers/AuthProvider";
import { Routing } from "./components/routing/Routing";
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routing />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
