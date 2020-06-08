import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Platform} from 'react-native';
import FilterItem from './FilterItem';
import {useDynamicStyleSheet} from 'react-native-dark-mode';
import dynamicStyles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
// import {FILTERS} from './constant';

export default function Filters(props) {
  const styles = useDynamicStyleSheet(dynamicStyles);
  const {source,filename, onFliterImage, originalSources} = props;
  const [filtersComponent, setFiltersComponent] = useState([]);
  const [normalSources] = useState(originalSources);

  useEffect(() => {
    onFliterImage(source,filename);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const {FILTERS} = require('./constant');
      setFiltersComponent([]);
      setTimeout(() => {
        setFiltersComponent(FILTERS);
      }, 1500);
    }
  }, [source.uri]);

  const onFilterSelect = uri => {
    onFliterImage({uri, filename});
  };

  const renderItem = ({item, index}) => {
    return (
      <FilterItem
        key={index + ''}
        index={index}
        item={item}
        FilterComponent={item.filterComponent}
        source={source}
        onFilterSelect={onFilterSelect}
        originalSource={normalSources}
      />
    );
  };

  return (
    <View style={styles.filtersContainer}>
      {filtersComponent.length > 0 ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterItemsContainer}
        >
          {filtersComponent && filtersComponent.map((item,index)=>{
            return renderItem({item,index})
          })}
        </ScrollView>
      ) : (
        <ActivityIndicator style={styles.filtersContainer} />
      )}
    </View>
  );
}
