import React from "react";
import { View, StyleSheet } from "react-native";
import MyComponent from "./Task";

const TodoBeta = () => {
  return (
    <View style={styles.container}>
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default TodoBeta;
