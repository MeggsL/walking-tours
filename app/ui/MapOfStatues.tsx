import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Container from "@mui/material/Container";
import StatueMarkers from "./(markers)/StatueMarkers";
import AppUser from "./(markers)/UserMarker";
import StatueDirections from "./(directions)/DirectionsStatues";

export default function PurpleMapOfStatues() {
  const position = { lat: 54.596747841427444, lng: -5.930042284658504 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Container fixed>
        <div style={{ height: "91vh", width: "100" }}>
          <Map
            defaultZoom={15}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_PURPLE_MAP_ID}
          >
            <AppUser />
            <StatueMarkers />
            <StatueDirections />
            </Map>
        </div>
      </Container>
    </APIProvider>
  );
}