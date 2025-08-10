import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const BookCategories = () => {
	const navigate = useNavigate();

	const handleClickOne = () => {
		navigate("/science");
	};
	const handleClickTwo = () => {
		navigate("/fantasy");
	};
	const handleClickThree = () => {
		navigate("/history");
	};
	const handleClickFour = () => {
		navigate("/biography");
	};
	return (
		<div className="w-[96%] mx-auto my-12 md:my-20">
			{" "}
			<h1 className="text-3xl md:text-3xl font-bold text-center text-gray-800 mb-8">
				{" "}
				Book Categories
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
				{/* Category Card 1: Science Fiction */}
				<div className="flex justify-center w-full">
					{" "}
					<div
						onClick={handleClickOne}
						className="mt-4 w-full max-w-[280px] h-[320px] bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer
                                   overflow-hidden transition-all duration-300 ease-in-out
                                   hover:shadow-xl hover:scale-105 transform
                                   flex flex-col items-center p-4 group"
					>
						<div className="relative w-[200px] h-[200px] flex-shrink-0 mb-4 rounded-lg overflow-hidden border border-gray-200">
							<img
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								src="https://static.scientificamerican.com/sciam/cache/file/C51BE585-F913-4327-9F0E02FCB6321923_source.jpg?w=1200"
								alt="science picture"
							/>
						</div>
						<p className="text-xl font-semibold text-gray-800 text-center mt-auto px-2">
							Science Fiction
						</p>
					</div>
				</div>

				{/* Category Card 2: Fantasy */}
				<div className="flex justify-center w-full">
					<div
						onClick={handleClickTwo}
						className="mt-4 w-full max-w-[280px] h-[320px] bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer
                                   overflow-hidden transition-all duration-300 ease-in-out
                                   hover:shadow-xl hover:scale-105 transform
                                   flex flex-col items-center p-4 group"
					>
						<div className="relative w-[200px] h-[200px] flex-shrink-0 mb-4 rounded-lg overflow-hidden border border-gray-200">
							<img
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFudGFzeXxlbnwwfHwwfHx8MA%3D%3D"
								alt="fantasy picture"
							/>
						</div>
						<p className="text-xl font-semibold text-gray-800 text-center mt-auto px-2">
							Fantasy
						</p>
					</div>
				</div>

				{/* Category Card 3: History */}
				<div className="flex justify-center w-full">
					<div
						onClick={handleClickThree}
						className="mt-4 w-full max-w-[280px] h-[320px] bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer
                                   overflow-hidden transition-all duration-300 ease-in-out
                                   hover:shadow-xl hover:scale-105 transform
                                   flex flex-col items-center p-4 group"
					>
						<div className="relative w-[200px] h-[200px] flex-shrink-0 mb-4 rounded-lg overflow-hidden border border-gray-200">
							<img
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
								alt="history picture"
							/>
						</div>
						<p className="text-xl font-semibold text-gray-800 text-center mt-auto px-2">
							History
						</p>
					</div>
				</div>

				{/* Category Card 4: Biography */}
				<div className="flex justify-center w-full">
					<div
						onClick={handleClickFour}
						className="mt-4 w-full max-w-[280px] h-[320px] bg-white rounded-xl shadow-lg border border-gray-200 cursor-pointer
                                   overflow-hidden transition-all duration-300 ease-in-out
                                   hover:shadow-xl hover:scale-105 transform
                                   flex flex-col items-center p-4 group"
					>
						<div className="relative w-[200px] h-[200px] flex-shrink-0 mb-4 rounded-lg overflow-hidden border border-gray-200">
							<img
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
								src="https://images.unsplash.com/photo-1698956483970-a47edef29331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmlvZ3JhcGh5fGVufDB8fDB8fHww"
								alt="bio pic"
							/>
						</div>
						<p className="text-xl font-semibold text-gray-800 text-center mt-auto px-2">
							Biography
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookCategories;
