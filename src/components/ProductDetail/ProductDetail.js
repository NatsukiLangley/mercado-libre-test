import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

import './product-detail.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, category] = useProduct(id);
    let renderCategory = [];

    if(category.length > 0) {
        renderCategory = category.map((filter) => {
            return (
                <span key={filter.id}> 
                    {filter.name}
                    <span> &gt; </span> 
                </span>
            );
        });
    }

    const renderProduct = product.map((product) => {
        return (
            <div className="pad-32" key={product.item.id}>
                <div className="row" >
                    <div className="col-12 col-md-7">
                        <img className="image-product full-width" src={product.item.picture} alt={product.item.title} />
                    </div>
                    <div className="col-12 col-md-5">
                        <p className="product-status">{product.item.condition} - {product.item.sold_quantity} vendidos</p>
                        <p className="product-name">{product.item.title}</p>
                        <p className="product-price">$ {product.item.price.amount}</p>
                        <div className="col-12 col-sm-10 p-0">
                            <button type="button" className="btn btn-primary full-width buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="description-product">
                            <p className="description-title">Descripción del producto</p>
                            <p className="description-text">{product.item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="bread-crumbs">
                <p className="bread-text">{renderCategory}</p>
            </div>
            <div className="white-background">
                {renderProduct}
            </div>
        </div>
    );
};

export default ProductDetail;