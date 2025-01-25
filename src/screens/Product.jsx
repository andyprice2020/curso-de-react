import { useSelector } from 'react-redux'
import FilterableProductTable from "../components/products/FilterableProductTable.jsx";
const Product = () => {
    const data = useSelector((state) => state.product.dataProduct)
    return(
        <>
        <FilterableProductTable products={data} />;
        </>
    );
};

export default Product;