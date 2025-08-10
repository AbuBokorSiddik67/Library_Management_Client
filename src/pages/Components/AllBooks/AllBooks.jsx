import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Helmet } from "react-helmet";

const AllBooks = () => {
    const books = useLoaderData();
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = books.filter((book) => {
        const isAvailable = filter === "all" || Number(book.quantity) > 0;
        const matchesSearch =
            book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return isAvailable && matchesSearch;
    });

    return (
        <div>
            <Helmet>
                <title>All Books</title>
            </Helmet>
            
            {/* Filter and Search Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center mt-5 w-[96%] mx-auto mb-4 gap-4">
                {/* Filter Dropdown */}
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border text-black font-medium rounded px-3 py-2 w-full sm:w-auto"
                >
                    <option value="all">All Books</option>
                    <option value="AvailableBooks">Show Available Books</option>
                </select>

                {/* Search Input Field */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or author"
                    className="border border-gray-300 text-black rounded px-3 py-2 w-full sm:w-auto"
                />
            </div>
            
            {/* Display Books Section */}
            <div className="h-auto bg-slate-100 w-[96%] mx-auto rounded-xl p-8 text-center font-sans">
                <>
                    <div className="flex flex-wrap justify-center gap-10">
                        {filteredData.length > 0 ? (
                            filteredData.map((category) => (
                                <CategoryCard
                                    key={category._id}
                                    id={category._id}
                                    name={category.name}
                                    author={category.author}
                                    ImageUrl={category.ImageUrl}
                                    description={category.Description}
                                    category={category.category}
                                    content={category.content}
                                    quantity={category.quantity}
                                    rating={category.rating}
                                />
                            ))
                        ) : (
                            <p className="text-gray-600 text-lg">No books found matching your criteria.</p>
                        )}
                    </div>
                </>
            </div>
        </div>
    );
};

export default AllBooks;