import React, { useEffect, useState } from "react";
import BooksCard from "../BooksCard/BooksCard";

const TopTips = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://library-management-server-psi-cyan.vercel.app/books")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((data) => {
				setData(data?.splice(0, 4));
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return (
		<div className="w-[96%] mx-auto mt-16">
			<h1 className="text-3xl text-center font-bold mt-5 mb-8">Top Trending Books</h1>
			{/* Fallbacks */}
			{loading && <p className="text-gray-500">Loading...</p>}
			{error && <p className="text-red-500">Error: {error}</p>}

			{/* Data display */}
			<div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{data &&
					data.map((book, index) => (
						<BooksCard key={book._id} index={index} book={book}></BooksCard>
					))}
			</div>
		</div>
	);
};

export default TopTips;
