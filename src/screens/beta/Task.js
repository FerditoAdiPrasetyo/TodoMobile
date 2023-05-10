import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyComponent = () => {
  return (
    <LinearGradient
      colors={['purple', 'blue']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
    <View>
      <Text>coba</Text>
    </View>
    </LinearGradient>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Gaya lainnya
  },
});
