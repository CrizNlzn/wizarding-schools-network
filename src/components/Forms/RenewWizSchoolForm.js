import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useWizSchoolContext } from "../Context/WizSchoolContext";
import { useEffect, useState } from "react";

export default function RenewWizSchool() {
	const {wizSchool, setWizSchool} = useState({});
	const {wizName, setWizName} = useState(' ');
	const {wizLocation, setWizLocation} = useState(' ');
	const { id } = useParams();
	const { renewWizSchool } = useWizSchoolContext();

	async function handleSub(event) {
		event.preventDefault();
		console.log(wizName, wizLocation);

		try {
			const { data } = await axios.put(`/api/WizSchool/${id}`, {
				wizName, wizLocation
			});

			console.log(data);
			setWizName(" ");
			setWizLocation(" ");
			renewWizSchool(id, {wizName, wizLocation})
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<>
		<form id = "WizSchoolForm" onSubmit={handleSub}>
		<label htmlFor="WizName">Wiz School Name:</label>
		<input
			name = "Wiz Name"
			value = {wizName}
			onChange={(a) => setWizName(a.target.value)}
			/>
			 <br />
		
			 <label htmlFor="WizLocation">Wiz Location: :</label>
		<input
			name = "Wiz Location"
			value = {wizLocation}
			onChange={(a) => setWizLocation(a.target.value)}
			/> 
			  <br />
			  <button type = "Push">Push</button>
			</form>
			</>
	);
}