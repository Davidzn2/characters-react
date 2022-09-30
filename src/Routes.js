import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Home'
import Character from './components/Character'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character/:id" element={<Character/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes