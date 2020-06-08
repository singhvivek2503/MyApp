import {Dimensions} from 'react-native';
import {DynamicStyleSheet} from 'react-native-dark-mode';
import composerStyle from '../../styles';

const {width} = Dimensions.get('window');

const styles = new DynamicStyleSheet({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width,
    height: 60,
    flexDirection: 'row',
    backgroundColor: composerStyle.navThemeConstants.backgroundColor,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: composerStyle.navThemeConstants.secondaryFontColor,
    // color: '#0d0d0d',
  },
  titleFocused: {
    color: composerStyle.navThemeConstants.secondaryFontColorFocused,
  },
});

export default styles;
