import React from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

import './product-detail.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, search] = useProduct(id);

    const renderProduct = product.map((product) => {
        return (
            <div key={product.item.id}>
                <div className="row" >
                    <div className="col-12 col-md-7">
                        <img className="image-product full-width" src={product.item.picture} alt={product.item.title} />
                    </div>
                    <div className="col-12 col-md-5">
                        <p className="product-status">{product.item.condition} - {product.item.sold_quantity} vendidos</p>
                        <p className="product-name">{product.item.title}</p>
                        <p className="product-price">$ {product.item.price.amount}</p>
                        <div className="col-12 col-sm-10 p-0">
                            <button type="button" class="btn btn-primary full-width">Comprar</button>
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
                <p className="bread-text">Ejemplo</p>
            </div>
            <div className="white-background">
                {renderProduct}
            </div>
        </div>
    );
};

export default ProductDetail;