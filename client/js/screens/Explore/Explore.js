import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapSwiper from '../../components/MapSwiper';

const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2479999,-123.1300971&radius=1500&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=`;
const ExploreScreen = () => {
  const [mapData, setMapData] = useState();
  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setMapData(data.results));
  }, []);
  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 49.2479999,
          longitude: -123.1300971,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: 49.2479999,
            longitude: -123.1300971,
          }}
        />
      </MapView>
      <MapSwiper />
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
export default ExploreScreen;
