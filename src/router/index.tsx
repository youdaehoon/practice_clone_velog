import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
const RouteChangeTracker = () => {
  const location = useLocation();
  console.log(location.pathname);
  const TRACKING_ID = "G-NVP3112WGR";
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
    }
    setInitialized(true);
  }, []);

  React.useEffect(() => {
    let page = location.pathname;
    if (page === "/") page = "/main";
    if (initialized) {
      ReactGA.send({
        page: page,
        hitType: "pageview",
        title: "custom title",
      });
    }
  }, [initialized, location]);
};
export default RouteChangeTracker;
