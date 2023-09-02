import { useEffect, useState } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { useGeolocation } from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";
import styled from 'styled-components'

const LeaftLetContainer = styled.div`

    margin: 30px auto;
    width: 800px;
    height: 400px;


    .leaflet-container {
        height: 400px;
        width: 100%;
    }

`
function LocationMarker() {
    const [position, setPosition] = useState(null as any)
    const map = useMap();
    map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        console.log(e)
        map.flyTo(e.latlng, map.getZoom())
    });



    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const LeafletSample = () => {
    const state = useGeolocation();

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <LeaftLetContainer>
            <MapContainer center={[state?.latitude || 10.7, state?.longitude || 78.81]} zoom={13} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[state?.latitude || 10.7, state?.longitude || 78.81]}>

                </Marker>

                <LocationMarker />
            </MapContainer>

        </LeaftLetContainer>
    )
}

export default LeafletSample