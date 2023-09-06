import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Estrelas from '../../../../../components/Estrelas.js'
import estrelaAtiva from '../../../../../../assets/images/estrela.png'
import estrelaDesativada from '../../../../../../assets/images/estrelaCinza.png'

export default function Produtor({ nome, imagem, distancia, estrela: quantidadeEstrela }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.containerSecundario}>

                <Image style={estilos.imagem} source={imagem} />
                <View style={estilos.containerColumn}>
                    <Text style={estilos.nome}>{nome}</Text>
                    <Estrelas estrelaAtiva={estrelaAtiva} estrelaDesativada={estrelaDesativada} quantidade={quantidadeEstrela} editavel={false} grande={true}></Estrelas>
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
