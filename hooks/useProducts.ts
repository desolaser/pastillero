import useSWR from 'swr';
import axios from 'axios';
import Product from "../model/Product";

type ProductsValues = {
  products: Product[] | void | undefined,
  isLoading: boolean,
  isError: boolean
}

const fetcher = (endpoint: string) => axios.get(endpoint).then(res => res.data);

const useProducts = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/products', fetcher);
  
  return {
    products: data && data.payload,
    isLoading: !error && !data,
    isError: error
  } as ProductsValues;
}

export default useProducts;