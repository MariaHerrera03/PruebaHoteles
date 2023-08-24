import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";
import HotelsList from "./HotelsList";
import { LinearGradient } from "expo-linear-gradient";


const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient  
                colors={['#F29F0560', '#F2740560', '#73404E60']} 
                start={{x: 0, y: 0}} end={{x: 1, y:1}}
                style={{ flex: 1 }}>
                <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
                    <HotelsList />
                </View>
            </LinearGradient>
        </View>
    )
}

export default Main