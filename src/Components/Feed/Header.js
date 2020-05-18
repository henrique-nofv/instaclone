import React, { Fragment } from 'react';
import Style from './Style'
import {
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View
} from 'react-native';

const Header = ({ user }) => {
    return (
        <View 
            style={Style.header}
        >
            <Image
                style={Style.headerAvatar}
                source={user.avatarUrl}
            />
            <Text
                style={Style.headerText}
            >{user.name}</Text>
        </View>
    )
}


export default Header;