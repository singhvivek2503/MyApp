import {Dimensions} from 'react-native';
import {DynamicStyleSheet} from 'react-native-dark-mode';
import composerStyle from '../../styles';

const {width} = Dimensions.get('window');
const filterItemSize = Math.floor(width / 3.8);

const dynamicStyles = new DynamicStyleSheet({
  filtersContainer: {
    flex: 1,
    flexDirection:'row'
  },
  filterItemsContainer: {
    alignItems: 'center',
    paddingBottom: filterItemSize,
    paddingLeft: 20,
  },
  filterItemContainer: {
    height: filterItemSize,
    width: filterItemSize + 15,
    margin: 3,
  },
  filterItemTitle: {
    fontSize: 14,
    fontWeight: '300',
    color: composerStyle.colorSet.grey,
    paddingVertical: 8,
    textAlign: 'center',
  },
  filterItemImageContainer: {
    width: '100%',
    height: '100%',
  },
  filterItemImage: {
    width: '100%',
    height: '100%',
  },
});

export default dynamicStyles;
