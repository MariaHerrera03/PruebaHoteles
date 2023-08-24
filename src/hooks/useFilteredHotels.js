import { useState, useEffect } from "react";
import useHotels from "./useHotels";


const useFilteredHotels = () => {

    const { hotels } = useHotels();

    const [filteredHotels, setFilteredHotels] = useState(hotels);
    const [isFilterActive, setIsFilterActive] = useState(false);

    const handleFilter = (searchTerm) => {
        if (hotels) {
            if (searchTerm) {
                const filtered = hotels.filter((hotel) =>
                    hotel.name.toUpperCase().includes(searchTerm.toUpperCase())
                );
                setFilteredHotels(filtered);
                setIsFilterActive(true);
            } else {
                setFilteredHotels(hotels);
                setIsFilterActive(false);
            }
        }
    };

    useEffect(() => {
        if (!isFilterActive) {
            setFilteredHotels(hotels);
        }
    }, [hotels, isFilterActive]);

    return { filteredHotels, handleFilter };
};

export default useFilteredHotels;