'use strict';

/* Reference the main angular module */
angular.module('ionFireAuthStoreApp')
    /* Configure a route for this function */
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.products', {
                url: '/products/:productSku',
                views: {
                    'menuContent': {
                        templateUrl: "shoppingCart/products/products.html",
                        controller: 'ProductsCtrl'
                    }
                }
            }
        );
    }
);


//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber, image) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "VitaminC": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
    this.image = image;
}
