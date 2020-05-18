import React, { Fragment } from 'react';
import Style from './Style'
import {
    View,
    Image
} from 'react-native';

const Content = ({ urlImage }) => {
    return (
        <View style={Style.content}>
            <Image
                style={Style.imageStorie}
                source={urlImage}
            />
        </View>
    )
}

export default Content;