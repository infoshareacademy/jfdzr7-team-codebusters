import './index.css'
import { FootEr } from './footer/Footer'
import { Contact } from "./components/contact/Contact";
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Contact />
      <FootEr />
    </div>
  );
}
