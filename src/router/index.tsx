import React from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
const RouteChangeTracker = () => {
  const location = useLocation();
  console.log(location.pathname);
  const TRACKING_ID = "G-NVP3112WGR";
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);

    setInitialized(true);
  }, []);

  React.useEffect(() => {
    let page = location.pathname;
    let title = "custom title";
    switch (page) {
      case "/":
        title = "main";
        break;
      case "/detail":
        title = "detail";
        break;
      default:
        break;
    }
    if (page === "/") page = "/main";
    if (initialized) {
      ReactGA.send({
        page: page,
        hitType: "pageview",
        title: title,
      });
    }
  }, [initialized, location]);
};
export default RouteChangeTracker;
