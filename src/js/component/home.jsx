import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {
	const [color, setColor] = useState("green");

	const changeLight = (newColor) => {
		if (newColor == "next") {
			console.log("clicked");
			switch (color) {
				case "red":
					setColor("green");
					break;
				case "yellow":
					setColor("red");
					break;
				case "green":
					setColor("yellow");
					break;
			}
		} else {
			setColor(newColor);
		}
	};

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="trafficLight">
				<div
					className={
						"circle red" +
						(color == "red"
							? "circle red selected"
							: "circle red unselected")
					}
					onClick={() => {
						changeLight("red");
					}}></div>
				<div
					className={
						color == "yellow"
							? "circle yellow selected"
							: "circle yellow unselected"
					}
					onClick={() => {
						changeLight("yellow");
					}}></div>
				<div
					className={
						color == "green"
							? "circle green selected"
							: "circle green unselected"
					}
					onClick={() => {
						changeLight("green");
					}}></div>
			</div>
			<div className="text-center mt-3">
				<div
					type="button"
					className="btn btn-secondary"
					onClick={() => {
						changeLight("next");
					}}>
					Change color
				</div>
			</div>
		</div>
	);
};

export default Home;
