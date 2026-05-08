import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    cabecalho: {
        backgroundColor: '#87CEEB',
        padding: 20,
        alignItems: 'center'
    },

    textoCabecalho: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },

    conteudo: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20
    },

    tituloConteudo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },

    inputNome: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20
    },

    textoConteudo: {
        fontSize: 18,
        marginBottom: 10
    },

    picker: {
        width: '100%',
        backgroundColor: '#FFF',
        marginBottom: 20
    },

    botao: {
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5
    },

    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textoResultado: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center'
    }

});

export default estilos;