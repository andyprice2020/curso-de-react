import { Routes, Route } from 'react-router'
import Home from '../../screens/Home.jsx'
import Login from '../../screens/Login.jsx'
import About from '../../screens/About.jsx'
import Product from '../../screens/Product.jsx'
import Think from '../../screens/Think.jsx'
import Counter from '../counter/Counter.jsx'
import LandingPage from '../../screens/LandingPage.jsx'
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/think" element={<Think />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    );
}

export default Router;