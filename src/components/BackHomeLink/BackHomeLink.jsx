import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

import { useRef } from "react";

export default function BackHomeLink() {
  const location = useLocation();

  const goBackLink = useRef(location.state ?? "/");

  return (
    <div>
      <Link to={goBackLink.current}>
        <IoMdArrowRoundBack /> Go back
      </Link>
    </div>
  );
}
