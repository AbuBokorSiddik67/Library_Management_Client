import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContexts } from "./AuthContexts";
import Loading from "../pages/Components/Loading/Loading";


const PrivetRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContexts);
	const location = useLocation();

	if (loading) {
		return <Loading />;
	}

	if (user && user?.email) {
		return children;
	} else {
		return <Navigate state={location.pathname} to="/login"></Navigate>;
	}
};

export default PrivetRoute;
