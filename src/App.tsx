import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};

export default class App extends React.Component<{}, {}> {
    state = {

    }

    componentDidMount = () => {

    };

    render() {
        return (
            <div className="container-fluid">
                <div id="mapid" style={{ height: 200 }}></div>
                <Map center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={{ lat: 51.505, lng: -0.09 }}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>

        )
    }
}












