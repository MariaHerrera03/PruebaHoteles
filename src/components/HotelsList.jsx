import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View, StyleSheet, Image } from "react-native";
import HotelsCard from "./HotelCard";
import useFilteredHotels from "../hooks/useFilteredHotels";


const HotelsList = () => {

    const { filteredHotels, handleFilter } = useFilteredHotels();
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        handleFilter(filterValue);
    }, [filterValue]);


    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image}
                source={{ uri: 'https://raw.githubusercontent.com/MariaHerrera03/ImageBank/main/Otros/Hotels.png' }}/>
            </View>
            <TextInput style={styles.bar}
                placeholder="Busqueda por nombre"
                placeholderTextColor="#fef4f2"
                onChangeText={(text) => (setFilterValue(text))}/>
            <FlatList style={styles.list}
                data={filterValue === "" ? filteredHotels : filteredHotels}
                renderItem={({ item: hotel }) => <HotelsCard {...hotel} />}>
            </FlatList>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    imgContainer: { 
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
    },

    image: {
        width: '50%', 
        height: '100%',
        resizeMode: 'contain',
    },

    bar: {
        backgroundColor: '#d95436',
        margin: 20,
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        paddingBottom: 4,
        paddingTop: 4,
        color: '#fef4f2',
        borderRadius: 10,
    },

    list: {
        marginBottom: 20,
    },
})

export default HotelsList