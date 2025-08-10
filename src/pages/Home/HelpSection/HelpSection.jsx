import React from "react";

const HelpSection = () => {
	return (
		<div className="w-[96%] mx-auto mt-16">
			<h1 className="text-3xl text-center font-bold mb-8">Common Questions & Book Tips</h1>
			<div className="bg-slate-50 rounded-xl">
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" defaultChecked />
					<div className="collapse-title font-semibold">
						Q1: How do I find a book by a specific author?
					</div>
					<div className="collapse-content text-sm">
						A1: You can use the search bar at the top of the page. Type in the
						author's full name, or just their last name, to see all available
						books by them.
					</div>
				</div>
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title font-semibold">
						Q2: What are the different genres of books available?
					</div>
					<div className="collapse-content text-sm">
						A2: We offer a wide range of genres including Fiction, Non-Fiction,
						Fantasy, Sci-Fi, Thriller, Romance, History, Biography, Self-Help,
						Children's Books, and more! You can browse by category.
					</div>
				</div>
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title font-semibold">
						Q3: How often are new books added to the collection?
					</div>
					<div className="collapse-content text-sm">
						A3: We regularly update our collection with new titles. Check back
						weekly or subscribe to our newsletter to get updates on the latest
						additions!
					</div>
				</div>
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title font-semibold">
						Q4: Can I request a book that isn't in your current collection?
					</div>
					<div className="collapse-content text-sm">
						A4: While we don't have a direct request feature, you can always
						contact our support team with suggestions. We're always looking to
						expand our library based on reader interest!
					</div>
				</div>
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title font-semibold">
						Q5: What are the benefits of reading regularly?
					</div>
					<div className="collapse-content text-sm">
						A5: Reading regularly can improve vocabulary, enhance critical
						thinking, reduce stress, boost empathy, and provide an endless
						source of knowledge and entertainment.
					</div>
				</div>
				<div className="collapse collapse-plus bg-slate-50 border border-base-300">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title font-semibold">
						Q6: How can I choose the right book for myself?
					</div>
					<div className="collapse-content text-sm">
						A6: Consider your favorite genres, authors, or topics. Read book
						descriptions, reviews, and perhaps even a sample chapter. Don't be
						afraid to try something new, too!
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpSection;
