/**
 * Created by spdev on 25/05/2015.
 */
var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);

    view.render('index');

};