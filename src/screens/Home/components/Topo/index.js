import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

import carregaHome from '../../../../services/carregaDados'
import logo from '../../../../../assets/images/logo.png'

export default function Topo() {


    const [topo, setTopo] = useState({
        boasVindas: '',
        legenda: ''
    });

    const atualizaTopo = () => {
        const retorno = carregaHome();

        // Desestruturação dos valores do retorno
        const { topo: novoTopo } = retorno;

        // Atualização do estado com os valores desestruturados
        setTopo(novoTopo);
    };

    useEffect(() => {
        // Código a ser executado após o componente ser montado (equivalente a componentDidMount)
        console.log('Componente montado');
        atualizaTopo();

        // Retorno de função para executar limpeza (equivalente a componentWillUnmount)
        return () => {
            console.log('Componente desmontado');
        };
    }, []); // O segundo argumento vazio [] indica que este efeito só é executado uma vez, como o componentDidMount

    return (
        <View style={estilos.container}>
            <Image style={estilos.imagem} source={logo}></Image>
            <Text style={estilos.boasVindas} >{topo.boasVindas}</Text>
            <Text style={estilos.legenda}>{topo.legenda}</Text>
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
    boasVindas: {
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        paddingBottom: 16,
        color: '#A3A3A3'

    }
})