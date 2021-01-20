import { useEffect, useState } from 'react';
import mercadolibre from '../apis/mercado-libre';


const useSearch = (defaultSearch) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        search(defaultSearch);
    }, [defaultSearch]);

    const search = async (product) => {

        const response = await mercadolibre.get('/sites/MLA/search', {
            params: {
                q: product,
                limit: 4
            }
        });

        setProducts(response.data.results);
    };

    return [products, search];
};

export default useSearch;
