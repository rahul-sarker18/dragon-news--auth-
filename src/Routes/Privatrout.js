import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const Privatrout = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();


  if (loder) {
    return (
      <>
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{from : location}} replace ></Navigate>;
  }

  return children;
};

export default Privatrout;
