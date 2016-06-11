angular.module('starterApp', ['ngMaterial', 'users']).config(function ($mdIconProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');

    $mdIconProvider.defaultIconSet("./assets/svg/avatars.svg", 128);
    $mdIconProvider.icon("share", "./assets/svg/share.svg", 24);
    $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
});