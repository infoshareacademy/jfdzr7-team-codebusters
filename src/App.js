import './index.css'
import { Contact } from './components/pages/contact/Contact'
import { Footer } from './components/footer/Footer';
import { BookstorePage } from './components/pages/bookstore/BookstorePage'
import { Register } from './components/auth/Register';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { Login } from './components/auth/Login';

import './App.css';

export const App = () => {
  return (
    <div className="App">
      {/* <Contact /> */}
      <BookstorePage />
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}
