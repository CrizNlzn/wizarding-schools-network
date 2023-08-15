import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWizStudentContext } from "./Context/WizStudentContext";
import { useWizSchoolContext } from "./Context/WizSchoolContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RenewWizStudent from "../components/Forms/NewWizStudentForm";

export default function WizStudent() {
	const { id } = useParams();
	const WizStudentId = parseInt(id);
	const {allWizStudents, singleWizStudent, setSingleWizStudent, RenewWizStudent } = useWizStudentContext();
	const { allWizSchools } = useWizSchoolContext();
	const eachWizStudent = allWizStudents.find(WizStudent => WizStudent.id === WizStudentId);
	const WizStudentSchool = allWizSchools.find(WizSchool => WizSchool.id === eachWizStudent.WizSchoolId);

	useEffect(() => {
		async function fetchWizStudentsInfo() {
			const { data } = await axios.get(`/api/WizStudent/${id}`);
			setSingleWizStudent(data);
			console.log(data);
		}

		fetchWizStudentsInfo();
	}, [id]);


	if(!singleWizStudent) {
		return <div>One Second..</div>;
	}

	if(!singleWizSchool) {
		return (
			<div>
				<h3>{singleWizStudent.wizFirstName}</h3>
				<p>Email: {singleWizStudent.wizEmail} </p>
				<p>Magic Scores: {singleWizStudent.gpa} </p>
				<p> As of Today, UnEnrolled </p>
			<div>
			<h3>Renew Wiz Student</h3>	
			<RenewWizStudent/>
			</div>
		</div>
		);
	}

		return (
			<div>
				<h3> {singleWizStudent.wizFirstName}</h3>
				<p>Email:{singleWizStudent.wizEmail}</p>
				<p>Magic Scores: {setSingleWizStudent.gpa}</p>
				<p> As of Today, Enrolled in <Link to = {`/Wizarding-schools/${WizStudentSchool.id}`}>{WizStudentSchool.wizName}</Link></p>
				<img src = {singleWizStudent.imageURL} />
				<div>
					<h3>Renew Wizard Student</h3>
					<RenewWizStudent/>
				</div>
			</div>
		);
}