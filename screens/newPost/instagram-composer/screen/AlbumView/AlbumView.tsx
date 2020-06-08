import React, {useEffect, useState} from 'react';
import {View, FlatList, Platform} from 'react-native';
// import CameraRoll from '@react-native-community/cameraroll';
import {useDynamicStyleSheet} from 'react-native-dark-mode';
import MediaItem from '../../components/MediaItem/MediaItem';
import MediaView from '../../components/MediaView/MediaView';
import Filters from '../../components/Filters/Filters';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import dynamicStyles from './styles';

const AlbumView = (props)=> {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const {
    isFilterEnable,
    onImageFilter,
    videoPaused,
    onAlbumVideo,
    onCancel,
  } = props;
  const [photos, setPhotos] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [filterableSource, setFilterableSource] = useState({});
  const [isMultiSelectModeActive, setIsMultiSelectModeActive] = useState(false);
  const [multiSelectCount, setMultiSelectCount] = useState(0);
  const [filterIndex, setFilterIndex] = useState(-1);

  useEffect(() => {
    const containVideo = selectedMedia.find(media => media.mime === 'video');
    if (isFilterEnable && containVideo) {
      onAlbumVideo(selectedMedia);
    }
    if (!isFilterEnable) {
      setMultiSelectCount(0);
      setIsMultiSelectModeActive(false);
    }
  }, [isFilterEnable]);

  useEffect(() => {
    if (isFilterEnable && !isOnlyVideoMedia(selectedMedia)) {
      onImageFilter(selectedMedia);
    }
    if (selectedMedia.length > 0) {
      const mediaIndex = selectedMedia.findIndex(
        media => media.mime === 'image',
      );
      if (mediaIndex > -1 && !isFilterEnable) {
        setFilterableSource(selectedMedia[mediaIndex]);
        setFilterIndex(mediaIndex);
      }
    }
  }, [selectedMedia]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const CameraRoll = require('@react-native-community/cameraroll');
      CameraRoll.getPhotos({
        first: 1000,
        assetType: 'All',
      })
        .then(r => {
          setPhotos(r.edges);
          if (r.edges.length > 0) {
            setSelectedMedia([
              {
                uri: r.edges[0].node.image.uri,
                mime: r.edges[0].node.type,
                filename: r.edges[0].node.image.filename,
              },
            ]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const isOnlyVideoMedia = media => {
    const containVideo = media.find(item => item.mime === 'video');
    if (containVideo && media.length === 1) {
      return true;
    } else {
      false;
    }
  };

  const onItemSelected = ({item, multiSelectModeActive}) => {
    if (multiSelectModeActive) {
      setSelectedMedia(selectedMedia => [
        ...selectedMedia,
        {
          uri: item.node.image.uri,
          mime: item.node.type,
          filename: item.node.image.filename,
        },
      ]);
    } else {
      setSelectedMedia([
        {
          uri: item.node.image.uri,
          mime: item.node.type,
          filename: item.node.image.filename,
        },
      ]);
    }
  };

  const onMediaItemLongPress = ({item}) => {
    setIsMultiSelectModeActive(true);
  };

  const onCountUpdated = count => {
    setMultiSelectCount(count);
  };

  const renderItem = ({item, index}) => (
    <MediaItem
      key={index + ''}
      item={item}
      index={index}
      onCountUpdated={onCountUpdated}
      onItemSelected={onItemSelected}
      onLongPress={onMediaItemLongPress}
      multiSelectCount={multiSelectCount}
      multiSelectModeActive={isMultiSelectModeActive}
    />
  );

  const onMultiSelectItemPress = media => {
    if (media.mime === 'video' || media.type === 'video') {
      return;
    }
    setFilterableSource({uri: media.uri, filename: media.filename});
  };

  const onFliterImage = ({uri, filename}) => {
    setSelectedMedia(selectedMedia =>
      selectedMedia.map(media => {
        if (media.filename === filename) {
          return {...media, uri};
        } else {
          return media;
        }
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaViewContainer}>
        {selectedMedia.length > 0 && (
          <MediaView
            uri={selectedMedia[selectedMedia.length - 1].uri}
            filename={selectedMedia[selectedMedia.length - 1].filename}
            type={selectedMedia[selectedMedia.length - 1].mime}
            shouldFormatVideoUri={true}
            videoPaused={videoPaused}
            selectedMedia={selectedMedia}
            multiSelectModeActive={isMultiSelectModeActive}
            isFilterEnable={isFilterEnable}
            onMultiSelectItemPress={onMultiSelectItemPress}
            filterIndex={filterIndex}
          />
        )}
      </View>
      <View style={styles.mediaContainer}>
        {!isFilterEnable && (
          <FlatList
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {isFilterEnable && !isOnlyVideoMedia(selectedMedia) && (
          <Filters
            originalSources={selectedMedia}
            source={filterableSource}
            onFliterImage={onFliterImage}
          />
        )}
        {isFilterEnable && isOnlyVideoMedia(selectedMedia) && (
          <DeleteButton title={'Delete'} onPress={onCancel} />
        )}
      </View>
    </View>
  );
}
export const MemoizedAlbumView = React.memo(AlbumView)

export default AlbumView;