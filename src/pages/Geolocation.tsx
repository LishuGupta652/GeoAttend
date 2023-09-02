import styled from 'styled-components'
import Geohooks from '../components/Geo/Geohooks'
import 'leaflet/dist/leaflet.css';


import LeafletSample from '../components/Geo/LeafletSample'
const GeoLocationStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Geolocation = () => {

    return (
        <GeoLocationStyled>

            <div className="leaf_maps">
                <LeafletSample />
            </div>
            <Geohooks />
        </GeoLocationStyled>
    )
}

export default Geolocation