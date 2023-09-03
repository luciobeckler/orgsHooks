import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import carregaHome from '../../../../services/carregaDados'
import Produtor from './Produtor/Produtor'

export default function Produtores({ topo: Topo }) {

    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])


    useEffect(() => {
        const retorno = carregaHome()
        setTitulo(retorno.produtores.titulo)
        setLista(retorno.produtores.lista)
    }, []);

    const headerLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item: { nome, imagem, distancia, estrela } }) =>
            <Produtor nome={nome}
                imagem={imagem}
                distancia={distancia}
                estrela={estrela}>
            </Produtor>
        }
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={() => headerLista()}
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})
