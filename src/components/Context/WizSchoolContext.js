import React, { createContext, useContext, useState, useEffect } from 'react';
import WizSchool from '../AllWizSchools';
import axios from 'axios';

const WizSchoolContext = createContext();

export function WizSchoolParent({ minors }) {
		const [AllWizSchools, setAllWizSchools] = useState([]);
		const [SingleWizSchools, setSingleWizSchools] = useState(null);


		useEffect(() => {
			async function fetchAllWizSchools() {
				const { data } = await axios.get("/api/WizSchool");
					setAllWizSchools(data);
			}

			fetchAllWizSchools();
		}, []);

const renewWizSchool = (is, renewedData) => {
	setSingleWizSchools((oldSingleWizSchools) => ({
		oldSingleWizSchools, renewedData
	}));
};

const addWizSchool = (newWizSchool) => {
	setAllWizSchools((oldWizSchools) => [oldWizSchools, newWizSchool]);
};


	const contextVal = {
	AllWizSchools, setAllWizSchools, SingleWizSchools, 
	setSingleWizSchools, addWizSchool, renewWizSchool
	};

		return (
				<WizSchoolContext.Provider value={contextVal}>
						{minors}
				</WizSchoolContext.Provider>
		);
}

export function useWizSchoolContext() {
	return useContext(WizSchoolContext);
}