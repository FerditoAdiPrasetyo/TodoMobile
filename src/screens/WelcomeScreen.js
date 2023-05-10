import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import ActionButton from '../actionbutton/ActionButton';
import styles from '../styles';

const WelcomeScreen = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Image style={styles.illustration} source={require('../assets/pencil.png')} />
        <Text style={styles.subtitle}>Selamat Datang</Text>
        <ActionButton
        desc='Apa Rencanamu Hari Ini'
        title='Buat Rencana'
        onPress={() => handleGoTo('TodoScreen')}
        />
        <ActionButton
        title='Todo Beta'
        onPress={() => handleGoTo('TodoBeta')}
        />
    </View>
  );
};


export default WelcomeScreen;