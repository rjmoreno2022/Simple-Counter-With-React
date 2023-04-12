import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NumberCard } from "./NumberCard.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center bg-dark py-3 px-5 m-3">
				<div className="d-flex justify-content-around px-5">
				<NumberCard title={""} icon={1} />
				<NumberCard title={"0"} icon={0} />
				<NumberCard title={"0"} icon={0} />
				<NumberCard title={"0"} icon={0} />
				<NumberCard title={"0"} icon={0} />
				<NumberCard title={"0"} icon={0} />
				<NumberCard title={"0"} icon={0} />
				</div>
			</div>
		</>
	);
};

export default Home;
