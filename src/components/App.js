import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProductsList from './ProductList/ProductList';

import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

import useSearch from '../hooks/useSearch';

const App = () => {
    const [products, search] = useSearch('celulares');
    
    return (
        <div className="default-background">
            <SearchBar onFormSubmit={search} />
            <ProductsList 
                products={products}
            />
        </div>
    );
};

export default App;