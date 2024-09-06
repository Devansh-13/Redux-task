import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchData = (api) =>{
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetch= async()=>{
            try {
                const response = await axios.get(api);
                const data = response.data;
                console.log(data,"data");
                setData(data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetch();
    },[api])

    return {data,error,isLoading};
}

