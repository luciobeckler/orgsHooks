import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import carregaHome from '../../../../services/carregaDados'

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
        renderItem={({ item: { nome, imagem, distancia, estrela } }) => <Text>{nome}</Text>}
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
