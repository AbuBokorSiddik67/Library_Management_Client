import React from 'react';

const HomeRules = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Important Library Guidelines
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    To ensure a great experience for everyone, please keep these key rules in mind during your visit.
                </p>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Rule Card 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl text-blue-600 mr-3">📚</span>
                        <h3 className="text-xl font-bold text-gray-900">Borrowing Books</h3>
                    </div>
                    <p className="text-gray-700">
                        A maximum of **3 books** can be borrowed at a time for a period of **14 days**. Please bring your library card for all transactions.
                    </p>
                </div>

                {/* Rule Card 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl text-green-600 mr-3">🤫</span>
                        <h3 className="text-xl font-bold text-gray-900">Maintain Decorum</h3>
                    </div>
                    <p className="text-gray-700">
                        Please maintain **silence** inside the library. Switch your mobile phones to silent mode and refrain from bringing in any food or drinks.
                    </p>
                </div>

                {/* Rule Card 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl text-red-600 mr-3">⏳</span>
                        <h3 className="text-xl font-bold text-gray-900">Fines & Returns</h3>
                    </div>
                    <p className="text-gray-700">
                        Fines are charged for **overdue books**. Lost or damaged books must be replaced or paid for at their current market value.
                    </p>
                </div>

                {/* Rule Card 4 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl text-purple-600 mr-3">💻</span>
                        <h3 className="text-xl font-bold text-gray-900">Resource Usage</h3>
                    </div>
                    <p className="text-gray-700">
                        Computers and internet are for **research purposes only**. Please leave books on designated carts and do not re-shelve them.
                    </p>
                </div>

                {/* Rule Card 5 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                        <span className="text-2xl text-yellow-600 mr-3">💼</span>
                        <h3 className="text-xl font-bold text-gray-900">Personal Belongings</h3>
                    </div>
                    <p className="text-gray-700">
                        The library is **not responsible** for any personal belongings. Please do not leave your items unattended.
                    </p>
                </div>

            </div>

            {/* <footer className="mt-12 text-center text-gray-500">
                <p>For a complete list of rules, please visit the <a href="/rules" className="text-blue-600 hover:underline">Rules page</a>.</p>
            </footer> */}
        </div>
    );
};

export default HomeRules;