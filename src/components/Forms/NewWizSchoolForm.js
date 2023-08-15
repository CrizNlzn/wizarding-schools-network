import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useWizSchoolContext } from "../Context/WizSchoolContext"

export function NewWizSchool() {
	const [wizName, setWizName] = useState(' ');
	const [wizLocation, setWizLocation] = useState(' ');
	const { addWizSchool } = useWizSchoolContext();


async function handleSub(event) {
	event.preventDefault();

	try {
		const { data } = await axios.post('/api/WizSchool', {
			wizName, wizLocation
		});
		addWizSchool(data);
	
	}	catch(err) {
			console.error(err);
		}
}

	return (
	<>
		<form id = "wizSchoolForm" onSubmit={handleSub}>
			<label htmlFor="WizName"> Wiz School Name:</label>
				<input
					name = "wizName"
					value={wizName}
					onChange = {(a) => setWizName (a.target.value)}
				/> <br />

			<label htmlFor="wizLocation">Wiz School Location:</label>
				<input
					name = "wizLocation"
					value={wizLocation}
					onChange={(a) => setWizLocation (a.target.value)}
					/>
					<button type = "push">Run</button>
				</form>
				</>
	);
}