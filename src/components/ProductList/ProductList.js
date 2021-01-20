import React from 'react';
import { Link } from 'react-router-dom';

import './product-list.scss';

const ProductsList = ({ products }) => {
    const renderedList = products.map((product) => {
        return (
            <div key={product.id}>
                <Link to={`/items/${product.id}`}>
                    <div className="product-card">
                        <div className="image-reference">
                            <img src={product.thumbnail} alt={product.title} className="full-width" />
                        </div>
                        <div className="product-description">
                            <p className="product-price">$ {product.price.toLocaleString('es-ES')}</p>
                            <p className="product-name">{product.title}</p>
                        </div>
                        <div className="product-city">
                            <p className="font-city">{product.address.city_name}</p>
                        </div>
                    </div>
                </Link>
                <div className="gray-hr">
                    <div className="line-gray"></div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="bread-crumbs">
                <p className="bread-text">Ejemplo</p>
            </div>
            <div className="product-wrapper">
                {renderedList}
            </div>

        </div>
    );
};

export default ProductsList;