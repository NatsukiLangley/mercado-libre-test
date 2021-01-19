import React from 'react';
import './product-list.scss';

const ProductsList = ({ products }) => {
    console.log('productos', products)
    let renderedList;
    if (products) {
        renderedList = products.map((product) => {
            return (
                <div>
                    <div className="product-card">
                        <div className="image-reference">
                            <img src={product.thumbnail} alt={product.title} className="full-width" />
                        </div>
                        <div className="product-description">
                            <p className="product-price">$ {product.price.toLocaleString('es-ES')}</p>
                            <p className="product-name" key={product.id}>{product.title}</p>
                        </div>
                        <div className="product-city">
                            <p className="font-city">{product.address.city_name}</p>
                        </div>
                    </div>
                    <div className="gray-hr">
                        <div className="line-gray"></div>
                    </div>
                </div>
            );
        });
    }


    return (
        <div className="container">
            <div className="bread-crumbs">
                <p className="bread-text">Ejemplo</p>
            </div>
            <div>
                {renderedList}
            </div>

        </div>
    );
};

export default ProductsList;