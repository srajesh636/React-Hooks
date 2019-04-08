import React from "react";
import {Link} from 'react-router-dom';

export default function ExplainationContainer() {
  return (
    <div className="container">
      <h4>
        <b>
          {" "}
          Todo using Hooks in react{" "}
          <i className="em em-face_with_raised_eyebrow"> </i>
        </b>
      </h4>
      <hr />
      <h6>
        Hooks solve a wide variety of seemingly unconnected problems in React
        that we’ve encountered over five years of writing and maintaining tens
        of thousands of components. Whether you’re learning React, use it daily,
        or even prefer a different library with a similar component model, you
        might recognize some of these problems.
      </h6>
      <br />
      <Link to="/todos">
        <a>See Live Example ---></a>
      </Link>
    </div>
  );
}
