import React, { useMemo, useReducer, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Estrelas from '../../../../../components/Estrelas.js'

const distanciaEmMetros = (distancia) => {
    console.log('distanciaEmMetros')
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrela: quantidadeEstrela }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    )
    const [editavel, inverterEditavel] = useReducer(
        (editavel) => !editavel,
        false
    )



    const distanciaTexto = useMemo(() =>
        distanciaEmMetros(distancia), [distancia]
    )

    return (
        <TouchableOpacity
            style={estilos.container}
            onPress={() => {
                inverterEditavel();
                inverterSelecionado();
            }}
        >
            <View style={estilos.containerSecundario}>

                <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
                <View style={estilos.containerColumn}>
                    <Text style={estilos.nome}>{nome}</Text>
                    <Estrelas quantidade={quantidadeEstrela} editavel={editavel} grande={selecionado}></Estrelas>
                </View>
            </View>
            <Text style={estilos.distancia}>{distanciaEmMetros(distancia)}</Text>
        </TouchableOpacity >
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

        //Andrioid
        elevation: 4,

        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .23,
        shadowRadius: 2.62
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
