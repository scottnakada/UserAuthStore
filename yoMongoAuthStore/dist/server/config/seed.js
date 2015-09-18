/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Products = require('../api/products/products.model');

User.find({}).remove(function () {
    User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@test.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        }, function () {
            console.log('finished populating users');
        }
    );
});

Products.find({}).remove(function () {
    Products.create({
            sku: 'APL',
            name: 'Apple',
            description: 'Eat one every day to keep the doctor away!',
            price: 12,
            'cal': 90,
            nutrients: {
                "Carotenoid": 0,
                'VitaminC': 2,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/APL.png"
        }, {
            sku: 'AVC',
            name: 'Avocado',
            description: 'Guacamole anyone?',
            price: 16,
            cal: 90,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 1,
                'Folates': 1,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/AVC.png"
        }, {
            sku: 'BAN',
            name: 'Banana',
            description: 'These are rich in Potassium and easy to peel.',
            price: 4,
            cal: 120,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 2,
                'Folates': 1,
                'Potassium': 2,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/BAN.png"
        }, {
            sku: 'CTP',
            name: 'Cantaloupe',
            description: 'Delicious and refreshing.',
            price: 3,
            cal: 50,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 4,
                'Folates': 1,
                'Potassium': 2,
                'Fiber': 0
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/CTP.png"
        }, {
            sku: 'FIG',
            name: 'Fig',
            description: 'OK, not that nutritious, but sooo good!',
            price: 10,
            cal: 100,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 0,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/FIG.png"
        }, {
            sku: 'GRF',
            name: 'Grapefruit',
            description: 'Pink or red, always healthy and delicious',
            price: 11,
            cal: 50,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 4,
                'Folates': 1,
                'Potassium': 1,
                'Fiber': 1
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/GRF.png"
        }, {
            sku: 'GRP',
            name: 'Grape',
            description: 'wine is great, but grapes are even better.',
            price: 8,
            cal: 100,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 3,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 1
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/GRP.png"
        }, {
            sku: 'GUA',
            name: 'Guava',
            description: 'Exotic, fragrant, tasty!',
            price: 8,
            cal: 50,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 4,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/GUA.png"
        }, {
            sku: 'KIW',
            name: 'Kiwi',
            description: 'These come from New Zealand.',
            price: 8,
            cal: 50,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 4,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/KIW.png"
        }, {
            sku: 'LYC',
            name: 'Lychee',
            description: 'Unusual and highly addictive!',
            price: 18,
            cal: 125,
            nutrients: {
                'Carotenoid': 1,
                'VitaminC': 4,
                'Folates': 0,
                'Potassium': 2,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/LYC.png"
        }, {
            sku: 'MAN',
            name: 'Mango',
            description: 'Messy to eat, but well worth it.',
            price: 8,
            cal: 70,
            nutrients: {
                'Carotenoid': 3,
                'VitaminC': 4,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 1
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/MAN.png"
        }, {
            sku: 'ORG',
            name: 'Orange',
            description: 'Vitamin C anyone?  Go ahead, make some juice.',
            price: 9,
            cal: 70,
            nutrients: {
                'Carotenoid': 1,
                'VitaminC': 4,
                'Folates': 2,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/ORG.png"
        }, {
            sku: 'PAP',
            name: 'Papaya',
            description: 'Super-popular for breakfast.',
            price: 5,
            cal: 60,
            nutrients: {
                'Carotenoid': 3,
                'VitaminC': 4,
                'Folates': 2,
                'Potassium': 2,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PAP.png"
        }, {
            sku: 'PCH',
            name: 'Peach',
            description: 'Add some cream and enjoy.',
            price: 19,
            cal: 70,
            nutrients: {
                'Carotenoid': 1,
                'VitaminC': 2,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PCH.png"
        }, {
            sku: 'PER',
            name: 'Pear',
            description: 'Delicious fresh, or cooked in red wine, or distilled.',
            price: 8,
            cal: 100,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 2,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PER.png"
        }, {
            sku: 'PMG',
            name: 'Pomegranate',
            description: 'Delicious, healthy, beautiful, and sophisticated!',
            price: 19,
            cal: 110,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 2,
                'Folates': 0,
                'Potassium': 2,
                'Fiber': 0
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PMG.png"
        }, {
            sku: 'PNP',
            name: 'Pineapple',
            description: "Enjoy it (but don't forget to peel first).",
            price: 4,
            cal: 60,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 3,
                'Folates': 0,
                'Potassium': 0,
                'Fiber': 1
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PNP.png"
        }, {
            sku: 'PSM',
            name: 'Persimmon',
            description: 'Believe it or not, they are berries!',
            price: 6,
            cal: 120,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 3,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 3
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/PSM.png"
        }, {
            sku: 'STR',
            name: 'Strawberry',
            description: 'Beautiful, healthy, and delicious.',
            price: 7,
            cal: 40,
            nutrients: {
                'Carotenoid': 0,
                'VitaminC': 4,
                'Folates': 1,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/STR.png"
        }, {
            sku: 'TNG',
            name: 'Tangerine',
            description: 'Easier to peel than oranges!',
            price: 8,
            cal: 50,
            nutrients: {
                'Carotenoid': 3,
                'VitaminC': 4,
                'Folates': 1,
                'Potassium': 1,
                'Fiber': 2
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/TNG.png"
        }, {
            sku: 'WML',
            name: 'Watermelon',
            description: 'Nothing comes close on those hot summer days.',
            price: 4,
            cal: 90,
            nutrients: {
                'Carotenoid': 4,
                'VitaminC': 4,
                'Folates': 0,
                'Potassium': 1,
                'Fiber': 1
            },
            image: "http://scottnakada.github.io/UserAuthStore/images/products/WML.png"
        }, function () {
            console.log('finished populating products');
        }
    );
});
