import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

import logo from '../../../../../assets/images/logo.png'

export default function Topo() {
    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={logo}></Image>
            <Text style={estilos.titulo} >Olá Lúcio</Text>
            <Text style={estilos.descricao}>Encontre os melhores produtos</Text>
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