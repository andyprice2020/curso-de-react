import { Routes, Route } from 'react-router'
import Home from '../../screens/Home.jsx'
import Login from '../../screens/Login.jsx'
import About from '../../screens/About.jsx'
import Product from '../../screens/Product.jsx'
import Think from '../../screens/Think.jsx'
import Counter from '../counter/Counter.jsx'
import Landing from '../../screens/Landing.jsx'
import Dictionary from '../../screens/Dictionary.jsx'
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/think" element={<Think />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
    );
}

export default Router;