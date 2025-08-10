import React from 'react';

const About = () => {
    return (
        <div className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 w-[96%] mx-auto rounded-xl">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    About Our Library Management System
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Welcome to our state-of-the-art solution designed to streamline library operations
                    and enhance the user experience for both librarians and patrons.
                </p>
            </header>

            <section className="max-w-4xl mx-auto space-y-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-gray-700">
                        Our mission is to provide an efficient, accessible, and user-friendly platform
                        that simplifies the management of library resources. We aim to help libraries
                        of all sizes operate more effectively, allowing them to focus on what matters most:
                        serving their community.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
                    <ul className="mt-4 text-gray-700 space-y-2">
                        <li>
                            <strong className="text-gray-900">Book Management:</strong> Easily add, edit, and track books in your collection.
                        </li>
                        <li>
                            <strong className="text-gray-900">User Management:</strong> Simple registration and management of library members.
                        </li>
                        <li>
                            <strong className="text-gray-900">Borrowing & Returning:</strong> A seamless system for handling check-outs and returns.
                        </li>
                        <li>
                            <strong className="text-gray-900">Search Functionality:</strong> Robust search tools to help users find what they're looking for.
                        </li>
                        <li>
                            <strong className="text-gray-900">Reporting & Analytics:</strong> Gain insights into library usage and resource performance.
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">Meet the Team</h2>
                    <p className="mt-4 text-gray-700">
                        This system was developed by a passionate team of developers dedicated to creating
                        practical and powerful software solutions. We believe in the power of technology
                        to improve everyday processes.
                    </p>
                </div>
            </section>

            <footer className="mt-12 text-center text-gray-500">
                <p>Thank you for choosing our Library Management System.</p>
            </footer>
        </div>
    );
};

export default About;