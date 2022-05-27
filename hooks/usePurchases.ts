import useSWR from 'swr';
import axios from 'axios';
import Purchase from "../model/Purchase";

type PurchasesValues = {
  purchases: Purchase[] | void | undefined,
  isLoading: boolean,
  isError: boolean
}

const fetcher = (endpoint: string) => axios.get(endpoint).then(res => res.data);

const usePurchases = () => {
  const { data, error } = useSWR(process.env.NEXT_PUBLIC_API_URL + '/purchases', fetcher);
  
  return {
    purchases: data && data.payload,
    isLoading: !error && !data,
    isError: error
  } as PurchasesValues;
}

export default usePurchases;