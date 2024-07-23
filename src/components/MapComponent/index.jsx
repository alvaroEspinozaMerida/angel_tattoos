import React, {useEffect, useRef, useState} from 'react';
import {
    GoogleMap,
    InfoWindowF,
    MarkerF,
    useLoadScript,
} from "@react-google-maps/api";


const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 33.17746,
    lng: -117.32086
};

const markers = [
    {
        id: 1,
        name: "Store",
        position: {
            lat: 33.17746,
            lng: -117.32086
        }
    }
];

function MapComponent() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['marker'], // Explicitly include the marker library
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const mapRef = useRef(null);
    if (loadError) {
        console.error('Error loading maps:', loadError);
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading Maps...</div>;
    }

    return (
        <>
            {isLoaded ? (
                <GoogleMap
                    center={center}
                    zoom={16}
                    onClick={() => setActiveMarker(null)}
                    mapContainerStyle={{ width: "50%", height: "65vh" }}
                >
                    {markers.map(({ id, name, position }) => (
                        <MarkerF
                            key={id}
                            position={position}
                            onClick={() => handleActiveMarker(id)}
                        >
                            {activeMarker === id ? (
                                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                    <div>
                                        <p>{name}</p>
                                    </div>
                                </InfoWindowF>
                            ) : null}
                        </MarkerF>
                    ))}
                </GoogleMap>
            ) : null}
        </>
    );
}

export default MapComponent;