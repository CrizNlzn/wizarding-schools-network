import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import WizStudent from "./WizStudent";
import AllWizStudents from "./AllWizStudents";
import AllWizSchools from "./AllWizSchools";
import WizSchool from "./WizSchool";
import Nav from "./nav";
import { WizSchoolParent } from "./Context/WizSchoolContext";
import { WizStudentParent } from "./Context/WizStudentContext";

const Root = () => {
  return (
    <div className="navigation">
      <nav />
      <WizSchoolParent>
        <WizStudentParent>
          <Routes>
            <Route path = "/" element={<Main />} />
            <Route path = "/Wizarding-schools/:id" element={<WizSchool />} />
            <Route path = "/WizStudents/:id" element= {<WizStudent />} />
            <Route path = "/Wizarding-schools" element={<AllWizSchools />} />
            <Route path = "/WizStudents" element = {<AllWizStudents />} />
          </Routes>
        </WizStudentParent>
      </WizSchoolParent>
    </div>
  );
};

export default Root;