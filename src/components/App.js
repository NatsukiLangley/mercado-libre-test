import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import ProductsList from './ProductList/ProductList';
import ProductDetail from './ProductDetail/ProductDetail';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';

import useSearch from '../hooks/useSearch';

const App = () => {
    const [products, search] = useSearch('celulares');

    return (
        <BrowserRouter>
            <div className="default-background">
                <SearchBar onFormSubmit={search} />
                <Switch>
                    <Route path="/items/search/:id">
                        <ProductsList
                            products={products}
                        />
                    </Route>
                    <Route path="/items/:id">
                        <ProductDetail />
                    </Route>

                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;