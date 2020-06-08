import {Dimensions} from 'react-native';
import {DynamicStyleSheet} from 'react-native-dark-mode';
import composerStyle from '../../styles';
const {width} = Dimensions.get('window');

const avatarSize = 80;

const styles = new DynamicStyleSheet({
  container: {
    flex: 1,
    backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
  },
  centerContainer: {
    alignSelf: 'center',
    width: '90%',
  },
  captionAvatarContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  avatarContainer: {
    flex: 2,
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
  },
  captionContainer: {
    flex: 6,
  },
  textInput: {
    color: composerStyle.colorSet.mainTextColor,
    fontSize: 18,
    paddingTop: 10,
    textAlignVertical: 'top',
    height: avatarSize * 1.1,
  },

  locationContainer: {
    paddingVertical: 9,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: composerStyle.colorSet.hairlineColor,
  },
  addLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addLocationContainerTitle: {
    flex: 6,
  },
  addLocationTitle: {
    fontSize: 17,
    paddingVertical: 8,
    color: composerStyle.colorSet.mainTextColor,
  },
  locationTitle: {
    color: composerStyle.colorSet.mainTextColor,
    fontSize: 17,
    paddingVertical: 3,
  },
  locationDetail: {
    // color: composerStyle.colorSet.mainTextColor,
    color: '#a6a6a6',
    fontSize: 17,
  },
  addLocationIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addLocationIcon: {
    width: 16,
    height: 16,
  },
  cancelIcon: {
    width: 9,
    height: 9,
  },
  suggestedLoationTitle:{
    fontSize:14
  },
  suggestedLocationConatainer: {
    marginTop: 19,
    paddingLeft: 20,
  },
  suggestedLoationItemContainer: {
    backgroundColor: composerStyle.colorSet.borderColor,
    borderRadius: 7,
    padding: 8,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    paddingHorizontal: 18,
    color: composerStyle.colorSet.mainTextColor,
    fontWeight: '400',
  },
  blueText: {
    color: '#3d8fe1',
  },
});

export default styles;
