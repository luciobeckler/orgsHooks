import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home';
import mock from './src/mocks/Home'

export default function App() {
  return <SafeAreaView>
    <Home {...mock}></Home>
  </SafeAreaView>

}


