import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useWizSchoolContext } from "../components/Context/WizSchoolContext";
import WizSchool from "/.WizSchool";
import NewWizSchool from "../components/Forms/NewWizSchoolForm";


export default function AllWizSchools() {
	const {AllWizSchools, setAllWizSchools} = useWizSchoolContext();

	const subAddWizSchool = (NewWizSchool) => {
		setAllWizSchools((oldWizSchools) => [oldWizSchools, NewWizSchool]);
	};

	const subDelWizSchool = async (id) => {
		try {
			await axios.delete(`/api/WizSchool/${id}`);

			console.log(1);
			setAllWizSchools((oldWizSchools) => {
				console.log(oldWizSchools)
				return oldWizSchools.filter(wizSchool => WizSchool.id !== id );
			});

		} 	catch (error) {
			console.error("Sorry cant delete a student Wizard: ", error);
			}
};


	return (
		<>
		<h1>All WIzard Schools</h1>
		<ul id = "main">
			{AllWizSchools.map((school) => (
				<li key = {WizSchool.id}>
					<Link to = {`/Wizarding-Schools/${WizSchool.id}`}>{WizSchool.name}</Link>
					<br />

					<button onClick={() => subDelWizSchool(WizSchool.id)}>Delete the Wizard School</button>
					</li>
			))}
		</ul>
		<h3> Add Wizard School</h3>
		<NewWizSchool onAddWizSchool = {subAddWizSchool}/>
		</>
	);
}