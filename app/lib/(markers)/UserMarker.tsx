"use client";

import {
  AdvancedMarker,
  InfoWindow,
  APIProvider,
  Pin,
} from "@vis.gl/react-google-maps";

import { useState } from "react";
import { lightGreen } from "@mui/material/colors";

const appUser = { lat: 54.59508217431334, lng: -5.935987917492315 };

function AppUser() {
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100" }}>
        <AdvancedMarker position={appUser} onClick={() => setOpen(true)}>
          {/*create customised pin */}
          <Pin background={lightGreen[200]} borderColor={lightGreen[400]} scale={1.7}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🙋🏼‍♀️</span>
          </Pin>
        </AdvancedMarker>
        {open && (
          <InfoWindow position={appUser} onCloseClick={() => setOpen(false)}>
            <b>Hi there!</b> In the development stage of this app, this marker
            represents the assumed location of the user upon opening the app.
          </InfoWindow>
        )}
      </div>
    </APIProvider>
  );
}

export default AppUser;