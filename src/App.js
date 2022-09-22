import { Contact } from './components/pages/contact/Contact'
import { Footer } from './components/footer/Footer';
import { BookstorePage } from './components/pages/bookstore/BookstorePage'
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Navigation } from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider, AuthContext } from './providers/AuthProvider';
import { useContext } from 'react';

export const App = () => {
  const { isAuth, isAdmin, isUser } = useContext(AuthContext)
  const PagePlaceholder = () => <p>Hello World!</p>
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<PagePlaceholder />} />
            <Route path="/about" element={<PagePlaceholder />} />
            <Route path="/books" element={<BookstorePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute isAllowed={isAuth} />} >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
              {/* Here every page available only for admin */}
              <Route path="/admin" element={<p>Admin</p>} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={isUser} />}>
              {/* Here every page available only for log in user */}
              <Route path="/user" element={<p>user</p>} />
            </Route>
            <Route path="/cart" element={<p>cos napewno kupie</p>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>

  );
}
