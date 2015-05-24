var keystone = require('keystone');

keystone.init({
    'name': 'Syd-Keystone',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': 'mongodb://localhost/Syd-Keystone',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': '(your secret here)'
});

//todo
require('./models');

//import expressjs router
keystone.set('routes', require('./routes'));

keystone.start();