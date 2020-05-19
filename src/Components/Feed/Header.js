import React, { Fragment } from 'react';
import Style from './Style'
import {
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
                source={{ uri: user.userURL }}
            />
            <Text
                style={Style.headerText}
            >
                {user.userName}
            </Text>
        </View>
    )
}


export default Header;