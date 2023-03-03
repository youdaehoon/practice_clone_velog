import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
const RouteChangeTracker = () => {
  const location = useLocation();

  const TRACKING_ID = "G-NVP3112WGR";
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  React.useEffect(() => {
    if (initialized) {
      ReactGA.send(location.pathname + location.search);
    }
  }, [initialized, location]);
};
export default RouteChangeTracker;
