import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import axios from "axios";
const UpdateData = () => {
	const bookData = useLoaderData();
	const {
		_id,
		name,
		author,
		ImageUrl,
		category,
		rating,
		Description,
		content,
		quantity,
	} = bookData;

	const handleUpdateData = async (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const updatedData = Object.fromEntries(formData.entries());

		// --- IMPORTANT: Convert quantity and rating to numbers here ---
		// Check if quantity exists in updatedData before parsing
		if (updatedData.quantity !== undefined) {
			updatedData.quantity = parseInt(updatedData.quantity);
		}
		// Check if rating exists in updatedData before parsing
		if (updatedData.rating !== undefined) {
			updatedData.rating = parseFloat(updatedData.rating); // Use parseFloat for ratings
		}

		// --- Input Validation (Recommended) ---
		if (
			updatedData.quantity !== undefined &&
			(isNaN(updatedData.quantity) || updatedData.quantity < 0)
		) {
			Swal.fire({
				icon: "error",
				title: "Invalid Quantity",
				text: "Please enter a valid quantity (a number greater than or equal to 0).", // Quantity can be 0 now
			});
			return;
		}

		if (
			updatedData.rating !== undefined &&
			(isNaN(updatedData.rating) ||
				updatedData.rating < 0 ||
				updatedData.rating > 5)
		) {
			Swal.fire({
				icon: "error",
				title: "Invalid Rating",
				text: "Please enter a valid rating (a number between 0 and 5).",
			});
			return;
		}

		try {
			const API_BASE_URL = "http://localhost:3000";
			const response = await axios.put(
				`${API_BASE_URL}/books/${_id}`,
				updatedData
			);

			if (response.data.modifiedCount) {
				Swal.fire({
					title: "Book updated successfully!",
					icon: "success",
					draggable: true,
				});
			} else {
				Swal.fire({
					title: "No changes detected or update failed!",
					text: "The book data might be the same or an error occurred.",
					icon: "info",
					draggable: true,
				});
			}
		} catch (error) {
			console.error("Error updating book:", error);
			Swal.fire({
				title: "Failed to update book!",
				text: error.response?.data?.message || "An unexpected error occurred.",
				icon: "error",
				draggable: true,
			});
		}
	};

	return (
		<section className="px-6 pt-20 pb-5 bg-slate-100 w-[96%] mx-auto rounded-2xl text-gray-900 min-h-screen">
			<form
				onSubmit={handleUpdateData}
				noValidate
				action=""
				className="container flex flex-col mx-auto space-y-12"
			>
				<h1 className="text-3xl text-center text-green-700 font-bold">
					Update Book
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
								defaultValue={name}
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
								defaultValue={author}
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
								defaultValue={ImageUrl}
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
								defaultValue={category}
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							>
								<option value="ScienceFiction">Science Fiction</option>
								<option value="Fantasy">Fantasy</option>
								<option value="History">History</option>
								<option value="Biography">Biography</option>
							</select>
						</div>
						{/* Rating */}
						<div className="col-span-full sm:col-span-3">
							<label className="text-sm text-slate-700 font-medium">
								Rating (0-5):
							</label>
							<input
								required
								name="rating"
								type="number"
								min={0}
								max={5}
								step="0.1"
								defaultValue={rating}
								placeholder="Rating"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>
						{/* Description */}
						<div className="col-span-full">
							<label className="text-sm text-slate-700 font-medium">
								Description:
							</label>
							<textarea
								required
								name="Description"
								defaultValue={Description}
								rows="4"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							></textarea>
						</div>
						{/* Content */}
						<div className="col-span-full">
							<label className="text-sm text-slate-700 font-medium">
								Content:
							</label>
							<textarea
								name="content"
								defaultValue={content}
								rows="3"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							></textarea>
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
								min={0}
								defaultValue={quantity}
								placeholder="Quantity"
								className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
							/>
						</div>

						{/* <div className="col-span-full sm:col-span-3">
                            <label className="text-sm text-slate-700 font-medium">Email:</label>
                            <input
                                name="email"
                                type="email"
                                defaultValue={data.email} // Assuming email is loaded with data
                                className="w-full border rounded-md pl-3 py-2 text-sm focus:ring-slate-300 border-slate-300"
                                readOnly // Usually email of the book owner is not changeable
                            />
                        </div> */}
					</div>
				</fieldset>

				<div className="flex justify-center mt-5 mb-5">
					<button
						type="submit"
						className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-full font-semibold transition"
					>
						Update Book
					</button>
				</div>
			</form>
		</section>
	);
};

export default UpdateData;
