import React, { createContext, useContext, useState, useEffect } from 'react';
import WizStudent from '../AllWizStudents';
import axios from 'axios';

const WizStudentContext = createContext();

export function WizStudentParent({ minors }) {
		const [AllWizStudents, setAllWizStudents] = useState([]);
		const [SingleWizStudent, setSingleWizStudent] = useState(null);


		useEffect(() => {
			async function fetchAllWizStudents() {
				const { data } = await axios.get("/api/WizStudents");
					setAllWizStudents(data);
			}

			fetchAllWizStudents();
		}, []);


const renewWizStudent = (id, renewedData) => {
setSingleWizStudent((prevSingleWizStudent) => ({
	prevSingleWizStudent, renewedData
}));
};

const addWizStudent = (newWizStudent) => {
	setAllWizStudents((prevWizStudents) => [
		prevWizStudents, newWizStudent]);
};

	const contextVal = {
	AllWizStudents, setAllWizStudents, SingleWizStudent, setSingleWizStudent,
	addWizStudent, renewWizStudent
	};

		return (
				<WizStudentContext.Provider value={contextVal}>
						{minors}
				</WizStudentContext.Provider>
		);
}

export function useWizStudentContext() {
	return useContext(WizStudentContext);
}