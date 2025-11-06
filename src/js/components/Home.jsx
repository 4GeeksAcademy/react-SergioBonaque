import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumpbotron } from "./Jumpbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";
//create your first component
const Home = () => {
	const cardData = [
		{
			title: "Card 1",
			description: "This is the first card.",
			image: "https://i.pinimg.com/474x/69/31/28/69312834b43954f7bf85b7e8c3d43a86.jpg",
		},
		{
			title: "Card 2",
			description: "This is the second card.",
			image: "https://i.pinimg.com/originals/f7/a5/f0/f7a5f0a7acb42c0efbfb08643abebccb.jpg",
		},
		{
			title: "Card 3",
			description: "This is the third card.",
			image: "https://preview.redd.it/show-me-your-most-ferocious-cat-pic-v0-qfxht2ona4gd1.jpeg?width=1280&auto=webp&s=2f4ae8f13179d32ebd8139e192c928409a6a55af",
		},
		{
			title: "Card 4",
			description: "This is the fourth card.",
			image: "https://preview.redd.it/whats-the-scariest-picture-you-have-of-your-cat-v0-slya394an9jd1.jpeg?width=637&auto=webp&s=b059eebcdce58bf65f1ceaf26821a0845421fae3",
		}



	];


	return (
		<>
			<Navbar />
			<div className="container">
				<Jumpbotron />
				<div className="text-center">
					<div className="d-flex justify-content-center">

						<div className="row">
							{
								cardData.map((card, index) => (
									<div key={index} className="col-md-3 col-sm-6 mb-2">
										<Card
											cardTitle={card.title}
											cardBody={card.description}
											img={card.image}
										/>
									</div>
								))
							}

						</div>

					</div>
				</div>

			</div>
			<div className="">
				<Footer />
			</div>

		</>);
};

export default Home;