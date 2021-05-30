import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';

const Footer = ({likesCount: likesCountProp, postedAt, caption}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    const count = !isLiked ? 1 : -1;
    setLikesCount(likesCount + count);

    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, [likesCountProp]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={handleLike}>
            {isLiked ? (
              <Icon
                name="heart"
                size={28}
                color="#424242"
                style={{color: '#f63e3e'}}
              />
            ) : (
              <Icon name="hearto" size={28} color="#424242" />
            )}
          </TouchableOpacity>
          <FIcon name="comment-o" size={30} color="#424242" />
          <IIcon name="paper-plane-outline" size={30} color="#424242" />
        </View>
        <FIcon name="bookmark-o" size={30} color="#424242" />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likes: {
    fontWeight: 'bold',
    color: '#000',
    margin: 3,
  },
  caption: {
    color: '#000',
    margin: 3,
  },
  postedAt: {
    color: '#909090',
    margin: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '35%',
    justifyContent: 'space-around',
  },
});
