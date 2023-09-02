import { useGeolocation } from "@uidotdev/usehooks";
import LeafletSample from "./LeafletSample";
import { ReactGlobeGL } from "./ReactGlobeGL";

function Location() {
    const state = useGeolocation();

    if (state.loading) {
        return <p>loading... (you may need to enable permissions)</p>;
    }

    if (state.error) {
        return <p>Enable permissions to access your location data</p>;
    }

    return <ReactGlobeGL state={state} />
}


const Geohooks = () => {

    return (
        <>
            <Location />
        </>
    )
}

export default Geohooks