import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    id: 1,
    user: {
      imageUri:
        'https://images.pexels.com/photos/6141292/pexels-photo-6141292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      name: 'Sherren',
    },
    bodyImage:
      'https://images.pexels.com/photos/4538827/pexels-photo-4538827.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caption: 'Collage of flowers',
    likesCount: 1234,
    postedAt: '6 mins ago',
  },
  {
    id: 2,
    user: {
      imageUri:
        'https://images.pexels.com/photos/6141292/pexels-photo-6141292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      name: 'Sherren',
    },
    bodyImage:
      'https://images.pexels.com/photos/2083142/pexels-photo-2083142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caption: 'Collage of flowers',
    likesCount: 1234,
    postedAt: '6 mins ago',
  },
  {
    id: 3,
    user: {
      imageUri:
        'https://images.pexels.com/photos/6141292/pexels-photo-6141292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      name: 'Sherren',
    },
    bodyImage:
      'https://images.pexels.com/photos/7144716/pexels-photo-7144716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caption: 'Collage of flowers',
    likesCount: 1234,
    postedAt: '6 mins ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
