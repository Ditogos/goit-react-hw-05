import { Link, useLocation } from "react-router-dom";
import css from "./BackHomeLInk.module.css";

import { useRef } from "react";

export default function BackHomeLink() {
  const location = useLocation();

  const goBackLink = useRef(location.state ?? "/");

  return (
    <div className={css.goBackContainer}>
      <Link to={goBackLink.current} className={css.goBackLink}>
        Go back
      </Link>
    </div>
  );
}
