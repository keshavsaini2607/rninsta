import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feed from '../../components/Feed';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
