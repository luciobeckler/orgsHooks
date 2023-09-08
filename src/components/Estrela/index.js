import React from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

import estrelaAtiva from '../../../assets/images/estrela.png'
import estrelaDesativada from '../../../assets/images/estrelaCinza.png'

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false
}) {
    const estilos = estilosFuncao(grande)

    const getImage = () => {
        if (preenchida) {
            return estrelaAtiva
        }
        return estrelaDesativada
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}
        >
            <Image style={estilos.estrela} source={getImage()} />
        </TouchableOpacity>
    )
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
})
