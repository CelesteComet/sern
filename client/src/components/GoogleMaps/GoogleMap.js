import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Circle, InfoWindow } from 'react-google-maps';



const GettingStartedGoogleMap = withGoogleMap(props => {

  return (
    <GoogleMap
      ref={ props.omMapLoad}
      defaultZoom={ 15 }
      defaultCenter={{lat: 37.7749295, lng: -122.41941550000001}}
      onClick={props.onMapClick}
      center={{ lat: props.geolocation.lat, lng: props.geolocation.lng }}
    >
    <InfoWindow position={{ lat: props.geolocation.lat, lng: props.geolocation.lng }}>
      <div>{ props.content }</div>
    </InfoWindow>
    <Circle 
      center={{ lat: props.geolocation.lat, lng: props.geolocation.lng }}
      radius={ 100 }
      options={{
        fillColor: 'red',
        fillOpacity: 0.20,
        strokeColor: 'red',
        strokeOpacity: 1,
        strokeWeight: 1,
      }}
    />
    {/*
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    */}
    </GoogleMap>
  )
})

export default GettingStartedGoogleMap;