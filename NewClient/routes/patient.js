var PatientController =  require('../controllers/PatientController');

module.exports = function(router) {
	router.get('/patient/detail?:patientUID',PatientController.detail);
}