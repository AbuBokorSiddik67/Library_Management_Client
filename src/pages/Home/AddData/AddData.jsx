import React, { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContexts } from "../../../contexts/AuthContexts";
import { Helmet } from "react-helmet";

const AddData = () => {
	const { user } = useContext(AuthContexts);

	const handleAddData = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const newData = Object.fromEntries(formData.entries());

		// Convert quantity and rating to numbers here
		newData.quantity = parseInt(newData.quantity);
		newData.rating = parseFloat(newData.rating);

		// Input Validation
		if (isNaN(newData.quantity) || newData.quantity < 1) {
			Swal.fire({
				icon: "error",
				title: "Invalid Quantity",
				text: "Please enter a valid quantity (a number greater than or equal to 1).",
			});
			return;
		}

		if (isNaN(newData.rating) || newData.rating < 0 || newData.rating > 5) {
			Swal.fire({
				icon: "error",
				title: "Invalid Rating",
				text: "Please enter a valid rating (a number between 0 and 5).",
			});
			return;
		}

		// Add email from user context if not already set by hidden input
		// This ensures the email is always correct from the authenticated user
		if (user && user.email) {
			newData.email = user.email;
		} else {
			Swal.fire({
				icon: "error",
				title: "User Not Logged In",
				text: "Could not get your email. Please log in again.",
			});
			return;
		}

		axios
			.post(
				"https://library-management-server-psi-cyan.vercel.app/books",
				newData
			)
			.then((res) => {
				if (res.data.insertedId) {
					Swal.fire("Book Added Successfully!", "", "success");
					form.reset();
				} else {
					Swal.fire(
						"Failed to add book",
						"No insertedId in response.",
						"error"
					);
				}
			})
			.catch((error) => {
				console.error("Error adding book:", error);
				Swal.fire(
					"Failed to add book!",
					error.response?.data?.message || "An unexpected error occurred.",
					"error"
				);
			});
	};

	return (
		<section className="px-6 pt-20 pb-5 bg-slate-100 w-[96%] mx-auto rounded-2xl text-gray-900 min-h-screen">
			<Helmet>
				<title>Add Book</title>
			</Helmet>
			<form
				onSubmit={handleAddData}
				noValidate
				action=""
				className="container flex flex-col mx-auto space-y-12"
			>
				<h1 className="text-3xl text-center text-green-700 font-bold">
					Add Books
				</h1>

				<fieldset className="grid w-[90%] md:w-[80%] mx-auto gap-6 p-6 rounded-xl shadow-lg bg-white border border-slate-200">
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						{/* Book Name */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Book Name:
							</label>
							<input
								required
								name="name"
								type="text"
								placeholder="Enter the Book Name"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>

						{/* AuthorName */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Author Name:
							</label>
							<input
								required
								name="author"
								type="text"
								placeholder="Enter the Author Name"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>

						{/* Description */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Description:
							</label>
							<input
								required
								name="Description"
								type="text"
								placeholder="Write description"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>

						{/* Image URL */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Image URL:
							</label>
							<input
								required
								name="ImageUrl"
								type="text"
								placeholder="https://example.com/image.jpg"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>

						{/* Category */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Category:
							</label>
							<select
								name="category"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							>
								<option value="ScienceFiction">Science Fiction</option>
								<option value="Fantasy">Fantasy</option>
								<option value="History">History</option>
								<option value="Biography">Biography</option>
							</select>
						</div>
						{/* Quantity */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Quantity:
							</label>
							<input
								required
								name="quantity"
								type="number"
								min={1}
								placeholder="Quantity"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>
						{/* Book Content */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Book Content:
							</label>
							<input
								required
								name="content"
								type="text"
								placeholder="Book Content"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>
						{/* Rating */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Rating:
							</label>
							<input
								required
								name="rating"
								type="number"
								min={0}
								max={5}
								step="0.1"
								placeholder="Rating"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>
						{/* Email - Hidden and auto-filled from AuthContext */}
						<div className="col-span-full sm:col-span-3 hidden">
							<label className="text-sm text-slate-700 font-medium">
								Email:
							</label>
							<input
								name="email"
								type="email"
								value={user?.email || ""}
								readOnly
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>
					</div>
				</fieldset>

				<div className="flex justify-center mt-5 mb-5">
					<button
						type="submit"
						className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-semibold transition"
					>
						Add Book
					</button>
				</div>
			</form>
		</section>
	);
};

export default AddData;
