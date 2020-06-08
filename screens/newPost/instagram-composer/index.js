// export {default as MediaComposer} from './screen/MediaComposer/MediaComposer';
import React from 'react';
import MediaComposer from './screen/MediaComposer/MediaComposer';

export default function(props) {
  const {navigation, visible, onDismiss, onSharePost} = props;

  return (
    visible && (
      <MediaComposer
        navigation={navigation}
        visible={visible}
        onDismiss={onDismiss}
        onSharePost={onSharePost}
      />
    )
  );
}
