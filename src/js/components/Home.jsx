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
					<Card cardTitle={"Gato observador"} cardBody={"Lorem ipsum dolor sit amet consectetur adipiscing elit."} img={"https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0b3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"} />
					<Card cardTitle={"Gato tranquilo"} cardBody={"Sapien natoque feugiat pretium velit donec porta nibh dignissim."} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/British_shorthair_Irina_AEA.JPG/960px-British_shorthair_Irina_AEA.JPG"}/>
					<Card cardTitle={"Gato pequeñito"} cardBody={"Lacus magnis nullam sollicitudin fringilla suscipit."} img ={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"}/>
					<Card cardTitle={"Gato enfadado"}  cardBody={"Himenaeos cursus blandit erat imperdiet ante felis per commodo."} img ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Qe6FFVDLf92nrrX-KmNcZ4kz8YgBtP1hMppBlvF_zlXMw_WGVtawk2iEwdZ6bu2KZqw&usqp=CAU"}/>
				</div>

			</div>
			<div className="">
				<Footer />
			</div>

		</>);
};

export default Home;