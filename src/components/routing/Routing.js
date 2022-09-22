import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './../pages/contact/Contact'
import { BookstorePage } from './../pages/bookstore/BookstorePage'
import { Register } from './../auth/Register';
import { Login } from './../auth/Login';
import { ProtectedRoute } from './../ProtectedRoute/ProtectedRoute';
import { AuthContext } from './../../providers/AuthProvider';

export const Routing = () => {
    const { isAuth, isAdmin, isUser } = useContext(AuthContext)
    const PagePlaceholder = () => <p>Hello World!</p>
    return (
        <main>
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
        </main>
    )
}