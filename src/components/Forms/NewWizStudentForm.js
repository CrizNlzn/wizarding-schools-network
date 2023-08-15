import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useWizStudentContext } from "../Context/WizStudentContext"

export default function NewWizStudent()  {
	const {firstName, setfirstName} = useState(" ");
	const {lastName, setlasttName} = useState(" ");
	const {email, setEmail} = useState(" ");
	const { addWizStudent } = useWizStudentContext();

		const nav = useNavigate();


	async function handleSub(event) {
		event.preventDefault();

			try {
			const { data } = await axios.post('/api/WizStudent', {
				firstName, lastName, email
			});
			addWizStudent(data);

 			}	catch(err) {
				console.error(err);
				}
	}	


	return (
		<>
			<form id = 'WizstudentForm' onSubmit={handleSub}>
			<label htmlFor="firstName"> First Name: </label>
			<input
					NAME = 'First Name'
					value={firstName}
					onChange={(a) => setfirstName(a.target.value)}
					/> <br />
			<label htmlFor="lastName"> Last Name: </label>
			<input
					NAME = 'Last Name'
					value={lastName}
					onChange={(a) => setlastName(a.target.value)}
					/> <br />
					<label htmlFor="email"> Email @: </label>
			<input
					NAME = 'email'
					value={email}
					onChange={(a) => email(a.target.value)}
					/> <br />
					<button type = 'submit' > Enter </button>
					</form>
		</>
	);
}