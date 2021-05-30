import React from 'react';
import { Image, View, StyleSheet, Dimensions } from "react-native";

const Body = ({imageUri}) => {
  return (
    <Image
      style={styles.image}
      source={{uri: imageUri}} />
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },
});
