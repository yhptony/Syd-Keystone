var keystone = require('keystone');

//main keystone settings
keystone.init({
    'name': 'Syd-Keystone',

    'favicon': 'public/favicon.ico',
    'less': 'public',
    'static': ['public'],

    'views': 'templates/views',
    'view engine': 'jade',

    'auto update': true,
    'mongo': 'mongodb://localhost:27017/Syd-Keystone',

    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': 'kqh*lcP^rH&3XWQczHB~ZTqp91t~SPkV@?HCF>c|P(b2vGl$C)&1<@[38<{$MCo2'
});

//database settings
keystone.import('models');

//routing settings
keystone.set('routes', require('./routes'));

keystone.start();