import React from "react";
import { useLoaderData } from "react-router";
import CategoryCard from "../CategoryCard/CategoryCard";

const CatBio = () => {
	const data = useLoaderData();
	const filteredData = data.filter((book) => book.category == "Biography");

	return (
		<div>
			<h1 className="text-3xl mb-5 mt-10 font-bold text-center">
				Biography
			</h1>
			<div className="h-auto bg-slate-100 w-[96%] mx-auto rounded-xl p-8 text-center font-sans">
				<div className="flex flex-wrap justify-center gap-10">
					{filteredData.map((book) => (
						<CategoryCard
							key={book._id}
							id={book._id}
							name={book.name}
							author={book.author}
							ImageUrl={book.ImageUrl}
							quantity={book.quantity}
                            category={book.category}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CatBio;
