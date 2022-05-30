import {StyleSheet} from 'react-native'
import params from './../src/params'

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    },
    mineContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mineFieldContainer: {
        backgroundColor: '#EEE'
    },
    boardContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA'
    }
})

export default styles