module.exports = {
    Create: function(req, res) {
        res.render('appointment/create');
    },
    Read: function(req, res) {
        res.render('appointment/read');
    },
    List: function(req, res) {
        res.render('appointment/list');
    }
};
