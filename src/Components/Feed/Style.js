import {
    StyleSheet,
    Dimensions
} from 'react-native';

const style = StyleSheet.create({
    imageStorie: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width
    },
    headerAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        marginLeft: 10,
        fontSize: 20
    },
    content: {
        marginBottom: 30,
        marginTop: 15
    }
})

export default style;