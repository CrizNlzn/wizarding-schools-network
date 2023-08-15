import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useWizStudentContext } from "../components/Context/WizStudentContext";
import WizStudent from "/.WizStudent";
import NewWizStudent from "../components/Forms/NewWizStudentForm";

export default function AllWizStudents() {
	const {allWizStudents, setAllWizStudents} = useWizStudentContext();

	const subAddWizStudent = (NewWizStudent) => {
		setAllWizStudents((oldWizStudents) => [oldWizStudents, NewWizStudent]);
	};

	const subDelWizStudent = async (id) => {

		try {
			await axios.delete(`/api/WizStudent/${id}`);

		console.log(1);
		setAllWizStudents((oldWizStudents) => {
			console.log(oldWizStudents)
			return oldWizStudents.filter(WizStudent => WizStudent.id !== id );
		});
	}  	catch (error) {
		console.error("Sorry,. Could not delete Student Wizard: ", error);
		}
	};

		return (
			<>
			<h1> All Wizard Students </h1>
			<ul id = "main">
				{allWizStudents.map((WizStudent) => (
					<li key = {WizStudent.id}>
						<link to = {`/WizStudents/${WizStudent.id}`}>{WizStudent.wizFirstName}</link> <br />
						<button onClick={() => subDelWizStudent(WizStudent.id)}>Delete student Wizard</button>
					</li>
				))}
			</ul>
						<h3>Add a Wizard Student</h3>
						<NewWizStudent onAddWizStudent = {subAddWizStudent}/>
			</>
		);
		
}
