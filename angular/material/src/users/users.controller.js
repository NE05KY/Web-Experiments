(function () {
    'use strict';

    function UserController(userService, $mdSidenav, $mdBottomSheet, $log) {
        var vm = this;
        vm.selected = null;
        vm.users = [];

        userService.loadAllUsers().then(function (users) {
            vm.users = users || [];
            vm.selected = users[0];
        });

        vm.selectUser = function (user) {
            vm.selected = angular.isNumber(user) ? $scope.users[user] : user;
        };

        vm.toggleUsersList = function () {
            $mdSidenav('left').toggle();
        };

        vm.makeContact = function () {

            $mdBottomSheet.show({
                controllerAs: "vm",
                templateUrl: './src/users/contactSheet.html',
                controller: ContactSheetController,
                parent: angular.element(document.querySelector('#content'))
            }).then(function (clickedItem) {
                $log.debug(clickedItem.name + ' clicked!');
            });

            function ContactSheetController($mdBottomSheet) {
                this.items = [
                    {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
                ];
                this.contactUser = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }
    }

    angular.module('users').controller('UserController', UserController);
})();