import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { AuthProvider } from "./providers/AuthProvider";
import { Routing } from "./components/routing/Routing";
import { NewBook } from "./components/pages/newBook/NewBook";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          {/* <NewBook /> */}
          <Header />
          <Routing />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
