import React, { useState, useEffect } from 'react';
import { View, Alert, Platform, StyleSheet, BackHandler } from 'react-native';
import MediaComposer from './instagram-composer/screen/MediaComposer/MediaComposer';
import { useDynamicStyleSheet } from 'react-native-dark-mode';
import dynamicStyles from './styles';
import { TNTouchableIcon, TNEmptyStateView } from '../../Core/truly-native';
import AppStyles from '../../appStyles';
import { NavigationActions } from 'react-navigation';

const Upload =(props)=>{
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isMediaComposerVisible, setIsMediaComposerVisible] = useState(false);

  const [isUploaded,setIsUploaded] = useState(false);

  const [] = useState(true);
  const styles = useDynamicStyleSheet(dynamicStyles);

  const appStyles = props.appStyles;
  let didFocusSubscription:any;

  useEffect(()=>{
    if(isUploaded === true){
      gotoHomePage();
    }
  },[isUploaded]);

  useEffect(() => {
  }, []);

  const onBackButtonPressAndroid = () => {
    console.log('back android')
    //props.navigation.goBack();
    return true;
  };

  const toggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  const openDrawer = () => {
    //props.navigation.openDrawer();
  };
  
  const toggleMediaComposer = () => {
    if (Platform.OS === 'ios') {
      setIsMediaComposerVisible(!isMediaComposerVisible);
    } else {
      //props.navigation.navigate('CreatePost');
    }
  };

  const onShareMediaPost = async ({ postText, postMedia }) => {
    if (postMedia.length === 0) {
      toggleMediaComposer();
    } else {
      startPostUpload(postText, postMedia);
    }
  };


  const startPostUpload = async (content, postMedia) => {
    
    toggleMediaComposer();
    //setIsUploaded(true);
  };

  const gotoHomePage = async ()=>{
    console.log('gotohome')
   
  }

  const onEmptyStatePress = () => {
    toggleMediaComposer();
  }

  const emptyStateConfig = {
    title: "New Post",
    description: "Post new story to show to the world.",
    buttonName: "New Post",
    onPress: onEmptyStatePress
  }

  return (
  <View style={[styles.feedContainer]}>
      {isMediaComposerVisible && <MediaComposer
      visible={isMediaComposerVisible}
      onDismiss={toggleMediaComposer}
      onSharePost={onShareMediaPost}
      />}
      <View style={styles.emptyViewContainer}>
        <TNEmptyStateView
          emptyStateConfig={emptyStateConfig}
          appStyles={appStyles}
        />
      </View>
  </View>)
}

export default Upload;

const styles = StyleSheet.create({
    doubleNavIcon: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    container: {
      flex: 1,
      height: '100%'
    }
  });