import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="www.liannedelasalle.com">More about me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
