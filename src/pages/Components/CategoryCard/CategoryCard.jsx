import React from "react";
import { useNavigate } from "react-router";

const CategoryCard = ({ id, name, author, ImageUrl, category, quantity }) => {
	const navigate = useNavigate();
	const handleDetails = () => {
		navigate(`/details/${id}`);
	};
	const handleUpdate = () => {
		navigate(`/update/${id}`);
	};

	return (
		<div className="group w-60 cursor-pointer rounded-lg bg-white p-5 text-center shadow-md transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
			<div className="relative mb-2 text-5xl transition-transform duration-200 group-hover:scale-110">
				{ImageUrl ? (
					<img className="w-full h-[160px]" src={ImageUrl} alt={name} />
				) : (
					<img
						className="w-full h-[160px]"
						src="https://narahita.com/wp-content/uploads/2023/01/Golden-Book-Logo-scaled.jpg"
						alt="picture"
					/>
				)}

				{/* The button is now absolutely positioned over the image */}
				<button
					onClick={handleUpdate}
					className="absolute top-2 right-2 bg-yellow-500 text-white text-[14px] px-2 py-1 rounded-2xl z-10"
				>
					Update
				</button>
			</div>
			<h3 className="mb-1 text-xl font-semibold text-gray-800">{name}</h3>
			<div className="flex flex-col justify-center items-center">
				<p className="text-sm text-gray-600">Author: {author}</p>
				<p className="text-sm text-gray-600">Category: {category}</p>
				<p className="text-sm text-gray-600">Quantity: {quantity}</p>
			</div>
			<div className="flex justify-center items-center text-white mt-2">
				<button
					onClick={handleDetails}
					className="bg-blue-600 w-full text-[14px] px-2 py-1 rounded-2xl"
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default CategoryCard;
