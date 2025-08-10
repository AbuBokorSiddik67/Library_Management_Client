import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const ErrorPage = () => {
	return (
		<section className="flex h-screen items-center sm:p-16 bg-gray-50 text-gray-800">
			<Helmet>
				<title>Error</title>
			</Helmet>
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
				<img
					className="w-[250px] h-[250px] rounded-full"
					src="https://i.ibb.co/WvmWSPVF/error.jpg"
					alt=""
				/>
				<p className="text-3xl">Sorry, we couldn't find this page.</p>
				<Link
					to="/"
					rel="noopener noreferrer"
					href="#"
					className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
				>
					Back to homepage
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
