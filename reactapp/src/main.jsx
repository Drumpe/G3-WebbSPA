import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login/login';
import Articles from './pages/Articles/articles';
import Register from './pages/Register/register';
import PrivateRoute from './components/PrivateRoute';



const App = () => {
    return (
        <CookiesProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/articles"
                            element={<PrivateRoute path="/articles"> <Articles /> </PrivateRoute>}
                        />
                        <Route path="/*" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </CookiesProvider>
    );
};

// This is the entry point of the app. It creates the root of your application and it renders the React component `App` inside an HTML element identified with the id `root`.
createRoot(document.getElementById('root')).render(<App />)