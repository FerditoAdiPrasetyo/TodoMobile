import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    illustration: {
        width: 250,
        height: 140,
        borderWidth: 1,
        marginBottom: 10,
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 10,
    },
    titleDesc: {
      fontSize: 15,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 10,
    },
    viewButton: {
      marginBottom: 43, 
      width:225,
    },
    button: {
      backgroundColor: 'steelblue',
      borderRadius: 25,
      paddingVertical: 13,
    },
    titleButton: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
   deleteButton: {
    backgroundColor: 'red',
      borderRadius: 25,
      paddingVertical: 13,
   }
})

export default styles