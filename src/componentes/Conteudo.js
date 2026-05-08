import React, { useState } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Image
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import estilos from '../styleSheet/estilos';

function Conteudo() {

    const [nome, setNome] = useState('');

    const [linguagem, setLinguagem] = useState('Java');

    const [mensagem, setMensagem] = useState('');

    const [corInput, setCorInput] = useState('#FFF');

    function mostrarMensagem() {

        if (nome.trim() === '') {

            setMensagem('Por favor, Digite seu nome!');

        } else {

            setMensagem(
                `Olá ${nome}, a sua linguagem de programação favorita é ${linguagem}`
            );
        }
    }

    function corDeFoco(cor) {
        setCorInput(cor);
    }

    return (

        <View style={estilos.conteudo}>

            <Image
                source={require('../../assets/img/cell.jpg')}
                style={estilos.imagem}
            />

            <Text style={estilos.tituloConteudo}>
                Escolha Linguagem Favorita
            </Text>

            <TextInput
                placeholder="Digite seu nome"

                style={[
                    estilos.inputNome,
                    { backgroundColor: corInput }
                ]}

                value={nome}

                onChangeText={setNome}

                onFocus={() => corDeFoco('orange')}

                onBlur={() => corDeFoco('#FFF')}
            />

            <Text style={estilos.textoConteudo}>
                Escolha uma linguagem:
            </Text>

            <Picker
                selectedValue={linguagem}

                style={estilos.picker}

                onValueChange={(itemValue) =>
                    setLinguagem(itemValue)
                }
            >

                <Picker.Item
                    label="Java"
                    value="Java"
                />

                <Picker.Item
                    label="JavaScript"
                    value="JavaScript"
                />

                <Picker.Item
                    label="Python"
                    value="Python"
                />

                <Picker.Item
                    label="C#"
                    value="C#"
                />

            </Picker>

            <TouchableHighlight
                style={estilos.botao}
                onPress={mostrarMensagem}
            >

                <Text style={estilos.textoBotao}>
                    Confirmar
                </Text>

            </TouchableHighlight>

            <Text style={estilos.textoResultado}>
                {mensagem}
            </Text>

        </View>
    );
}

export default Conteudo;