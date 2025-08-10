import React from "react";
import Banner from "./Banner/Banner";
import TopBooks from "./TopBooks/TopBooks";
import HelpSection from "./HelpSection/HelpSection";
import Hero from "../Components/Hero/Hero";
import BookCategories from "./BookCategories/BookCategories";
import { Helmet } from "react-helmet";
import Rules from "./Rouls/Rules";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Hero></Hero>
			<BookCategories></BookCategories>
			<TopBooks></TopBooks>
			<HelpSection></HelpSection>
			<Rules></Rules>
		</div>
	);
};

export default Home;
