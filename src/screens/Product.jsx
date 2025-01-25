import { useSelector } from 'react-redux'
import FilterableProductTable from "../components/products/FilterableProductTable.jsx";
const Product = () => {
    const data = useSelector((state) => state.product.dataProduct)
    return(
        <>
        <h3>Practice 1 - Products</h3>
        <FilterableProductTable products={data} />
        </>
    );
};

export default Product;