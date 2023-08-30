import React, { useEffect } from 'react'
import { Text } from 'react-native'
import carregaHome from '../../../../services/carregaDados'

export default function Produtores() {

    useEffect(() => {
        const retorno = carregaHome()
        console.log(retorno)
    }, [])

    return (
        <Text>Produtores</Text>
    )
}
