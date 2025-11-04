import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumpbotron } from "./Jumpbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumpbotron />
				<div className="d-flex gap-5">
					<Card cardTitle={"Primera etapa"} cardBody={"Nacimiento"} img={"https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"} />
					<Card cardTitle={"Segunda etapa"} cardBody={"Desarrollo"} />
					<Card cardTitle={"Tercera etapa"} cardBody={"Crecimiento"} />
					<Card cardTitle={"Última etapa"} cardBody={"Fallecimiento"} />
				</div>
				
			</div>
<div className="">
					<Footer />
				</div>

		</>);
};

export default Home;