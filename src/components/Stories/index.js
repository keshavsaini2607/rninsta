import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Story from '../Story';

const data = [
  {
    id: 1,
    imageUri:
      'https://images.pexels.com/photos/2549944/pexels-photo-2549944.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Sarrah',
  },
  {
    id: 2,
    imageUri:
      'https://images.pexels.com/photos/5848849/pexels-photo-5848849.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Jessica',
  },
  {
    id: 3,
    imageUri:
      'https://images.pexels.com/photos/6141292/pexels-photo-6141292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    name: 'Sherren',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={({name}) => name}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
