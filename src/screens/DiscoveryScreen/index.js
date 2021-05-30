import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DiscoveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discovery Screen</Text>
    </View>
  );
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
