import Header from './src/components/Header';
import React from 'react';
import { View,Text } from 'react-native';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style = {{ flex:1}}>
    <Header headerText = {'Albums'} />
    <AlbumList />
  </View>
  );

export default App;
