import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default props => {
    const stylesButton = [estilos.button];
    if(props.double) stylesButton.push(estilos.buttonDouble)
    if(props.triple) stylesButton.push(estilos.buttonTriple)
    if(props.operation) stylesButton.push(estilos.operationButton)
    return(
        <TouchableHighlight
            onPress={() => props.onClick(props.label)}
        >
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "black"
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231"
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})