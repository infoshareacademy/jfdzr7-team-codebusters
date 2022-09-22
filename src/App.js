import { Contact } from './components/pages/contact/Contact'
import { Footer } from './components/footer/Footer';
import { BookstorePage } from './components/pages/bookstore/BookstorePage'
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Navigation } from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

export const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const PagePlaceholder = () => <p>Hello World!</p>
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider value={{
          isAuth, setIsAuth,
          user, setUser
        }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<PagePlaceholder />} />
            <Route path="/about" element={<PagePlaceholder />} />
            <Route path="/books" element={<BookstorePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute isAllowed={!isAuth} />} >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={user?.isAdmin} />}>
              {/* Here every page available only for admin */}
              <Route path="/admin" element={<p>Admin</p>} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={isAuth && !user?.isAdmin} />}>
              {/* Here every page available only for log in user */}
              <Route path="/user" element={<p>user</p>} />
            </Route>
            <Route path="/cart" element={<p>cos napewno kupie</p>} />
          </Routes>
          <Footer />
        </AuthContext.Provider>
      </BrowserRouter>
    </div>

  );
}
