import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContexts } from "../../../contexts/AuthContexts";
import { Helmet } from "react-helmet";

const BorrowedBooks = () => {
	const { user } = useContext(AuthContexts);
	const [borrowedBooks, setBorrowedBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const API_BASE_URL = "http://localhost:3000";

	useEffect(() => {
		const fetchBorrowedBooks = async () => {
			if (!user?.email) {
				setLoading(false);
				setError("User email not available. Please log in.");
				return;
			}

			try {
				setLoading(true);
				const response = await axios.get(
					`${API_BASE_URL}/borrowed-books?email=${user.email}`
				);
				setBorrowedBooks(response.data);
				setError(null);
			} catch (err) {
				console.error("Error fetching borrowed books:", err);
				setError("Failed to load borrowed books. Please try again later.");
				setBorrowedBooks([]);
			} finally {
				setLoading(false);
			}
		};

		fetchBorrowedBooks();
	}, [user]);

	const handleReturnBook = async (bookId, borrowedBookId) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, return it!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					await axios.patch(`${API_BASE_URL}/book-quantity-inc/${bookId}`);

					await axios.delete(
						`${API_BASE_URL}/borrowed-books/${borrowedBookId}`
					);

					setBorrowedBooks((prevBooks) =>
						prevBooks.filter((book) => book._id !== borrowedBookId)
					);

					Swal.fire(
						"Returned!",
						"Your book has been successfully returned.",
						"success"
					);
				} catch (err) {
					console.error("Error returning book:", err);
					Swal.fire(
						"Failed!",
						"There was an error returning the book. Please try again.",
						"error"
					);
				}
			}
		});
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<span className="loading loading-spinner loading-lg"></span>
				<p className="ml-2 text-xl">Loading your borrowed books...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen text-red-500 text-lg">
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className="container mx-auto p-4 my-8">
			<Helmet>
				<title>Borrowed Books</title>
			</Helmet>
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
				Your Borrowed Books
			</h1>

			{borrowedBooks.length === 0 ? (
				<div className="text-center text-gray-600 text-lg mt-10 p-5 bg-white rounded-lg shadow">
					<p>You haven't borrowed any books yet.</p>
					<p className="mt-2">Browse our collection and find your next read!</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{borrowedBooks.map((book) => (
						<div
							key={book._id}
							className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
						>
							<img
								src={
									book.bookImage ||
									"https://via.placeholder.com/300x450?text=No+Image"
								}
								alt={book.bookName}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4 flex-grow">
								<h2 className="text-xl font-semibold text-gray-900 mb-2">
									{book.bookName}
								</h2>
								<p className="text-gray-700 text-sm mb-1">
									<span className="font-medium">Category:</span>{" "}
									{book.bookCategory}
								</p>
								<p className="text-gray-700 text-sm mb-1">
									<span className="font-medium">Borrowed On:</span>{" "}
									{new Date(book.borrowedDate).toLocaleDateString()}
								</p>
								<p className="text-gray-700 text-sm mb-4">
									<span className="font-medium">Return By:</span>{" "}
									{new Date(book.returnDate).toLocaleDateString()}
								</p>
							</div>
							<div className="p-4 border-t border-gray-200">
								<button
									onClick={() => handleReturnBook(book.bookId, book._id)}
									className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
								>
									Return Book
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default BorrowedBooks;
