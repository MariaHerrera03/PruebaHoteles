import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";


const HotelsCard = (props) => {

    const openHotelWebsite = () => {
        Linking.openURL(props.website);
    };


return (
    <View key={props._id} style={styles.card}>
        <View style={styles.content}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={{ uri: props.image }}/>
            </View>
            <View style={styles.infoContainer}>
                <TouchableOpacity onPress={openHotelWebsite}>
                    <Text style={styles.title}>{props.name}</Text>
                </TouchableOpacity>
                <Text style={[styles.subparagraph, { fontStyle: 'italic' }]}>{props.location}</Text>
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.paragraph}>{props.rating}</Text>
                        <Text style={styles.subtitle}>Estrellas</Text>
                    </View>
                    <View>
                        <Text style={styles.paragraph}>{props.value} USD</Text>
                        <Text style={styles.subtitle}>Por noche</Text>
                    </View>
                </View>
                <Text style={styles.subparagraph}>{props.description}</Text>
            </View>
        </View>
    </View>
)
}


const styles = StyleSheet.create({

    card: {
        flex: 1,
        backgroundColor: '#fffbeb',
        padding: 12,
        margin: 30,
        marginBottom: 12,
        marginTop: 12,
        borderRadius: 10,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imgContainer: {
        flex: 0.6, 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },

    infoContainer: {
        flex: 1.3, 
        marginLeft: 6,
    },

    subContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        paddingTop: 8, 
        paddingBottom: 8,
    },

    title: {
        paddingBottom: 4,
        color: '#73404e',
        fontWeight: 'bold',
        fontSize: 18 ,
        textAlign: 'center',
    },

    subtitle: {
        color: '#f29f05',
        textAlign: 'center',
    },

    paragraph: {
        color: '#d95436',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    subparagraph: {
        color: '#b97b92',
        textAlign: 'center',
    }
    
})

export default HotelsCard