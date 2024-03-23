import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'; // Import ScrollView

import Ionicons from 'react-native-vector-icons/Ionicons';

import NewProducts from '../newProduct';
import HotProducts from '../hotProducts';
import AdBanner from '../adBanner';
import RecentlyViewed from '../recentlyViewed';
import avatar1 from '../../image/avt.jpeg';
import { MyTheme, useTheme } from '../Themes/MyTheme'


const Home = ({ navigation }) => {
    const [nameUser] = useState('Thăng');
    const { theme, toggleTheme } = useTheme();



    // Hàm xử lý khi người dùng xem một mặt hàng
    const handleViewItem = (item) => {
        // Thực hiện các hành động cần thiết, ví dụ: lưu mặt hàng đã xem vào cơ sở dữ liệu, thống kê, v.v.
        console.log('Viewed item:', item);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={[styles.innerContainer, { marginTop: 60, paddingBottom: 10 }]}>
                <View style={styles.flexRow}>
                    <View style={styles.item1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image style={styles.avt} source={avatar1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: theme.textColor }}> Xin chào {nameUser} </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.touchableOpacity}>
                        <Ionicons name="cart" size={30} color="#055E38" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                <View style={styles.innerContainer}>

                    <AdBanner />
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, color: theme.textColor }}>Sản phẩm mới</Text>
                    <NewProducts navigation={navigation} />

                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20, color: theme.textColor }}>Sản phẩm hot</Text>
                    <HotProducts navigation={navigation} />


                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical: 20, color: theme.textColor }}>Mặt hàng đã xem gần đây</Text>
                    <RecentlyViewed navigation={navigation} onViewItem={handleViewItem} />

                </View>
            </ScrollView>
        </View>


    );
};



const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
    },
    innerContainer: {

        marginHorizontal: 20
    },
    avt: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginStart: 10,
    },
    item1: {
        width: '60%'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Home;
