import React from 'react';

import {
    View,
    Text
} from 'react-native';

import estilos from '../styleSheet/estilos';

function Cabecalho() {

    return (

        <View style={estilos.cabecalho}>

            <Text style={estilos.textoCabecalho}>
                Componente Picker
            </Text>

        </View>
    );
}

export default Cabecalho;