import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const ActionButton = ({desc, title, onPress}) => {
    return (
      <View style={styles.viewButton}>
        <Text
        style={styles.titleDesc}>{desc}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
          style={styles.titleButton} onPress={onPress}>{title} 
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
export default ActionButton