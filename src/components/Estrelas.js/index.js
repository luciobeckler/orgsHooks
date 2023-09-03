import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Estrelas({
    estrelaAtiva,
    estralaDesativada,
    quantidade: quantidadeAntiga,
    editavel = false,
    grande
}) {

    const estilos = estilosFuncao(grande)
    return (
        <View style={estilos.container}>
            <Image style={estilos.estrela} source={estrelaAtiva}></Image>
            <Image style={estilos.estrela} source={estrelaAtiva}></Image>
        </View>
    )
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    },
    container: {
        flexDirection: 'row'
    }
})