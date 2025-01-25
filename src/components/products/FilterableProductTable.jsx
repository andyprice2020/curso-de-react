/* eslint-disable react/prop-types */
import { useState } from 'react'
import SearchBar from '../products/SearchBar.jsx'
import ProductTable from '../products/ProductTable.jsx'
const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
        <>
        <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
        products={ products }
        filterText={ filterText }
        inStockOnly= {inStockOnly} />
        </>
    );
};

export default FilterableProductTable;