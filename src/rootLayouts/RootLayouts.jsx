import React, { useContext } from "react";
import Footer from "../pages/Components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../pages/Components/Navbar/Navbar";
import Loading from "../pages/Components/Loading/Loading";
import { AuthContexts } from "../contexts/AuthContexts";

const RootLayouts = () => {

	const { loading } = useContext(AuthContexts);
	if (loading) {
		return <Loading></Loading>
	}
	
	return (
		<div>
			{/* Header Section Start... */}
			<header className="mx-auto w-[96%] mt-5">
				<Navbar></Navbar>
			</header>
			{/* Header Section End... */}

			<div className="mt-[25px]">
				{/* Outlet Section Start... */}
				<Outlet></Outlet>
				{/* Outlet Section End... */}
				{/* Footer Section Start... */}
				<Footer />
				{/* Footer Section End... */}
			</div>
		</div>
	);
};

export default RootLayouts;
