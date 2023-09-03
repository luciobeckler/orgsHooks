import React from 'react'
import { Image } from 'react-native'

export default function Estrelas({
    estrelaAtiva,
    estralaDesativada,
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    return (
        <>
            <Image source={estrelaAtiva}></Image>
        </>
    )
}
