import { useState, useEffect } from "react";


const useHotels = () => {
    
    const [hotels, setHotels] = useState(null);

    const fetchHotels = async () => {
        const response = await fetch('http://192.168.1.26:9000/api/hotels');
        const json = await response.json();
        setHotels(json);
        return json;
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    return { hotels };
};

export default useHotels;