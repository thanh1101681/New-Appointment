module.exports = function(data) {
	var moment = require('moment');
    if (!_.isEmpty(data)) {
        _.forEach(data, function(valueLev1, indexLev1) {
            if (_.isObject(valueLev1)) {
                _.forEach(valueLev1, function(valueLev2, indexLev2) {
                    if (moment(valueLev2, 'YYYY-MM-DD Z', true).isValid() ||
                        moment(valueLev2, 'YYYY-MM-DD HH:mm:ss Z', true).isValid()) {
                        data[indexLev1][indexLev2] = moment(valueLev2, 'YYYY-MM-DD HH:mm:ss Z').toDate();
                    }
                });
            } else {
                if (moment(valueLev1, 'YYYY-MM-DD Z', true).isValid() ||
                    moment(valueLev1, 'YYYY-MM-DD HH:mm:ss Z', true).isValid()) {
                    data[indexLev1] = moment(valueLev1, 'YYYY-MM-DD HH:mm:ss Z').toDate();
                }
            }
        });
    }
    return data;
};
