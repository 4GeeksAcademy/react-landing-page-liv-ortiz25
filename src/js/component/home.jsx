import React from "react";
import Navbar from "./navbar";
import Jumbrotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<div class="container">
                 <Jumbrotron/>
                <Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
