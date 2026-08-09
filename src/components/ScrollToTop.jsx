import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Fixes the "next page opens scrolled down" issue: whenever the route
// changes, snap the viewport back to the top of the new page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window.HTMLElement.prototype ? "instant" : "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
