import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeScreen')
        }, 2000);
    })
  return (
   <View style={styles.container}>
        <Image style={styles.illustration} source={require('../../assets/todo.jpg')} />
   </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    illustration: {
        width: 300,
        height: 300,
        borderWidth: 1,
        marginBottom: 10,
    }

})
export default Splash;