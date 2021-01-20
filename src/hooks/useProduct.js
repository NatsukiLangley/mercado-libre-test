import { useEffect, useState } from 'react';
import mercadolibre from '../apis/mercado-libre';

const useProduct = (defaultSearch) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        searchProduct(defaultSearch)
    }, [defaultSearch]);

    const searchProduct = async (product) => {
        const generalProductData = await mercadolibre.get(`/items/${product}`);
        const descriptionProduct = await mercadolibre.get(`/items/${product}/description`);
        const filter = [
            {
                author: {
                    name:'Wilber David',
                    lastname: 'Amaya Cruz'
                },
                item: {
                    id: generalProductData.data.id,
                    title: generalProductData.data.title,
                    price: {
                        currency: generalProductData.data.currency_id,
                        amount: generalProductData.data.price.toLocaleString('es-ES'),
                        decimals: 0
                    },
                    picture: generalProductData.data.pictures[0].url,
                    condition: generalProductData.data.condition,
                    free_shipping: generalProductData.data.shipping.free_shipping,
                    sold_quantity: generalProductData.data.sold_quantity,
                    description : descriptionProduct.data.plain_text
                }
            }
        ];

        setProduct(filter);
    }

    return [product, searchProduct]
};

export default useProduct;
