import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWizStudentContext } from "./Context/WizStudentContext";
import { useWizSchoolContext } from "./Context/WizSchoolContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RenewWizSchool from "../components/Forms/NewWizSchoolForm";

export default function WizSchool() {
	const {wizSchool, setWizSchool} = useState(null);
	const { id } = useParams();
	const { allWizStudents } = useWizSchoolContext();
	const { allWizSchools, singleWizSchool, setSingleWizSchool, RenewWizSchool } = useWizSchoolContext();
	const WizSchoolId = parseInt(id);
	const WizSchoolStudents = allWizStudents.filter(wizStudent => wizStudent.WizSchoolId === WizSchoolId);

	useEffect(() => {
		async function fetchWizSchoolDetails() {
			const { data } = await axios.get(`/api/WizSchool/${id}`);
			setSingleWizSchool(data);
			console.log(data);
		} 

		fetchWizSchoolDetails();
	}, [id]);

	if(!singleWizSchool) {
		return <div>One Second..</div>;
	}
	
		return (
			<div>
				<h3> {singleWizSchool.name}</h3>
				<p> WizLocation: {singleWizSchool.wizLocation} </p>
				<p> Description: {singleWizSchool.description} </p>
				<img src = {singleWizSchool.imageURL} />
				<h3> Enrolled as of Today</h3>
				<ul>
					{WizSchoolStudents.map(wizStudent => (
						<Link to = {`/WizStudents/${wizStudent.id}`}><li key = {wizStudent.id}>{wizStudent.wizFirstName}</li></Link>
					))}
				</ul>
				<div>
					<h2> Update Wizard School </h2>
					<RenewWizSchool />
				</div>
			</div>
		);
}