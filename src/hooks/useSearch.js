import { useEffect, useState } from 'react';
import mercadolibre from '../apis/mercado-libre';


const useSearch = (defaultSearch) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState([]);

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

        const listOfFilter = response.data.filters;

        setProducts(response.data.results);
        setFilters(listOfFilter);
    };

    return [products, filters];
};

export default useSearch;
