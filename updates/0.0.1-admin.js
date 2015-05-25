var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Tonny', last: 'Yan' },
        email: 'yhppenny@hotmail.com',
        password: 'yhp419857',
        canAccessKeystone: true
    }).save(done);

};