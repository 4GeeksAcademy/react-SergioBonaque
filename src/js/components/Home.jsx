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
			image: rigoImage,
		},
		{
			title: "Card 2",
			description: "This is the second card.",
			image: rigoImage,
		},
		{
			title: "Card 3",
			description: "This is the third card.",
			image: rigoImage,
		},
		{
			title: "Card 4",
			description: "This is the fourth card.",
			image: rigoImage,
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