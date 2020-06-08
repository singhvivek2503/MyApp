import { DynamicStyleSheet } from 'react-native-dark-mode';
import AppStyles from '../../appStyles';
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const dynamicStyles = new DynamicStyleSheet({
  feedContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.whiteSmoke,
  },
  emptyStateView: {
    marginTop: 80
  },
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.mainThemeBackgroundColor,
  },
  emptyViewContainer: {
    marginTop: height / 5
  }
});

export default dynamicStyles;
