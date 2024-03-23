import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MyTheme, useTheme } from '../Themes/MyTheme'

import Ionicons from 'react-native-vector-icons/Ionicons';



const SettingsScreen = ({ navigation }) => {


    return (

        <BodySet />



    );
}
const BodySet = () => {
    const { theme, toggleTheme } = useTheme();


    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.settingBlock}>
                <Text style={[styles.blockTitle, { color: theme.textColor }]}>Thông tin cá nhân</Text>
                <View style={styles.settingItem}>
                    <Text style={{ color: theme.textColor }}>Họ và tên: Hoàng Tiến Thăng</Text>
                    <Text style={{ color: theme.textColor }}>Mã sinh viên: PH31577</Text>
                    <Text style={{ color: theme.textColor }}>Lớp: MD18305</Text>
                </View>
            </View>
            <View style={styles.settingBlock}>
                <Text style={[styles.blockTitle, { color: theme.textColor, }]}>Thông tin điện thoại</Text>
                <View style={styles.settingItem}>
                    <Text style={{ color: theme.textColor }}>Loại điện thoại: Iphone</Text>
                    <Text style={{ color: theme.textColor }}>Cấu hình CPU: A13</Text>
                    <Text style={{ color: theme.textColor }}>RAM: 4GB</Text>
                    <Text style={{ color: theme.textColor }}>Bộ nhớ trong: 64GB</Text>
                </View>
            </View>
            <View style={styles.settingBlock}>
                <Text style={[styles.blockTitle, { color: theme.textColor }]}>Thiết lập riêng</Text>
                <TouchableOpacity style={[styles.settingItem, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]} onPress={toggleTheme}>
                    <Text style={{ color: theme.textColor }}>Đổi theme</Text>
                    <Ionicons name="arrow-forward" size={24} color="#000" />

                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingItem, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]} onPress={() => console.log('Đổi password')}>
                    <Text style={{ color: theme.textColor }}>Đổi password</Text>
                    <Ionicons name="arrow-forward" size={24} color="#000" />

                </TouchableOpacity>
                <TouchableOpacity style={[styles.settingItem, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }]} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={{ color: theme.textColor }}>Đăng xuất</Text>
                    <Ionicons name="arrow-forward" size={24} color="#000" />

                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFF'
    },
    settingBlock: {
        marginBottom: 20,
    },
    blockTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    settingItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
    },
});

export default SettingsScreen;
