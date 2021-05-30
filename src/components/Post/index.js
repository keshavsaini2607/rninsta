import React from 'react';
import {View, StyleSheet} from 'react-native';

//components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.bodyImage} />
      <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
