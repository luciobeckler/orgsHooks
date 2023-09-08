import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Estrela from '../Estrela'


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const RenderEstrelas = () => {
        const arrayEstrelas = []
        for (let i = 0; i < 5; i++) {
            arrayEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande}
                >
                </Estrela>
            )
        }

        return arrayEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas></RenderEstrelas>
    </View>

}
const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
})
