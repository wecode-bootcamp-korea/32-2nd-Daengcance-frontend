import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const LocationMap = ({ location }) => {
  const { latitude, longitude } = location;
  useEffect(() => {
    const mapcontainer = document.getElementById('Sittermap');

    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4,
    };

    const map = new kakao.maps.Map(mapcontainer, options);
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(latitude, longitude),
      radius: 130,
      strokeWeight: 1,
      strokeColor: '#75B8FA',
      strokeOpacity: 1,
      strokeStyle: 'solid',
      fillColor: '#CFE7FF',
      fillOpacity: 0.4,
    });
    circle.setMap(map);
  });

  return <MapDiv id="Sittermap" />;
};

export default LocationMap;

const MapDiv = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5%;
`;
