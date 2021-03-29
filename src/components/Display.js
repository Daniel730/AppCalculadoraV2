import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props => {
    return(
        <View style={estilos.display}>
            <Text style={estilos.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    display:{
        padding: 20,
        justifyContent: 'center', 
        backgroundColor: 'gray',
        alignItems: "flex-end"
    },
    displayValue: {
        fontSize: 60,
        color: '#FFF',
    }
})