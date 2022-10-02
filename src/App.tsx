import React from 'react';
import './App.css';
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Info from "./pages/Info";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}>
                </Route>
                <Route path='/login' element={<Login/>}>
                </Route>
                <Route path='*' element={<Error/>}>
                </Route>

                <Route path='/info' element={<Info/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;

