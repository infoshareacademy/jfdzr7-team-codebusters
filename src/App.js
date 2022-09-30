import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Navigation } from "./components/navigation/Navigation";
import { AuthProvider } from "./providers/AuthProvider";
import { Routing } from "./components/routing/Routing";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routing />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};
