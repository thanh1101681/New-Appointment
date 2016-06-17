module.exports = {
	GetListSerVice: function(req, res) {
		Service.findAndCountAll({
			attributes: {
				exclude: ['']
			}
		})
	}
}