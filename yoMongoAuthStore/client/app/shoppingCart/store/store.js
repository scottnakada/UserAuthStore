'use strict';

angular.module('yoMongoAuthStoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('store', {
                url: '/store',
                templateUrl: 'app/shoppingCart/store/store.html',
                controller: 'StoreCtrl'
            });
    });

//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store($http) {

    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];

    /* Create a reference point, since some of the callbacks have a different context for this */
    var store = this;
    /* The store products array */
    store.products = [];

    /* Read the database, and populate the products array */
    this.readDB = function () {
        /* Read the MongoDB Database */
        $http.get('/api/products').success(function (productsDB) {
            store.products = productsDB;
        });
    };

    /* Actually execute the readDB command */
    this.readDB();

    /* Get a product by SKU */
    this.getProduct = function (sku) {
        /* Scan the products array for the product */
        for (var i = 0; i < this.products.length; i++) {
            /* Is this the product we are looking for? */
            if (this.products[i].sku == sku) {
                /* Return the product */
                return this.products[i];
            }
        }
        return null;
    };

    /* Add a new product to the products array, and store it in the database */
    this.addProduct = function (newProduct) {
        /* Post the new product to the Mongo DB database */
        $http.post('/api/products', newProduct)
            .then(function (response) {
                /* After the data is written to the DB, write it to the local array */
                store.products.push(response.data);
            });
    };

    /* Update a product in the database */
    this.updateProduct = function (product) {
        /* Put the updated data to the MongoDB database */
        $http.put('/api/products/' + product._id, product);
        /* The updated data has two way data binding to the local array, with angular; */
        /* so the local array does not need to be updated */
    };

    /* Delete a product from the database */
    this.deleteProduct = function (deleteProduct) {
        /* Delete the product from the MongoDB database by id */
        $http.delete('/api/products/' + deleteProduct._id);
        /* Remove the deleted product from the local array.  We need to */
        /* lookup the index of the deleted Product, because the array can */
        /* be displayed in different sort orders, and that changes the index */
        this.products.splice(this.products.indexOf(deleteProduct), 1);
    };

}
