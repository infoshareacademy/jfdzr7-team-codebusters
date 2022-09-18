import './index.css'
import { Contact } from './components/pages/contact/Contact'
import { Footer } from './components/footer/Footer';
import { BookstorePage } from './components/pages/bookstore/BookstorePage'
import { Register } from './components/auth/Register';
import { ForgotPassword } from './components/auth/ForgotPassword';
import { Login } from './components/auth/Login';

import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Navigation />
        <Routes>
          <Route path="/" element={<p>Hello World!</p>} />
          <Route path="/about" element={<p>Something nice about us!</p>} />
          <Route path="/books" element={<BookstorePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
