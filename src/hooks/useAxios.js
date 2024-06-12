import { useState, useEffect } from "react";
import axios from 'axios';


function useAxios(key, baseURL) {
    const [response, setResponse] = useLocalStorage(key);

    const responseData = async (formatter = data => data, finishingURL = '') => {
        const response = await axios.get(`${baseURL}${finishingURL}`);
        setResponse(data => [...data, formatter(response.data)]);
    };

    const clearResp = () => setResponse([]);

    return [response, responseData, clearResp];
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }
  
  
export default useLocalStorage;

export {useAxios, useLocalStorage};