import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDynamicStyleSheet } from 'react-native-dark-mode';
import dynamicStyles from './styles';

const defaultAvatar =
  'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg';

interface StoryItemProps{
  onPress?:(item, index, refs)=>void,
  imageStyle?: any,
  containerStyle?: any,
  textStyle?: any,
  item?: any,
  index?: number,
  activeOpacity?: number,
  title?: boolean,
  imageContainerStyle?:any,
  appStyles?:any,
  showOnlineIndicator?:boolean
}

function StoryItem(props:StoryItemProps) {
  const {
    item,
    index,
    onPress,
    containerStyle,
    imageStyle,
    imageContainerStyle,
    textStyle,
    activeOpacity,
    title,
    appStyles,
    showOnlineIndicator
  } = props;

  const refs = useRef();
  const styles = useDynamicStyleSheet(dynamicStyles(appStyles));
  return (
    <TouchableOpacity
      key={index}
      ref={refs}
      activeOpacity={activeOpacity}
      onPress={() => onPress(item, index, refs)}
      style={[styles.container, containerStyle]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <FastImage
          style={[styles.image, imageStyle]}
          source={{ uri: item.avatar || defaultAvatar}}
        />
        {showOnlineIndicator && <View style={styles.isOnlineIndicator} />}
      </View>
      <Text
        style={[
          styles.text,
          textStyle,
        ]}>@{item.username}</Text>
    </TouchableOpacity>
  );
}

export default StoryItem;
