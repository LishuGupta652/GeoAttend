import Globe from "react-globe.gl";
import * as React from "react";

export const ReactGlobeGL = ({ state }) => {
    return (
        <div className="globe">
            {/* <Globe
                // ref={(el: any) => {
                //     if (el) {
                //         el.pointOfView({
                //             altitude: 2,
                //             lat: state.latitude,
                //             lng: state.longitude
                //         });
                //     }
                // }}
                width={300}
                height={300}
                backgroundColor="#0f0d0e"
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                labelText="label"
                labelSize={2}
                labelDotRadius={0.5}
                labelColor={() => "#f9f4da"}
                labelsData={[
                    {
                        lat: state.latitude,
                        lng: state.longitude,
                        alt: state.altitude,
                        label: "Your Location"
                    }
                ]}
            /> */}
            <article>
                <table>
                    <tbody>
                        {Object.keys(state).map((key) => {
                            if (key === "loading") {
                                return null;
                            }
                            return (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>{state[key] || "unknown"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </article>
        </div>
    );
}
