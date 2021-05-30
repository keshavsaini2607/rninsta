import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Post Screen</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});
