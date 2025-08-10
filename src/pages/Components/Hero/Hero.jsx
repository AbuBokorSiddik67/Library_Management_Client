import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typewriter } from "react-simple-typewriter";

const slideImages = [
	// First Slide.
	{
		url: "https://i.ibb.co/Zzs91mw0/pexels-repuding-12064.jpg",
		caption: (
			<div>
				<div className="w-[380px] max-sm:w-[100%] max-sm:h-[80%] h-[380px]">
					<p className="text-center mt-4 text-white">
						<Typewriter
							words={["Welcome To Our Library !!!"]}
							loop={true}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</p>
				</div>
			</div>
		),
	},
	// Second Slide.
	{
		url: "https://i.ibb.co/KcdMdwsZ/pexels-rafael-cosquiere-1059286-2041540.jpg",
		caption: (
			<div>
				<div className="w-[380px] max-sm:w-[100%] max-sm:h-[80%] h-[380px]">
					<p className="text-center mt-4 text-white">
						<Typewriter
							words={["Welcome To Our Library !!!"]}
							loop={true}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</p>
				</div>
			</div>
		),
	},
	// Third Slide.
	{
		url: "https://i.ibb.co/0y7k269r/pexels-pixabay-159775.jpg",
		caption: (
			<div>
				<div className="w-[380px] max-sm:w-[100%] max-sm:h-[80%] h-[380px]">
					<p className="text-center mt-4 text-white">
						<Typewriter
							words={["Welcome To Our Library !!!"]}
							loop={true}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</p>
				</div>
			</div>
		),
	},
];

const Hero = () => {
	return (
		<div className="w-[96%] h-[500px] mx-auto rounded-[15px]">
			<Slide
				autoplay={true}
				duration={5000}
				transitionDuration={1500}
				infinite={true}
				arrows={true}
				indicators={true}
			>
				{slideImages.map((slide, index) => (
					<div className="each-slide-effect" key={index}>
						<div
							style={{
								backgroundImage: `url(${slide.url})`,
								height: "500px",
								backgroundSize: "cover",
								backgroundPosition: "center",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "white",
								fontSize: "3rem",
								fontWeight: "bold",
								borderRadius: "15px",
							}}
						>
							<span
								className="md:mt-[20%] lg:mt-[20%]"
								style={{
									// backgroundColor: "rgba(0,0,0,0.5)",
									padding: "10px 20px",
									borderRadius: "10px",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								{slide.caption}
							</span>
						</div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Hero;
