import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Produtor({ nome, imagem, distancia, estrela }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.containerSecundario}>

                <Image style={estilos.imagem} source={imagem} />
                <View style={estilos.containerColumn}>
                    <Text style={estilos.nome}>{nome}</Text>
                </View>
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        marginVertical: 8,
        backgroundColor: "#F6F6F6",
        marginHorizontal: 16,
        borderRadius: 16,
        padding: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    imagem: {
        height: 50,
        width: 50,
        marginRight: 16,
        borderRadius: 10,
    },
    containerSecundario: {
        flexDirection: 'row'
    },
    containerColumn: {
        flexDirection: 'column'
    },
    nome: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 26
    },
    distancia: {
    },
    estrela: {

    }
})
