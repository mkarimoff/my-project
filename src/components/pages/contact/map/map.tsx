import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import useKakaoLoader from "./kakaoLoader";

interface Position {
  lat: number;
  lng: number;
}

export default function BasicMap() {
  const [position, setPosition] = useState<Position>({
    lat: 37.662081,  // Initial latitude
    lng: 126.82688,  // Initial longitude
  });

  useKakaoLoader();

  useEffect(() => {
    // Ensure the browser supports geolocation
    if (navigator.geolocation) {
      const successCallback = (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        setPosition({ lat: latitude, lng: longitude });
      };

      const errorCallback = (error: GeolocationPositionError) => {
        console.error("Error occurred: " + error.message);
        // Optionally, you can handle the error and show a fallback location
      };

      // Watch position continuously
      navigator.geolocation.watchPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <Map
      id="map"
      center={{
        lat: position.lat,
        lng: position.lng,
      }}
      style={{
        width: "100%",
        height: "330px",
      }}
      level={5}
    >
      {/* Marker to show the user's location */}
      <MapMarker
        position={{
          lat: position.lat,
          lng: position.lng,
        }}
      />
    </Map>
  );
}
