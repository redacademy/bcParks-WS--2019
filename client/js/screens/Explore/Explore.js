import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import fetchData from '../../config/fetchData';
import MapSwiper from '../../components/MapSwiper';
import styled from 'styled-components';

const GOOGLE_API_KEY = '';
const dataURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.2479999,-123.1300971&radius=1500&type=park&fields=place_id,name,opening_hours,formatted_address,geometry&key=${GOOGLE_API_KEY}`;
const Containter = styled.View`
  height: 333px;
  background: #fff;
`;
const ExploreScreen = () => {
  const [mapData, setMapData] = useState([]);
  const [APIData, setAPIData] = useState([]);
  const [region, setRegion] = useState();
  const getImages = reference => {
    const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=${GOOGLE_API_KEY}`;
  };
  const GoogleAPIFetch = () => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setAPIData(data.result));
  };
  const AddDataFromGoogleAPI = () => {
    APIData.map(APIMap => {
      mapData.filter(map => map.externalId === APIMap.id);
    });
  };
  const query = `query {
    maps {
      id
      name
      externalId
      vicinity
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }`;

  useEffect(() => {
    fetchData(query).then(data => {
      setMapData(data.maps);
    });
  }, []);
  const getMarkers = () =>
    mapData.map(map => {
      return (
        <Marker
          coordinate={{
            latitude: map.geometry.location.lat,
            longitude: map.geometry.location.lng,
          }}
          title={map.name}
          description={map.vicinity}
          key={map.id}
        />
      );
    });
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
        {getMarkers()}
      </MapView>
      <Containter>
        <MapSwiper mapData={mapData} />
      </Containter>
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 484,
  },
});
export default ExploreScreen;
