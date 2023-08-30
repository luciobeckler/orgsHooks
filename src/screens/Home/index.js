import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Topo from './components/Topo'
import Produtores from './components/Produtores'

export default function TelaProdutores() {
  return <Produtores topo={Topo} />

}


const estilos = StyleSheet.create({

})
