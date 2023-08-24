import { useState } from "react";
import useHotels from "./useHotels";


const useFilteredHotels = () => {

    const { hotels } = useHotels();

    const [filteredHotels, setFilteredHotels] = useState(hotels);

    const handleFilter = (searchTerm) => {
        if (searchTerm) {
            const filtered = hotels.filter((hotel) =>
                hotel.name.toUpperCase().includes(searchTerm.toUpperCase())
            );
            setFilteredHotels(filtered);
        } else {
            setFilteredHotels(hotels);
        }
    };

    return { filteredHotels, handleFilter };
};

export default useFilteredHotels;