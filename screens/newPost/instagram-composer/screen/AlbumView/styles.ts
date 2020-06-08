import {Dimensions} from 'react-native';
import {DynamicStyleSheet} from 'react-native-dark-mode';
import composerStyle from '../../styles';

const {width} = Dimensions.get('window');

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    width,
    backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
  },
  mediaViewContainer: {
    flex: 6,
  },
  mediaView: {
    width: '100%',
    height: '100%',
  },
  mediaContainer: {
    flex: 4,
    // alignItems: 'center',
  },
});

export default dynamicStyles;
