import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MyTheme, useTheme } from '../Themes/MyTheme'

const favoriteItems = [
    {
        id: 1,
        nameProduct: 'Product 1',
        description: 'Description 1',
        price: 10,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        nameProduct: 'Product 2',
        description: 'Description 2',
        price: 20,
        image: 'https://via.placeholder.com/150',
    },
    // Add more favorite items as needed
];

const Favorite = () => {
    const { theme, toggleTheme } = useTheme();

    const handleFavoriteItemPress = (item) => {
        // Handle when a favorite item is pressed
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Favorite</Text>

            {favoriteItems.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.favoriteItem}
                    onPress={() => handleFavoriteItemPress(item)}
                >
                    <Image style={styles.favoriteItemImage} source={{ uri: item.image }} />
                    <View style={styles.favoriteItemInfo}>
                        <Text style={[styles.favoriteItemName, { color: theme.textColor }]}>{item.nameProduct}</Text>
                        <Text style={[styles.favoriteItemDescription, { color: theme.textColor }]}>{item.description}</Text>
                        <Text style={[styles.favoriteItemPrice,]}>$ {item.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
    },
    favoriteItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    favoriteItemImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    favoriteItemInfo: {
        flex: 1,
        marginHorizontal: 15,
    },
    favoriteItemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    favoriteItemDescription: {
        fontSize: 14,
        color: '#555',
    },
    favoriteItemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#055E38',
        marginTop: 5,
    },
});

export default Favorite;
