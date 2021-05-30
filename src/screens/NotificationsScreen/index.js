import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
