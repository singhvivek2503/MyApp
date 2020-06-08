import {Dimensions} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {DynamicStyleSheet} from 'react-native-dark-mode';
import composerStyle from '../../styles';

const {width} = Dimensions.get('window');

const dynamicStyles = new DynamicStyleSheet({
  container: {
    flexDirection: 'row',
    width,
    ...ifIphoneX(
      {
        height: 80,
      },
      {
        height: 55,
      },
    ),
    borderBottomColor: composerStyle.navThemeConstants.hairlineColor,
    borderBottomWidth: 1,
    backgroundColor: composerStyle.navThemeConstants.backgroundColor,
  },
  textContainer: {
    justifyContent: 'flex-end',
    marginBottom: 7,
    alignItems: 'center',
  },
  text: {
    color: composerStyle.navThemeConstants.fontColor,
  },
  leftContainer: {
    flex: 2,
  },
  titleContainer: {
    flex: 6,
  },
  rightContainer: {
    flex: 2,
  },
});

export default dynamicStyles;
