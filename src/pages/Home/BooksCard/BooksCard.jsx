import React from "react";
import { useNavigate } from "react-router";

const BooksCard = ({ book }) => {
	const { _id, name, ImageUrl, author, category, quantity } = book;
	const navigate = useNavigate();
	const handleDetails = () => {
		navigate(`/details/${_id}`);
	};
	return (
		<div
			className="group relative w-[80%] max-sm:w-[90%] md:w-[280px] bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer
                        overflow-hidden transition-all duration-300 ease-in-out
                        hover:shadow-xl hover:scale-105 transform
                        flex flex-col items-center pb-4 text-center"
		>
			{" "}
			{/* Added pb-4 for bottom padding */}
			{/* Image Section */}
			<div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-t-xl border-b border-gray-200">
				<img
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
					src={ImageUrl}
					alt={name}
				/>
			</div>
			{/* Book Info Section */}
			<div className="flex flex-col items-center px-4 w-full flex-grow">
				{" "}
				{/* flex-grow to take available vertical space */}
				<h3
					className="mb-1 text-xl font-semibold text-gray-800 line-clamp-2"
					title={name}
				>
					{" "}
					{/* line-clamp for long titles */}
					{name}
				</h3>
				<p className="text-sm text-gray-600 mb-0.5">
					Author: <span className="font-medium">{author}</span>
				</p>
				<p className="text-sm text-gray-600 mb-0.5">
					Category: <span className="font-medium">{category}</span>
				</p>
				<p className="text-sm text-gray-600">
					Quantity: <span className="font-medium">{quantity}</span>
				</p>
			</div>
			{/* Details Button Section */}
			<div className="flex justify-center w-full px-4 mt-4">
				{" "}
				{/* Added horizontal padding */}
				<button
					onClick={() => handleDetails(book._id || _id)} // Ensure ID is passed correctly
					className="w-full bg-blue-600 text-white text-base py-2 rounded-full font-semibold
                               transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default BooksCard;
