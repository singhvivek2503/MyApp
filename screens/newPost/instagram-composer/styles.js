import {DynamicValue} from 'react-native-dark-mode';

const colorSet = {
  mainThemeBackgroundColor: new DynamicValue('#ffffff', '#000'),
  mainThemeForegroundColor: new DynamicValue('#4991ec', '#4991ec'),
  mainTextColor: new DynamicValue('#151723', '#ffffff'),
  mainSubtextColor: new DynamicValue('#7e7e7e', '#f5f5f5'),
  hairlineColor: new DynamicValue('#e0e0e0', '#222222'),
  subHairlineColor: new DynamicValue('#f2f2f3', '#f2f2f3'),
  tint: new DynamicValue('#3068CC', '#3068CC'),
  facebook: new DynamicValue('#4267b2', '#4267b2'),
  grey: new DynamicValue('#acabac', '#d9d9d9'),
  borderColor: new DynamicValue('#efefef', '#a6a6a6'),
  whiteSmoke: new DynamicValue('#f5f5f5', '#222222'),
  headerStyleColor: new DynamicValue('#ffffff', '#222222'),
  headerTintColor: new DynamicValue('#000000', '#ffffff'),
  bottomStyleColor: new DynamicValue('#ffffff', '#222222'),
  bottomTintColor: new DynamicValue('grey', 'lightgrey'),
  mainButtonColor: new DynamicValue('#e8f1fd', '#062246'),
  subButtonColor: new DynamicValue('#eaecf0', '#20242d'),
  tabColor: new DynamicValue('#ffffff', '#121212'),
};

const navThemeConstants = {
  backgroundColor: new DynamicValue('#ffffff', '#121212'),
  fontColor: new DynamicValue('#000', '#fff'),
  secondaryFontColor: new DynamicValue('#989898', '#fff'),
  secondaryFontColorFocused: new DynamicValue('#0d0d0d', '#a6a6a6'),
  activeTintColor: new DynamicValue('#4991ec', '#4991ec'),
  inactiveTintColor: new DynamicValue('#888', '#ccc'),
  hairlineColor: new DynamicValue('#efefef', '#222222'),
  main: '#4991ec',
};

const composerStyle = {
  colorSet,
  navThemeConstants,
};

export default composerStyle;
