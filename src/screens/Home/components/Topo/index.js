import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'


export default function Topo({ imagem, titulo, descricao }) {
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={imagem}></Image>
            <Text style={estilos.titulo} >{titulo}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "#F6F6F6"
    },
    imagem: {
        marginVertical: 28,
        height: 28,
        width: 70
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        paddingBottom: 16,

    }
})