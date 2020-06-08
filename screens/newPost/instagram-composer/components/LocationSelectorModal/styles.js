import {DynamicStyleSheet} from 'react-native-dark-mode';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const dynamicStyles = composerStyle => {
  return new DynamicStyleSheet({
    container: {
      flex: 1,
      backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
    },
    //
    navBarContainer: {
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      ...ifIphoneX(
        {
          top: 50,
        },
        {
          top: 12,
        },
      ),
      paddingVertical: 10,
      // height: 25,
      width: '100%',
      paddingHorizontal: 10,
      backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
      zIndex: 1,
    },
    navBarTitleContainer: {
      flex: 5,
    },
    leftButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 14,
      color: composerStyle.colorSet.mainThemeForegroundColor,
      fontWeight: '600',
    },
    // GooglePlacesAutocomplete
    placesAutocompleteContainer: {
      ...ifIphoneX(
        {
          marginTop: 46,
        },
        {
          marginTop: 50,
        },
      ),
      height: '50%',
      backgroundColor: composerStyle.colorSet.whiteSmoke,
    },
    placesAutocompleteTextInputContainer: {
      width: '100%',
      backgroundColor: composerStyle.colorSet.hairlineColor,
      borderBottomWidth: 0,
      borderTopWidth: 0,
    },
    placesAutocompleteTextInput: {
      backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
      color: composerStyle.colorSet.mainTextColor,
    },
    placesAutocompletedDescription: {
      fontWeight: '400',
      color: composerStyle.colorSet.mainSubtextColor,
    },
    predefinedPlacesDescription: {
      color: composerStyle.colorSet.mainSubtextColor,
    },
    predefinedPlacesPoweredContainer: {
      backgroundColor: composerStyle.colorSet.mainThemeBackgroundColor,
    },
    mapContainer: {
      width: '100%',
      height: '39%',
      backgroundColor: composerStyle.colorSet.whiteSmoke,
    },
  });
};

export default dynamicStyles;
