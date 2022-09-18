import './index.css'
import { FootEr } from './footer/Footer'
import { Contact } from "./components/contact/Contact"
import { BookstorePage } from './componts/pages/bookstore/BookstorePage';
import { Register } from './auth/Register'
import { Login } from './auth/Login'
import { ForgotPassword } from './auth/ForgotPassword';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Contact />
      {/* <BookstorePage /> */}
      {/* <Register />
      <ForgotPassword />
      <Login /> */}
      <FootEr />
    </div>
  );
}
