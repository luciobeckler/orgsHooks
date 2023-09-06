import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Estrelas({
    estrelaAtiva,
    estrelaDesativada,
    quantidade: quantidadeAntiga,
    editavel,
    grande
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)
    const estilos = estilosFuncao(grande)

    const getImage = (index) => {
        if (index < quantidade) {
            return estrelaAtiva
        }
        return estrelaDesativada
    }

    const renderEstrelas = () => {
        const arrayEstrelas = []
        for (let i = 0; i < 5; i++) {
            arrayEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={(setQuantidade) => setQuantidade(i + 1)}
                    disabled={!editavel}
                >
                    <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            )
        }

        return arrayEstrelas;
    }

    return <View style={estilos.container}>
        {renderEstrelas(quantidadeAntiga)}
    </View>

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
