import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Customlink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link style={{ color: match ? "#fd7e14" : "BLACK" }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default Customlink;
