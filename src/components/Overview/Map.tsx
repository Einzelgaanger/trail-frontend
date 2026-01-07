import { useMemo } from "react";
import { Card, Skeleton } from "antd";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  const center = useMemo(() => ({ lat: 9.081999, lng: 8.675277 }), []);
  return (
    <div className="mapped">
      {!isLoaded ? (
        <Card>
          <Skeleton active />
        </Card>
      ) : (
        <div className="rant-card rant-card-bordered map-container">
          <div className="rant-card-head">Impact by Geography</div>
          <div className="rant-card-body">
            <GoogleMap
              zoom={6}
              center={center}
              mapContainerClassName="map-container-style"
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
