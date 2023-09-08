import { useEffect, useState, useCallback } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents, Circle, LayersControl } from 'react-leaflet'
import { useGeolocation } from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";
import styled from 'styled-components'
import { Icon, latLng } from "leaflet";

const LeaftLetContainer = styled.div`

    margin: 30px auto;
    width: 800px;
    height: 400px;


    .leaflet-container {
        height: 400px;
        width: 100%;
    }

`

const center = [51.505, -0.09]
const zoom = 13

function DisplayPosition({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())

    const onClick = useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={onClick}>reset</button>
        </p>
    )
}

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            const radius = e.accuracy;
            const circle = L.circle(e.latlng, radius);
            circle.addTo(map);
            setBbox(e.bounds.toBBoxString().split(","));
        });
    }, [map]);

    return position === null ? null : (
        <Marker position={position} >
            <Popup>
                You are here. <br />
                Map bbox: <br />
                <b>Southwest lng</b>: {bbox[0]} <br />
                <b>Southwest lat</b>: {bbox[1]} <br />
                <b>Northeast lng</b>: {bbox[2]} <br />
                <b>Northeast lat</b>: {bbox[3]}
            </Popup>
        </Marker>
    );
}



const ExternalStateExample = () => {
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

                <Marker position={[state?.latitude || 10.7, state?.longitude || 78.81]} >
                </Marker>


                <Circle center={[state?.latitude || 10.7, state?.longitude || 78.81]} radius={state.accuracy} />
                <LocationMarker />


            </MapContainer>

        </LeaftLetContainer>
    )
}

export default ExternalStateExample