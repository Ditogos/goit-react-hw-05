import { Link, useLocation } from "react-router-dom";

import { useRef } from "react";

export default function BackHomeLink() {
  const location = useLocation();

  const goBackLink = useRef(location.state ?? "/");

  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
    </div>
  );
}
