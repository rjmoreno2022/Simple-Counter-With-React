import React, { useState, useEffect } from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter  } from "./SecondsCounter.jsx";

//create your first component
const Home = () => {

	const [countsec, setCount] = useState(0);
	const [countDown, setcountDown] = useState(1);
	const [countAlert, setcountAlert] = useState(0);
	const [playPausa, setplayPausa] = useState(0);
	const [intervalId, setIntervalId] = useState(null);
	const [inputValue, setInputValue] = useState('');
	const [inputAlert, setinputAlert] = useState('');

    useEffect(() => {
		PlaySetInverval();
    	return () => clearInterval(intervalId);
    }, [playPausa]);

	const PlaySetInverval = () => {
		if (playPausa === 0) {
			setIntervalId(setInterval(() => {
				setCount(count => count + countDown)
				console.log("countAlert: " + countAlert);
				console.log("countsec:" + countsec);
				console.log("if: " + (countsec === countAlert && countAlert != 0));
			  }, 1000));
		}
		else
		{
			clearInterval(intervalId);
		}
	};

	const stopCounter = () => {
		setplayPausa( playPausa === 0 ? 1 : 0); 
	};

	const resetCounter = () => {
		setcountDown(1);
		setCount(0);
		setplayPausa(1); 
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		console.log("inputValue: " + inputValue);
	};

	const handleInputAChange = (event) => {
		setinputAlert(event.target.value);
		console.log("inputAlert: " + inputAlert);
	};

	const prepareAlert = () => {
		if (Number.isInteger(parseInt(inputAlert))) {
			setcountAlert(parseInt(inputAlert));
			setplayPausa(1);
			alert("Alerta: " + countAlert + " segundos.");
		}
	};

	const formatNumbers = (cont, pos) => {
		if (countsec === countAlert && countAlert != 0) {
			setplayPausa(1);
			alert("Alerta: " + countAlert + " segundos.");
			setcountAlert(0);
		}
		if(cont.toString().length > pos )
		{
			return cont >= 0 ? cont.toString().charAt(cont.toString().length-pos-1) : "0";
		}
		else
		{
			return "0";
		}
	};

	const modeTemporizador = () => {
		if (Number.isInteger(parseInt(inputValue))) {
			setCount(parseInt(inputValue));
			setcountDown(-1);
			setplayPausa(1); 
			console.log(countDown);
		}
	}

	return (
		<>
			<div className="text-center bg-dark py-3 px-5 m-3">
				<div className="d-flex justify-content-center px-5">
					<SecondsCounter  seconds={0} icon={1} />
					<SecondsCounter  seconds={formatNumbers(countsec,5)} icon={0} />
					<SecondsCounter  seconds={formatNumbers(countsec,4)} icon={0} />
					<SecondsCounter  seconds={formatNumbers(countsec,3)} icon={0} />
					<SecondsCounter  seconds={formatNumbers(countsec,2)} icon={0} />
					<SecondsCounter  seconds={formatNumbers(countsec,1)} icon={0} />
					<SecondsCounter  seconds={formatNumbers(countsec,0)} icon={0} />
				</div>
				<div className="m-2">
					<div className="input-group my-3">
						<input type="text" className="form-control" placeholder="Indique desde que segundos iniciar" aria-label="Indique desde que segundos iniciar" aria-describedby="button-addon2" value={inputValue} onChange={handleInputChange}/>
						<button className="btn btn-outline-secondary" type="button" onClick={modeTemporizador}>Temporizador</button>
						<input type="text" className="form-control ms-2" placeholder="Indique a cuantos segundos indicar alerta" aria-label="Indique desde que segundos iniciar" aria-describedby="button-addon2" value={inputAlert} onChange={handleInputAChange}/>
						<button className="btn btn-outline-secondary" type="button" onClick={prepareAlert}>Alerta</button>
					</div>
					<button type="button" className="btn btn-secondary m-1" onClick={stopCounter}>{playPausa == 0 ? "Pausa" : "Play"}</button>
					<button type="button" className="btn btn-secondary m-1" onClick={resetCounter}>Reset</button>
				</div>
			</div>
		</>
	);
};

export default Home;
