import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon name="dots-three-vertical" size={20} style={{paddingRight: 10}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
});
