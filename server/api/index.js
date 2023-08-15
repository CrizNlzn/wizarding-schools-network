"use strict";
const router = require("express").Router();

// require your database and place your routes here
const { WizSchool, WizStudent } = require('../db');

//LIST OF ROUTES
	//ROUTES FOR SCHOOLS
router.get("/WizSchool", async (req, res, next) => {
	try {
		const allWizSchools = await WizSchool.findAll();
			res.send(allWizSchools)
	}
			catch (err) {
				next(err);
			};
});

//? - since seed doesnt have id in schools, do we use name instead?
router.get("/WizSchool/:id", async (req, res, next) => {
	try {
		const singleWizSchool = await WizSchool.findbyPk(req.params.name);
		res.send(singleWizSchool);
	}
			catch (err) {
				next(err);
			};
});

router.post("/WizSchool", async (res, req, next) => {
	try {
		const newWizSchool = await WizSchool.create(req.body);
		res.send(newWizSchool);
	}
			catch (err) {
				next(err);
			};
});

router.delete("/WizSchool/:id", async (req, res, next) => {
	try {
		const singleWizSchool = await WizSchool.findbyPk(req.params.name);
		singleWizSchool.destroy();
		res.sendStatus(200);
	}
			catch(err) {
				next(err);
			};
});

router.put("/WizSchool/:id", async (req, res, next) => {
	try {
		const singleWizSchool = await WizSchool.findbyPk(req.params.name);
		singleWizSchool.update(req.body);
		res.send(singleWizSchool);
	}
			catch(err) {
				next(err);
			};
});
 

//ROUTES FOR STUDENTS
router.get("/WizStudent", async (req, res, next) => {
	try {
		const AllWizStudent = await WizStudent.findAll();
	}
			catch (err) {
				next(err);
			};
});

router.get("/WizStudent/:id", async (req, res, next) => {
	try {
		const SingleWizStudent = await WizStudent.findbyPk(req.params.campusId);
		res.send(SingleWizStudent);
	}
			catch (err) {
				next(err);
			};
});

router.post("/WizStudent/:id", async (res, req, next) => {
	try {
		const newWizStudent = await WizStudent.create(req.body);
		res.send(newWizStudent);
	}
			catch (err) {
				next(err);
			};
});

router.delete("/WizStudent/:id", async (req, res, next) => {
	try {
		const singleWizStudent = await WizStudent.findbyPk(req.params.campusId);
		singleWizStudent.destroy();
		res.sendStatus(200);
	}
			catch(err) {
				next(err);
			};
});

router.put("/WizStudent/:id", async (req, res, next) => {
	try {
		const singleWizStudent = await WizStudent.findbyPk(req.params.campusId);
		singleWizStudent.update(req.body);
		res.send(singleWizStudent);
	}
			catch(err) {
				next(err);
			};
});

module.exports = router;
