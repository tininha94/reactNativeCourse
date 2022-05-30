import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1, 
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    largeButton: {
        width: (Dimensions.get('window').width / 4) * 2, 
    },
    largerButton: {
        width: (Dimensions.get('window').width / 4) * 3, 
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    container: {
        flex: 1
    },
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})