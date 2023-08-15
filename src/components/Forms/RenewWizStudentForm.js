import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useWizStudentContext } from "../Context/WizStudentContext";
import { useEffect, useState } from "react";

export default function RenewWizStudent() {
	const {wizStudent, setWizStudent} = useState([]);
	const {wizFirstName, setWizFirstName} = useState(" ");
	const {wizLastName, setWizLastName} = useState(" ");
	const {wizEmail, setWizEmail} = useState(" ");
	const { id } = useParams();
	const { renewWizStudent } = useWizStudentContext();
	
	async function handleSub(event) {
	event.preventDefault();
	console.log(wizFirstName, wizLastName, wizEmail);

			try {
				const {data} = await axios.put(`/api/WizStudent/${id}`, {
					wizFirstName, wizLastName, wizEmail
				});

				console.log(data);
				setWizFirstName(" ");
				setWizLastName(" ");
				setWizEmail(" ");
				RenewWizStudent(id, {wizFirstName, wizLastName, wizEmail})

			} 	catch (err) {
				console.error(err);
				}
	}

	return (
	<>
	<form id = "WizStudentForm" onSubmit={handleSub}>
		<label htmlFor="WizFirstName">Wiz First Name:</label>
		<input
			name = "Wiz First Name"
			value = {wizFirstName}
			onChange={(a) => setWizFirstName(a.target.value)}
			/> 
				<br />
	
		<label htmlFor="WizLastName">Wiz Last Name:</label>
		<input
			name = "Wiz Last Name"
			value = {wizLastName}
			onChange={(a) => setWizLastName(a.target.value)}
			/> 
				<br />

		<label htmlFor="WizEmail">Wiz Email:</label>
		<input
			name = "Wiz Email"
			value = {wizEmail}
			onChange={(a) => setWizEmail(a.target.value)}
			/> 
				<br />
				<button type = "Push">Push</button>
	</form>
	</>
	);
}
