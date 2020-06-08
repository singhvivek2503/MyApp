import { Platform, Dimensions, I18nManager } from 'react-native';
import { DynamicValue } from 'react-native-dark-mode';
import TNColor from './TNColor';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const colorSet = {
  mainThemeBackgroundColor: new DynamicValue('#ffffff', '#000'),
  mainThemeForegroundColor: new DynamicValue('#4991ec', '#4991ec'),
  mainTextColor: new DynamicValue('#151723', '#ffffff'),
  mainSubtextColor: new DynamicValue('#7e7e7e', '#f5f5f5'),
  hairlineColor: new DynamicValue('#e0e0e0', '#222222'),
  grey0: TNColor('#eaeaea'),
  grey3: TNColor('#e6e6f2'),
  grey6: TNColor('#d6d6d6'),
  grey9: TNColor('#939393'),
  subHairlineColor: new DynamicValue('#f2f2f3', '#f2f2f3'),
  tint: new DynamicValue('#3068CC', '#3068CC'),
  facebook: new DynamicValue('#4267b2', '#4267b2'),
  grey: new DynamicValue('grey', 'grey'),
  whiteSmoke: new DynamicValue('#f5f5f5', '#222222'),
  headerStyleColor: new DynamicValue('#ffffff', '#222222'),
  headerTintColor: new DynamicValue('#000000', '#ffffff'),
  bottomStyleColor: new DynamicValue('#ffffff', '#222222'),
  bottomTintColor: new DynamicValue('grey', 'lightgrey'),
  mainButtonColor: new DynamicValue('#e8f1fd', '#062246'),
  subButtonColor: new DynamicValue('#eaecf0', '#20242d'),
  tabColor: new DynamicValue('#ffffff', '#121212'),
  inputBgColor:new DynamicValue('#ffffff', '#000'),
  grayBgColor:new DynamicValue('grey', 'grey')
};

const navThemeConstants = {
  light: {
    backgroundColor: '#fff',
    fontColor: '#000',
    secondaryFontColor: '#7e7e7e',
    activeTintColor: '#4991ec',
    inactiveTintColor: '#ccc',
    hairlineColor: '#e0e0e0',
  },
  dark: {
    backgroundColor: '#121212',
    fontColor: '#fff',
    secondaryFontColor: '#fff',
    activeTintColor: '#4991ec',
    inactiveTintColor: '#888',
    hairlineColor: '#222222',
  },
  main: '#4991ec',
};
const fontFamily = {
  boldFont: '',
  semiBoldFont: '',
  regularFont: '',
  mediumFont: '',
  lightFont: '',
  extraLightFont: '',
};

const fontSet = {
  xxlarge: 40,
  xlarge: 30,
  large: 25,
  middle: 20,
  normal: 16,
  small: 13,
  xsmall: 11,
  title: 30,
  content: 20,
};

const loadingModal = {
  color: '#FFFFFF',
  size: 20,
  overlayColor: 'rgba(0,0,0,0.5)',
  closeOnTouch: false,
  loadingType: 'Spinner', // 'Bubbles', 'DoubleBounce', 'Bars', 'Pulse', 'Spinner'
};

const sizeSet = {
  buttonWidth: '70%',
  inputWidth: '80%',
  radius: 25,
};

const styleSet = {
  menuBtn: {
    container: {
      backgroundColor: colorSet.grayBgColor,
      borderRadius: 22.5,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
    },
    icon: {
      tintColor: 'black',
      width: 15,
      height: 15,
    },
  },
  searchBar: {
    container: {
      marginLeft: Platform.OS === 'ios' ? 30 : 0,
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      flex: 1,
    },
    input: {
      backgroundColor: colorSet.inputBgColor,
      borderRadius: 10,
      color: 'black',
    },
  },
  rightNavButton: {
    marginRight: 10,
  },
  borderRadius: {
    main: 25,
    small: 5,
  },
  textInputWidth: {
    main: '80%',
  },
  backArrowStyle: {
    resizeMode: 'contain',
    tintColor: '#4991ec',
    width: 25,
    height: 25,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
    marginLeft: 10,
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
};

const StyleDict = {
  fontFamily,
  colorSet,
  navThemeConstants,
  fontSet,
  sizeSet,
  styleSet,
  loadingModal,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
};

export default StyleDict;
