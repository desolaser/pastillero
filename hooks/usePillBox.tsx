import useSWR from 'swr';
import axios from 'axios';
import MedicinePills from '../model/MedicinePills';

type PillBoxValues = {
  pills: MedicinePills[] | void | undefined,
  isLoading: boolean,
  isError: boolean
}

const fetcher = async (endpoint: string) => {
  axios.get(endpoint).then(data => data);
}

const usePillBox = () => {
  const { data, error } = useSWR(`${process.env.API_URL}/get`, fetcher);
  
  return {
    pills: data,
    isLoading: (!error && !data),
    isError: error
  } as PillBoxValues;
}

export default usePillBox;