
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 16.86510497667305, 
    lng: -99.90624521251557
};

function MyComponent() {
  return (
        <div className="container pb-5">
            <LoadScript
            googleMapsApiKey="AIzaSyAmR9nG6wn0P-o2K-EMsHYzQVDHAhbHNA0"
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
            </LoadScript>
            <br/>
        </div>
  )
}

export default React.memo(MyComponent)



