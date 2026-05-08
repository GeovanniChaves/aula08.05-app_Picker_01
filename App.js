import React from 'react';

import { View } from 'react-native';

import Cabecalho from './src/componentes/Cabecalho';
import Conteudo from './src/componentes/Conteudo';

function App() {

    return (

        <View style={{ flex: 1 }}>

            <Cabecalho />

            <Conteudo />

        </View>
    );
}

export default App;