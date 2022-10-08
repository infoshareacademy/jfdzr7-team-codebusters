import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Contact } from './../pages/contact/Contact'
import { BookstorePage } from './../pages/bookstore/BookstorePage'
import { Register } from './../auth/Register';
import { Login } from './../auth/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthContext } from './../../providers/AuthProvider';
import { OrdersPage } from "./../pages/admin/OrdersPage"

export const Routing = () => {
    const { isAuth, isAdmin, isUser } = useContext(AuthContext)
    return (
        <main>
            <Routes>
                <Route path="/" element={<p>Home Page</p>} />
                <Route path="/about" element={<p>About us page</p>} />
                <Route path="/books" element={<BookstorePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route element={<ProtectedRoute isAllowed={!isAuth} />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={isAuth} />} >
                    <Route path="/account" element={<p>Account</p>} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/warehouse" element={<p>Admin Warehouse</p>} />
                    <Route path="/addNewBook" element={<p>Admin add new book</p>} />
                </Route>
                <Route element={<ProtectedRoute isAllowed={isUser} />}>
                    <Route path="/messages" element={<p>user message</p>} />
                    <Route path="/orderHistory" element={<p>user orderHistory</p>} />
                </Route>
                <Route path="/cart" element={<p>cos napewno kupie</p>} />
            </Routes>
        </main>
    )
}