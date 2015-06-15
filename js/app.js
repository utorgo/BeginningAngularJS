(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Lorem',
            price: 2.95,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et expedita nisi earum totam iusto voluptatum, nam ipsum dolores culpa. Eaque?',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'img/cat3.jpg',
                    thumb: 'img/cat3.jpg',
                },
                {
                    full: 'img/cat4.jpg',
                    thumb: 'img/cat4.jpg',
                }
            ],
        },
        {
            name: 'Ipsum',
            price: 5.95,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et expedita nisi earum totam iusto voluptatum, nam ipsum dolores culpa. Eaque?',
            canPurchase: false,
            soldOut: false,
            images: [
                {
                    full: 'img/dog3.jpg',
                    thumb: 'img/dog3.jpg',
                },
                {
                    full: 'img/dog4.jpg',
                    thumb: 'img/dog4.jpg',
                }
            ],
        }
    ];


})();