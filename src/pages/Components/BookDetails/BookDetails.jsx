import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContexts } from "../../../contexts/AuthContexts";

const BookDetails = () => {
	const book = useLoaderData();
	const { user } = useContext(AuthContexts);
	const navigate = useNavigate();

	const {
		_id,
		name,
		author,
		ImageUrl,
		Description,
		category,
		content,
		quantity,
		rating,
	} = book;

	const API_BASE_URL = "http://localhost:3000";

	const handleBorrowBook = async () => {
		if (!user) {
			Swal.fire({
				icon: "error",
				title: "Not Logged In!",
				text: "You need to be logged in to borrow a book.",
				confirmButtonText: "OK",
			});
			navigate("/login");
			return;
		}

		if (quantity === 0) {
			Swal.fire({
				icon: "error",
				title: "Unavailable!",
				text: "This book is currently out of stock.",
				confirmButtonText: "OK",
			});
			return;
		}

		const { value: returnDateInput } = await Swal.fire({
			title: "Select Return Date",
			input: "date",
			inputLabel: "When do you plan to return this book?",
			inputPlaceholder: "Select a date",
			showCancelButton: true,
			confirmButtonText: "Borrow",
			cancelButtonText: "Cancel",
			reverseButtons: true,
			preConfirm: (date) => {
				if (!date) {
					Swal.showValidationMessage("Please select a return date");
				}
				const selectedDate = new Date(date);
				const today = new Date();
				today.setHours(0, 0, 0, 0);
				if (selectedDate < today) {
					Swal.showValidationMessage("Return date cannot be in the past");
				}
			},
		});

		if (returnDateInput) {
			const borrowedBookData = {
				userEmail: user.email,
				bookId: _id,
				bookName: name,
				bookImage: ImageUrl,
				bookCategory: category,
				borrowedDate: new Date().toISOString(),
				returnDate: new Date(returnDateInput).toISOString(),
			};

			try {
				// Send data to the backend to add to borrowedBooks collection
				const response = await axios.post(
					`${API_BASE_URL}/borrowed-books`,
					borrowedBookData
				);

				if (response.data.acknowledged) {
					Swal.fire(
						"Borrowed!",
						`You have successfully borrowed "${name}". Please return it by ${new Date(
							returnDateInput
						).toLocaleDateString()}.`,
						"success"
					);
					// Optionally, you might want to refetch the book details
					// or navigate away to the borrowed books page after successful borrow.
					navigate("/borrowed"); // Redirect to borrowed books page
				} else {
					Swal.fire(
						"Failed!",
						"Could not borrow the book. Please try again.",
						"error"
					);
				}
			} catch (err) {
				console.error("Error borrowing book:", err);
				if (err.response && err.response.status === 400) {
					Swal.fire(
						"Already Borrowed?",
						err.response.data.message ||
							"You might have already borrowed this book, or there was a problem with the request.",
						"info"
					);
				} else {
					Swal.fire(
						"Error!",
						"An unexpected error occurred while trying to borrow the book.",
						"error"
					);
				}
			}
		}
	};

	return (
		<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex my-8 transition-transform transform hover:scale-105">
			{/* Image Section */}
			<div className="md:flex-shrink-0 md:w-1/3 p-2">
				<img
					className="w-full h-64 object-cover md:h-full rounded-lg"
					src={
						ImageUrl ||
						"https://via.placeholder.com/400x600?text=No+Image+Available"
					}
					alt={name || "Book Cover"}
				/>
			</div>

			{/* Details Section */}
			<div className="p-6 md:w-2/3">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
				<p className="text-xl text-gray-700 mb-4">
					<span className="font-semibold">Author:</span> {author || "N/A"}
				</p>

				<div className="flex flex-wrap items-center text-gray-600 text-sm mb-4">
					<span className="mr-4">
						<span className="font-semibold">Category:</span> {category || "N/A"}
					</span>
					<span className="mr-4">
						<span className="font-semibold">Rating:</span>{" "}
						{rating ? `${rating}/5` : "N/A"}
					</span>
					<span>
						<span className="font-semibold">Available:</span>{" "}
						{quantity !== undefined ? quantity : "N/A"}
					</span>
				</div>

				{Description && (
					<div className="mb-4">
						<h2 className="text-lg font-semibold text-gray-800 mb-1">
							Description:
						</h2>
						<p className="text-gray-700 leading-relaxed">{Description}</p>
					</div>
				)}

				{content && (
					<div className="mb-4">
						<h2 className="text-lg font-semibold text-gray-800 mb-1">
							Content:
						</h2>
						<p className="text-gray-700 leading-relaxed">{content}</p>
					</div>
				)}
				<div className="flex justify-start mt-4">
					<button
						onClick={handleBorrowBook}
						className={`btn ${
							quantity === 0 ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
						}`}
						disabled={quantity === 0}
					>
						{quantity === 0 ? "Out of Stock" : "Borrow Book"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
