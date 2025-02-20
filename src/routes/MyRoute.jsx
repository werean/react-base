import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ element, isClosed, ...rest }) {
  const isLoggedIn = true;
  if (isClosed && !isLoggedIn) {
    return <Navigate to={{ pathname: "/login", state: { prevPath: rest.location.pathname } }} />;
  }
  return <Route {...rest} component={element} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
